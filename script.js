// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Terminal boot sequence
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const terminalBody = document.getElementById('terminalBody');

const sequence = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'aria_chen — cybersecurity student' },
  { type: 'cmd', text: 'cat focus.txt' },
  { type: 'out', text: 'offensive security · digital forensics · CTF' },
  { type: 'cmd', text: './run_portfolio.sh --live' },
  { type: 'out', text: 'status: online — scroll to explore' }
];

function buildLine(promptShown) {
  const p = document.createElement('p');
  p.className = 'line';
  if (promptShown) {
    p.innerHTML = '<span class="prompt">guest@portfolio</span><span class="colon">:</span><span class="path">~</span><span class="dollar">$</span> ';
  }
  return p;
}

async function typeText(el, text, speed) {
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i];
    await new Promise(r => setTimeout(r, speed));
  }
}

async function runSequence() {
  if (!terminalBody) return;
  terminalBody.innerHTML = '';

  if (prefersReducedMotion) {
    sequence.forEach(step => {
      const p = document.createElement('p');
      if (step.type === 'cmd') {
        p.className = 'line';
        p.innerHTML = '<span class="prompt">guest@portfolio</span><span class="colon">:</span><span class="path">~</span><span class="dollar">$</span> ' + step.text;
      } else {
        p.className = 'out';
        p.textContent = step.text;
      }
      terminalBody.appendChild(p);
    });
    return;
  }

  for (const step of sequence) {
    if (step.type === 'cmd') {
      const line = buildLine(true);
      const span = document.createElement('span');
      span.className = 'typed';
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      cursor.textContent = '▌';
      line.appendChild(span);
      line.appendChild(cursor);
      terminalBody.appendChild(line);
      await typeText(span, step.text, 45);
      cursor.remove();
      await new Promise(r => setTimeout(r, 250));
    } else {
      const out = document.createElement('p');
      out.className = 'out';
      out.textContent = step.text;
      terminalBody.appendChild(out);
      await new Promise(r => setTimeout(r, 350));
    }
  }
}

runSequence();
