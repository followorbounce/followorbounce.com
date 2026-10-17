# Progress — followorbounce.com

## Status

- Site reorganized into a personal hub (About/Work/Writing/Reference/Interests) plus a commercial "Offers" page for the Follow or Bounce studio.
- Homepage reduced to a stub pointing at the `followorbounce.github.io` "Labs" hub.
- ~29 standalone artifact pages live under `p/` (Sanji, MeridianMind, Heros Journey, radio/ham reference pages, MarineWoodCraft, BayCurrentDiving, etc.) plus one intentional Russian variant (`sanji-ru.html`).
- Git: clean working tree, `main` up to date with `origin/main` (github.com/followorbounce/followorbounce.com).

## Recent work

- 2026-10-02 — Client-sites review pass (uncommitted): `p/MarineWoodCraft.html` brand-guide stats aligned with the client site (20+/500+ → 3–7+/50+); `og:image`/`twitter:image` in all `p/*.html` made absolute; fixed missing OG images on its-us/its-us-1 (→ its-us.svg) and rfid-keys (→ keywave-hawaii.svg); `p/who-are.html` og:url `/pages/who-are` → `/p/who-are`; `p/rewriting-the-self.html` broken relative image src fixed; `p/BayCurrentDiving.html` "Back to site" links (pointed to non-existent `p/index.html`) now go to the live BCD site; aria-labels on the two search inputs. Open: `p/marine-vhf-channels.html` og:image PNG doesn't exist; `p/FollowOrBounce_v2.html` (headless draft) is published; several p/ pages lack meta descriptions.

- 2026-09-16 — Added CLAUDE.md and progress.md for ongoing tracking.
- 2026-09-13 (23f2b27) — Rewrite About to match the site's actual current state.
- 2026-09-13 (e43bd81) — Stop double-promising "Experiments & Observations".
- 2026-09-13 (c12995c) — Link Heavy Machinery Blueprint from /work/, add KeyWave cover, drop Reference from nav.
- 2026-09-12 (9b843d1) — Link the three radio pages back to Radio Communications on the hub.
- 2026-09-12 (7feb581) — Reduce homepage to a stub pointing at the GitHub Pages hub.
- 2026-09-12 (fbebc9a) — Merge but-one. and Sanji into the site.
- 2026-09-12 (f22b64e) — Phase 4: Interests page, p/ head normalization, shared p/ chrome.
- 2026-09-12 (e255f4d) — Reorganize into a personal hub with a commercial Offers page.
- Earlier: portfolio/reference-page buildout (ham tech crash course, RFID keys, radio reference portal, meridian delite, etc.) going back to initial commit.

- 2026-09-19 — Added a Cloudflare Web Analytics beacon (cross-repo rollout across every deployed followorbounce/client site). See [[cloudflare-analytics-setup]] in the assistant's memory for the account/token map.

## Next steps

- Finish normalizing `p/*.html` heads/chrome across all standalone pages (referenced as ongoing in commit f22b64e).
- Set real `price` values in `_data/offers.yml` when the Offers page is ready to show pricing.
- No open uncommitted changes as of this writing.

## 2026-10-16 — Index infrastructure
- HTTPS enforcement switched on for the Pages site (http now 301s to https); IndexNow key file added.
