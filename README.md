# Aria Chen — Cybersecurity Portfolio (Starter Template)

A dark, terminal-inspired one-page portfolio built with plain HTML/CSS/JS —
no build step, no framework, deploys on Vercel in about a minute.

## Files
- `index.html` — page structure and content
- `style.css` — dark tech theme (colors, layout, animations)
- `script.js` — terminal typing effect + mobile nav toggle
- `vercel.json` — clean-URL config for Vercel

## 1. Customize the content
Open `index.html` and replace:
- Name, email, and social links (search for `ariachen`, `example.com`)
- The `whoami` / hero terminal lines in the `sequence` array in `script.js`
- Skills, percentages, and tools in the **toolkit** section
- Projects/writeups in the **writeups** section — swap in your real projects
  and point `href="#"` links to your actual GitHub repos or write-up pages
- Certifications in the **credentials** section

## 2. Preview locally
Just open `index.html` in a browser — no build tools needed.
Or run a quick local server:
```bash
npx serve .
```

## 3. Deploy to Vercel

**Option A — GitHub (recommended, gives you auto-redeploys):**
1. Create a new GitHub repo and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub
3. **Add New Project** → import your repo → **Deploy**
   (Vercel auto-detects this as a static site, no config needed)

**Option B — Instant deploy without GitHub:**
```bash
npm i -g vercel
vercel
```
Follow the prompts — it'll give you a live URL in under a minute.

## 4. Custom domain (optional)
In your Vercel project → **Settings → Domains** → add your domain and
follow the DNS instructions shown.

---
Built with dark-terminal aesthetics for a cybersecurity-focused portfolio.
Feel free to swap the color tokens at the top of `style.css` (`:root`) to
retheme the whole site.
