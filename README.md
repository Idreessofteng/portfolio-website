# Muhammad Idrees — 3D-style Portfolio

A dark, motion-heavy portfolio built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## What changed from the original spec

This was adapted from a template built for a fictional 3D creator persona.
A few things were intentionally changed so the site doesn't misrepresent you:

- **Bio & services** — rewritten to reflect your real background (Software
  Engineering student, Python/C++/SQL, no design-industry experience claimed).
- **Hero visual** — the original used a stock portrait photo of "Jack."
  Since you don't have a profile photo yet, that's replaced with an abstract
  monogram graphic that follows the mouse.
- **Marquee** — the original scrolled 21 GIFs of other people's unrelated
  client sites. That's replaced with a scrolling row of your actual skills.
- **Projects** — the original showed 3 fake client projects with stock
  screenshots. Replaced with your 2 real projects (Student Management
  System, Personal Portfolio Website), shown as text/description cards
  since there are no real screenshots yet. Drop images into `public/` and
  wire them into `src/components/ProjectCard.tsx` whenever you have them.

## Structure

```
src/
  data/content.ts       All content lives here
  components/           Hero, Marquee, About, Services, Projects, etc.
  App.tsx                Assembles the page
```

## Latest additions

- **About** — expanded with your full Q&A (why Software Engineering, what
  developer you want to become, what motivates you, 5-year goals).
- **Education** — new section: University of Lahore, BS Software
  Engineering, 5th semester, expected 2028, CGPA 3.43.
- **Certificates** — new section with a placeholder "View Certificate"
  button for your AI/ML certificate — wire up the real link once you have
  the credential URL.
- **Contact** — now shows Email, Phone, WhatsApp, and LinkedIn as separate
  cards, plus a copy-email button.
- **Animated cursor** — a dot + trailing ring that follows the mouse and
  expands over links/buttons (desktop only; falls back to the normal
  cursor on touch devices).

- **GitHub link** — added your profile (github.com/Idreessofteng) as a
  card in the Contact section, alongside Email, Phone, WhatsApp, LinkedIn.
- **Back-to-top button** — a floating blue circular button (bottom-right)
  appears once you scroll down, and jumps back to the hero on click.
- **Technical Skills section** — new section with circular progress rings
  (Python, C++, SQL, OOP, Data Structures, Git) — only skills that are
  actually on your resume; Java/React/Node.js from the reference screenshot
  were left out since they're not on your CV. The percentages are starting
  self-assessment estimates in `technicalSkills` in `content.ts` — adjust
  them to how you'd actually rate yourself.
- **Contact button fix** — "Contact Me" now smooth-scrolls down to the
  Contact section (which lists Email, Phone, WhatsApp, LinkedIn) instead of
  silently trying to open a mail client.

Your resume is already in `public/resume.pdf`, and the hero section has a
"Resume" download button next to "Contact Me."
