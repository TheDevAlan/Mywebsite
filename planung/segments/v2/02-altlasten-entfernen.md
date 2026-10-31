# Segment 02: Altlasten entfernen (Lebenslauf, Services, Store, RSS)
Status: erledigt · Hängt ab von: 01
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Die Seite basiert auf dem Template „Astrofy“; Lebenslauf (`src/pages/cv.astro`), Services (`src/pages/services.astro`), Store (`src/pages/store/`, Collection `store` in `src/content/config.ts`, `src/content/store/`, `StoreItemLayout.astro`) und RSS (`src/pages/rss.xml.js`, Paket `@astrojs/rss`) entfallen laut Handoff bzw. Entscheidung E-07 (`planung/decisions.md`).
RSS ist bereits defekt (Build-Warnung zu `get` statt `GET`). **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
Diese Bereiche vollständig entfernen, inklusive aller Verweise darauf und der Komponenten, die **ausschließlich** von ihnen genutzt werden (z. B. CV-Zeitleiste, Store-Karte). Vor dem Löschen einer Komponente per Grep prüfen, dass sie nirgends sonst importiert wird.
Suchauftrag für Verweise: Grep über `src/` nach `/cv`, `/services`, `/store`, `rss` — bei Planung rund ein halbes Dutzend Dateien betroffen, u. a. das Seitenmenü; verbindlich ist das Grep-Ergebnis zur Bauzeit.
`@astrojs/rss` aus den Abhängigkeiten entfernen (Paketmanager: npm, `package-lock.json` ist maßgeblich; `pnpm-lock.yaml` existiert ebenfalls — nicht anfassen, im Grounding vermerken).

**Nicht** Teil davon: Blog (`src/pages/blog/`, Demo-Posts, Tag-Seiten) und Projekte — die werden in späteren Segmenten ersetzt. Bilder unter `public/Profil/` bleiben liegen (Scope-Grenze).

## Akzeptanzkriterien
- Grep über `src/` findet keine Verweise mehr auf `/cv`, `/services`, `/store`, `rss.xml`.
- Build grün; die RSS-Warnung ist weg; in `docs/` gibt es keine `cv/`, `services/`, `store/` und kein `rss.xml` mehr.
- `docs/sitemap-0.xml` enthält keine der entfernten Seiten.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Noch nicht neu gebaute Seiten in ihrer alten Fassung prüfen.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: `/projects` zeigt alle 17 Projekte.
- Impressum: `/impressum` erreichbar, Text unverändert.
- Sitemap & robots erzeugt, ohne gelöschte Seiten.

## So prüfst du es (für den Nutzer)
`npm run dev` starten, im Browser `http://localhost:4321/cv` öffnen → erwarte die 404-Seite. Startseite und Projekte öffnen sich wie bisher.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: 0
Hinweis: `pnpm-lock.yaml` enthält weiterhin `@astrojs/rss` (bewusst nicht angefasst).
