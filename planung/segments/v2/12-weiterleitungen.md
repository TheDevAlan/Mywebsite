# Segment 12: Weiterleitungen alter Adressen, alte Projektseite weg
Status: offen · Hängt ab von: 08, 09
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Entscheidung E-04 (`planung/decisions.md`): GitHub Pages kann keine echten 301-Weiterleitungen; stattdessen erzeugt Astro statische Weiterleitungsseiten über die `redirects`-Konfiguration in `astro.config.mjs` (⚠️ zu verifizieren in der Astro-4-Doku: Form der erzeugten Seite, Verhalten bei vorhandener Seite gleicher Route).
Bei Planung existierte noch `src/pages/projects.astro` (Ersatz: `/works`, Segment 08); die alten Blog-Seiten wurden in Segment 09 entfernt. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
- `/projects` → `/works` und `/blog` → `/thoughts` weiterleiten.
- `src/pages/projects.astro` und die dann ungenutzte Komponente `HorizontalCard` entfernen (vorher Grep auf Importe).
- Sitemap prüfen: enthält die neuen Seiten in beiden Sprachen und keine Weiterleitungs-, Demo- oder gelöschten Seiten. Falls Weiterleitungsseiten in der Sitemap landen, per Sitemap-Filter ausschließen (⚠️ Option der `@astrojs/sitemap`-Integration zu verifizieren).

Nicht Teil davon: Weiterleitungen für `/cv`, `/services`, `/store` (die dürfen 404 liefern).

## Akzeptanzkriterien
- Aufruf `/projects` landet auf `/works`, `/blog` auf `/thoughts` (im Build: Weiterleitungsseiten unter `docs/projects/` und `docs/blog/`).
- Keine `projects.astro`, keine `HorizontalCard` mehr in `src/`.
- `docs/sitemap-0.xml` listet `/`, `/about`, `/works`, `/thoughts`, `/contact`, `/impressum` und die `/en/`-Pendants — sonst nichts Veraltetes.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01).
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: alle 17 auf `/works`.
- Impressum: Wortlaut unverändert, erreichbar.
- Kontaktwege korrekt.
- Sitemap & robots erzeugt, ohne gelöschte Seiten.
- Alte Links: `/projects` und `/blog` leiten weiter.
- Theme & Sprache funktionieren.

## So prüfst du es (für den Nutzer)
`npm run build` und danach `npm run preview` starten, im Browser `http://localhost:4321/projects` öffnen → du landest auf „works“.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: _(trägt /dev-build ein)_
