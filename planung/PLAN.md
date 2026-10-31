# alangawlik.de — Projektplan

## Was das Projekt ist
Persönliche Webseite von Alan Gawlik (KI-Enthusiast und Hobby-Entwickler): Projekte, Kontakt, kurze Texte.
Live unter https://alangawlik.de (GitHub Pages, Auslieferung aus dem Ordner `docs/`).

## Tech-Stack
Astro 4 · Tailwind 3 (daisyUI wird mit Änderung 01 entfernt) · MDX · Sitemap. Repo: `TheDevAlan/Mywebsite`.
Build: `npm run build` schreibt nach `docs/` (= Veröffentlichung nach Push auf `main`).

## Ordner-Konvention
Planung liegt in `planung/` (nicht `docs/`, das ist die öffentliche Build-Ausgabe) — siehe `planung/decisions.md`, E-02.
Alle Workflow-Pfade `docs/…` gelten hier als `planung/…`.

## Änderungen
- [ ] 01 — Design-Relaunch „lockeres Skizzenbuch“ (Umbau) → planung/changes/01-umbau-design-relaunch.md · in Umsetzung → planung/segments/v2/

## Segmente

### v2 — Änderung 01: Design-Relaunch „lockeres Skizzenbuch“
- [x] 01 — Auslieferung absichern (CNAME & .nojekyll) → `planung/segments/v2/01-auslieferung-absichern.md`
- [x] 02 — Altlasten entfernen (Lebenslauf, Services, Store, RSS) → `planung/segments/v2/02-altlasten-entfernen.md`
- [x] 03 — Design-Fundament, daisyUI raus → `planung/segments/v2/03-design-fundament.md`
- [x] 04 — Layout mit Sidebar und Theme-Schalter → `planung/segments/v2/04-layout-sidebar.md`
- [x] 05 — Zweisprachigkeit (DE/EN) → `planung/segments/v2/05-zweisprachigkeit.md`
- [x] 06 — Doodle-Komponente und Startseite → `planung/segments/v2/06-startseite-doodle.md`
- [x] 07 — about → `planung/segments/v2/07-about.md`
- [x] 08 — works → `planung/segments/v2/08-works.md`
- [x] 09 — thoughts → `planung/segments/v2/09-thoughts.md`
- [x] 10 — contact → `planung/segments/v2/10-contact.md`
- [x] 11 — Impressum und 404 → `planung/segments/v2/11-impressum-404.md`
- [x] 12 — Weiterleitungen → `planung/segments/v2/12-weiterleitungen.md`
- [ ] 13 — Mobil und reduzierte Bewegung → `planung/segments/v2/13-mobil-reduced-motion.md`
- [ ] 14 — Abschluss und Gesamtprüfung → `planung/segments/v2/14-abschluss-aufraeumen.md`

_Frühere Runden: keine (`v1` wäre der Erstbau, existiert nicht als Segmente)._
