// ---------- Terminal boot sequence ----------
const bootLines = [
  "whoami",
  "→ Soham Walunj — Cyber Security student, SICSR Pune",
  "cat status.txt",
  "→ Open for Cyber Security / SOC Analyst internships"
];

function typeLine(el, text, speed, done){
  let i = 0;
  const tick = () => {
    if (i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, speed);
    } else if (done) {
      setTimeout(done, 700);
    }
  };
  tick();
}

function runBoot(){
  const typedEl = document.getElementById('typed1');
  const body = document.getElementById('terminalBody');
  if (!typedEl || !body) return;

  let idx = 0;
  const step = () => {
    if (idx >= bootLines.length) return;
    typeLine(typedEl, bootLines[idx], 32, () => {
      idx++;
      if (idx < bootLines.length){
        const line = document.createElement('p');
        line.className = 'line';
        const isPrompt = idx % 2 === 0;
        if (isPrompt){
          line.innerHTML = '<span class="prompt">guest@portfolio</span><span class="colon">:</span><span class="path">~</span><span class="dollar">$</span> <span class="typed"></span><span class="cursor">▌</span>';
        } else {
          line.innerHTML = '<span class="typed" style="color:var(--accent)"></span>';
        }
        body.appendChild(line);
        const newTyped = line.querySelector('.typed');
        const oldCursor = typedEl.parentElement.querySelector('.cursor');
        if (oldCursor) oldCursor.remove();
        typedEl = newTyped;
        step();
      }
    });
  };
  step();
}
document.addEventListener('DOMContentLoaded', runBoot);

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Scroll reveal ----------
const revealTargets = document.querySelectorAll(
  '.about-grid, .skills-grid .skill-card, .log-entry, .edu-row, .cert-card, .contact-card'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => revealObserver.observe(el));

// ---------- Skill bar fill ----------
const skillBars = document.querySelectorAll('.skill-bar span');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('filled');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));
