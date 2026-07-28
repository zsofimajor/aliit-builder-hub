# Aliit Builder Fellowship — site

A small Jekyll site for GitHub Pages: Overview, Fellowship, Builder Guide, and Builder Program pages, sharing one dark nav/layout.

## What's here

```
_config.yml              site settings
_layouts/default.html    shared nav + page shell (edit once, applies everywhere)
assets/css/style.css     all styling
assets/js/nav.js         mobile nav toggle
assets/img/              logos + photos used across the site
index.md                 Overview (home) page
fellowship/index.md      Fellowship page — from the Notion Fellowship doc
builder-guide/index.md   Builder Guide page — from the Notion Candidate Guide doc
builder-program/index.md Builder Program page — from the program PDF
```

Every page is plain Markdown with a small front-matter block at the top (the `---` fenced section). You only ever edit the Markdown files for content — the nav and styling live in `_layouts/default.html` and `style.css` and don't need to be touched per page.

All four pages are filled in with real content. Naming has been updated throughout: **Candidate → Builder**, and the contribution lanes are **Building / Knowledge Sharing / Community Leadership**.

One open item: the Fellowship doc's Candidate Guide links out to a "Phases" CSV (example contributions per lane) that wasn't part of what was exported — `builder-guide/index.md` has a note where that table belongs. Export that CSV from Notion and it can be added as a real table.

## 1. Put this on GitHub

From this folder:

```bash
cd aliit-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-org-or-user>/<repo-name>.git
git push -u origin main
```

If you don't have a repo yet: create a new one on GitHub first (no README/license needed, this folder already has one), then run the commands above with that repo's URL.

## 2. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Choose branch **main**, folder **/ (root)**, then **Save**
4. GitHub will build the site with Jekyll automatically (no extra config needed) and give you a URL like `https://<org-or-user>.github.io/<repo-name>/`

## 3. One setting to double check

Open `_config.yml`:

- If this repo will be the special `<username>.github.io` repo (a user/org page, served at the root domain), leave `baseurl: ""` as is.
- If this is a **project** repo, i.e. served at `https://<username>.github.io/<repo-name>/`, set:
  ```yaml
  baseurl: "/<repo-name>"
  ```
  Then every internal link (they all use `relative_url`) will resolve correctly.

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
