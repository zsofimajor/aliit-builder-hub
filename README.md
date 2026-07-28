# Aliit Builder Fellowship — site

A small Jekyll site for GitHub Pages: Overview, Fellowship, Builder Guide, and Builder Program pages, sharing one dark nav/layout.

## What's here

```
_config.yml              site settings
_layouts/default.html    shared nav + page shell + footer (edit once, applies everywhere)
assets/css/style.css     all styling
assets/js/nav.js         mobile nav toggle
assets/img/              logos + photos used across the site
index.md                 Overview page — general intro to the Aliit Fellowship
builder-guide/index.md   Builder Guide — onboarding, full fellowship path, FAQ (has an in-page "jump to" nav)
builder-program/index.md Builder Program — the monthly $1,000 pool, external-facing
fellowship/index.html    redirect stub (the old Fellowship page was folded into Overview + Builder Guide)
```

Every content page is plain Markdown with a small front-matter block at the top (the `---` fenced section). You only ever edit the Markdown files for content — the nav, footer, and styling live in `_layouts/default.html` and `style.css` and don't need to be touched per page.

Naming has been updated throughout: **Candidate → Builder**, and the contribution lanes are **Building / Knowledge Sharing / Community Leadership**.

One open item: the Builder Guide references a "Phases" CSV (example contributions per lane) that wasn't part of the Notion export used to build this site — there's a note in `builder-guide/index.md` where that table belongs.

## 1. Publish under your personal account first

```bash
cd aliit-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/aliit-builder-hub.git
git push -u origin main
```

Create the `aliit-builder-hub` repo on GitHub first if it doesn't exist yet (a normal project repo — not the special `<username>.github.io` one).

## 2. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Choose branch **main**, folder **/ (root)**, then **Save**
4. Live at `https://<your-username>.github.io/aliit-builder-hub/`

`_config.yml` is already set to `baseurl: "/aliit-builder-hub"` to match. If you rename the repo, update that line to match.

## 3. Moving to the company org later

1. Repo **Settings → Danger Zone → Transfer ownership** → enter the company org's name
2. Keep the repo name the same (`aliit-builder-hub`) during transfer — that way `_config.yml` needs no changes
3. On the org's copy, double check **Settings → Pages** still has branch `main` / folder `/ (root)` set
4. New URL: `https://<org-name>.github.io/aliit-builder-hub/` — anywhere you've shared the personal URL will need updating at this point, since it stops resolving

## 4. Filling in the two Notion-sourced pages

`fellowship/index.md` and `builder-guide/index.md` are placeholders right now. To finish them:

1. In Notion, open the doc → **•••** menu → **Export** → Markdown & CSV
2. Open the exported `.md` file
3. Paste its body into the matching file here, replacing the callout/placeholder text — keep the front matter (`title: ...`) at the very top
4. Do a find-and-replace for **candidate → builder** (and **candidates → builders**) in the pasted text

## Local preview (optional)

If you have Ruby installed:

```bash
gem install bundler jekyll
bundle init
bundle add jekyll
bundle exec jekyll serve
```

Then visit `http://localhost:4000`. Not required — GitHub will build it for you on push either way.
