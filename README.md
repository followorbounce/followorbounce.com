# followorbounce.com

Personal site of D.V. — writing, reference tools, and **Follow or Bounce**, a
one-person studio for AI, agentic systems, and the web.

**Live:** [followorbounce.com](https://followorbounce.com) · **Host:** GitHub Pages (CNAME) · **Stack:** Jekyll, Sass, vanilla JS

---

## Structure

```
followorbounce.com/
├── _config.yml            # config, navigation, author/studio vars, plugins
├── _data/
│   ├── work.yml           # client & studio projects  → /work/
│   ├── writing.yml        # essays & interactive pieces → /writing/
│   ├── reference.yml      # guides & tools             → /reference/
│   └── offers.yml         # services, process, FAQ     → /offers/
├── _includes/
│   └── portfolio-card.html
├── _layouts/
│   └── default.html
├── _sass/
│   ├── _brand-and-404.scss
│   ├── _portfolio.scss
│   └── _sections.scss     # listing rows, offers page, footer nav
├── assets/
│   ├── css/main.scss
│   └── js/main.js         # nav, AI widget, contact forms (FormSubmit)
├── pages/
│   ├── about.md   brand.md
│   ├── work.md    writing.md   reference.md
│   ├── offers.md  contact.md
├── p/                     # 29 hand-built standalone artifact pages (self-contained HTML)
├── 404.html   index.html
├── CNAME   robots.txt   llms.txt
└── Gemfile
```

`p/*.html` are complete standalone documents (their own `<head>` and CSS).
Jekyll copies them verbatim. Normalizing their heads is a later pass.

---

## Editing content

- **Add a project / essay / tool:** add an entry to the relevant `_data/*.yml`.
  `link` is an external URL or an internal `/p/<slug>` path. `featured: true`
  surfaces it on `/offers/` (work) or the featured position.
- **Change services or pricing:** edit `_data/offers.yml`. Set each service's
  `price` (currently `""` → hidden) when ready.
- **Change the name/byline:** `author`, `byline`, `studio`, `email` in `_config.yml`.

---

## Local development

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

Requires Ruby + Bundler. `_site/` and `.jekyll-cache/` are gitignored.

---

## Forms

`.contact-form` posts to FormSubmit (`data-email`, optional `data-subject`).
No backend. The AI widget's `PROXY_URL` lives in `assets/js/main.js`.

---

## Related repos

- `followorbounce.github.io` — "Labs" index of broader interests (untouched here)
- `id.followorbounce.com` — earlier refactor experiment; superseded by this repo
