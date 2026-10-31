# Segment 08: Seite „works“ mit Projektdaten aus einer Datei
Status: erledigt · Hängt ab von: 05
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Design-Referenz: `planung/design-handoff/README.md`, Abschnitt **6c works** (Kategorie-Titel, Raster, Kachel, Farbtöne `--t0…--t5` mit Index-Formel, „neu!“-Badge, „IN ARBEIT“-Stempel); Prototyp Runde 6c.
Daten: `planung/design-handoff/projects.json` — 17 Projekte, Felder `category, title, description, href, isNew, wip`, Kategorien in Datei-Reihenfolge. Bei Planung weicht mindestens ein Link bewusst von der alten Seite ab (LinkedIn-Beitrag ohne Tracking-Parameter).
Heute: `src/pages/projects.astro` mit 17 fest eingetragenen `HorizontalCard`s und Bildern aus `/Profil/`. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
1. `projects.json` ins Projekt übernehmen (z. B. `src/data/`) und **gegen die alte Seite abgleichen**: jedes Projekt aus `git show main:src/pages/projects.astro` muss mit gleichem Ziel-Link (Tracking-Parameter dürfen fehlen) und gleichem Text vorhanden sein. Abweichungen im Grounding auflisten und Alan fragen, bevor etwas „korrigiert“ wird.
2. Englisch vorbereiten: pro Projekt optionale englische Felder für Titel/Beschreibung erlauben; fehlen sie, gilt der deutsche Text (Muster aus Segment 05). Benennung der Felder in diesem Segment festlegen und im Grounding notieren. Kategorienamen ebenfalls übersetzbar mit DE-Fallback.
3. Seite `/works` und `/en/works` nach 6c: sticky Sidebar mit „works“ aktiv, Kategorie-Blöcke, Kachel-Raster, Kacheln als Links in neuem Tab, Badge bei `isNew`, Stempel bei `wip`. Beschreibung auf fünf Zeilen begrenzt, Silbentrennung wie im Handoff.
4. Keine Vorschaubilder mehr (Handoff „Assets“).

Nicht Teil davon: Weiterleitung `/projects` → `/works` und Löschen von `projects.astro` (Segment 12), Mobil-Raster (Segment 13), Löschen der Bilddateien (Scope-Grenze).

## Akzeptanzkriterien
- `/works` zeigt 17 Kacheln in 4 Kategorien in Datei-Reihenfolge; Farbtöne wechseln nach der Handoff-Formel.
- Abgleich alt ↔ neu im Grounding dokumentiert, ohne unerklärte Abweichung.
- Jede Kachel öffnet ihr Ziel im neuen Tab.
- „neu!“ und „IN ARBEIT“ erscheinen genau bei den markierten Projekten.
- Sidebar bleibt beim Scrollen stehen.
- `/en/works` existiert, zeigt deutsche Texte als Rückfall.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Noch nicht neu gebaute Seiten in ihrer alten Fassung prüfen.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: alle 17 auf `/works` (und weiterhin auf `/projects`, bis Segment 12).
- Impressum: `/impressum` erreichbar, Text unverändert.
- Sitemap & robots erzeugt.
- Theme & Sprache: beide Themes lesbar (Kachel-Töne dunkel), Umschalter landet auf `/en/works` bzw. `/works`.

## So prüfst du es (für den Nutzer)
`npm run dev`, auf „works“ klicken → farbige quadratische Kacheln, oben „Projekte“ mit oranger Unterstreichung. Kacheln zählen → 17. Eine Kachel anklicken → Projekt öffnet sich im neuen Tab.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: 4 (Abgleich alt/neu: nur LinkedIn-Link ohne Tracking und neues wip bei Einkaufsplaner ALPHA; Fettdruck "AI Impact Days" entfällt; src/data fehlte; Inhalt nach E-08 in src/views). EN-Felder: category_en, title_en, description_en, optional im selben Objekt.
