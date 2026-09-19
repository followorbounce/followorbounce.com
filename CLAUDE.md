# followorbounce.com

Personal site of D.V.: writing, reference tools, and "Follow or Bounce" — a one-person studio for AI, agentic systems, and the web. Live at followorbounce.com on GitHub Pages. Stack: Jekyll, Sass, vanilla JS.

## Structure

- `_config.yml` — config, navigation, author/studio vars, plugins
- `_data/{work,writing,reference,offers,interests}.yml` — drive the corresponding `/work/`, `/writing/`, `/reference/`, `/offers/`, `/interests/` pages
- `_includes/`, `_layouts/default.html`, `_sass/` — Jekyll templating + styles
- `assets/css/main.scss`, `assets/js/main.js` — nav, AI widget (`PROXY_URL`), contact forms (FormSubmit)
- `pages/*.md` — the top-level content pages (about, brand, work, writing, reference, offers, contact)
- `p/` — ~29 hand-built standalone artifact pages, each a complete self-contained HTML document (own `<head>`/CSS); Jekyll copies them verbatim
- `404.html`, `index.html`, `CNAME`, `robots.txt`, `llms.txt`, `Gemfile`

## Conventions

- To add a project/essay/tool: add an entry to the relevant `_data/*.yml` (`link` is external URL or internal `/p/<slug>` path; `featured: true` surfaces it on `/offers/` or a featured slot).
- To change services/pricing: edit `_data/offers.yml` (empty `price: ""` hides the price).
- Local dev: `bundle install && bundle exec jekyll serve` (Ruby + Bundler required); `_site/`/`.jekyll-cache/` are gitignored.
- `p/*.html` pages intentionally carry their own head/CSS rather than the site layout — normalizing them is a known, deferred cleanup, not an oversight.
- Never use Russian in code/UI/docs unless the task explicitly calls for it (note: `p/sanji-ru.html` is an intentional Russian-language variant of `p/sanji.html` — that's a spec'd exception, don't "fix" it).

## Related repos

- `followorbounce.github.io` — separate "Labs" index of broader interests; untouched by this repo.
- `id.followorbounce.com` — earlier refactor experiment, superseded by this repo.

## Repo

`origin` → `github.com/followorbounce/followorbounce.com`.

## Analytics
Cloudflare Web Analytics beacon added 2026-09-19 — own site (host `followorbounce.com`, see `[[cloudflare-analytics-setup]]` in memory). Injected into `_layouts/default.html` plus every standalone `p/*.html` page individually (they carry their own `<head>`). Skipped `p/FollowOrBounce_v2.html` — orphaned draft fragment, no `<head>` to inject into.
