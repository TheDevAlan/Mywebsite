# Segment 06: Doodle-Komponente und neue Startseite
Status: offen · Hängt ab von: 05
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Design-Referenz: `planung/design-handoff/README.md`, Abschnitte **Doodle-Komponente** und **6a Startseite**; Prototyp Runde 6a. Layout/Sidebar (Segment 04) und Sprachmechanismus (Segment 05) existieren.
Heute zeigt `src/pages/index.astro` Begrüßung, Text und eine Projektauswahl mit `HorizontalCard`. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
1. **Doodle-Komponente** (wiederverwendbar für Start, about, thoughts, contact): zwei Zustände A/B, **Klick** wechselt (Zustand nur lokal, nicht speichern), Hover = leichte Drehung + Scale; Größe, Grunddrehung und Hover-Drehung pro Einsatz einstellbar. Bedienbar per Tastatur (Button-Semantik, Zustand für Screenreader erkennbar). Bis echte Zeichnungen da sind: Platzhalter-Optik aus dem Handoff mit Monospace-Beschriftung des jeweiligen Zustands. Die Komponente soll später echte Bilder aus `public/doodles/` (Namensschema im Handoff) annehmen können, ohne dass die Seiten umgebaut werden müssen.
2. **Startseite** (DE `/`, EN `/en/`) nach 6a: nur Doodle (Texte der Zustände aus dem Handoff) und Claim, zentriert, volle Viewporthöhe, keine aktive Navigation. Texte über das Wörterbuch aus Segment 05 (EN-Claim aus dem Handoff ist bereits englisch).
3. Die alte Projektauswahl und die Begrüßung entfallen.

Nicht Teil davon: echte Zeichnungen, Mobil-Ansicht.

## Akzeptanzkriterien
- Startseite entspricht 6a im Prototyp (Desktop ≥ 1100 px nebeneinander vergleichen).
- Klick auf das Doodle wechselt die Beschriftung A↔B; Enter/Leertaste per Tastatur ebenso.
- Hover dreht/vergrößert das Doodle leicht.
- `/en/` zeigt dieselbe Seite.
- `index.astro` importiert `HorizontalCard` nicht mehr; Build grün.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Noch nicht neu gebaute Seiten in ihrer alten Fassung prüfen.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: `/projects` listet alle 17 Projekte mit funktionierenden Links.
- Impressum: `/impressum` erreichbar, Text unverändert.
- Sitemap & robots erzeugt.
- Theme: Wahl bleibt nach Reload, kein Aufblitzen; Doodle-Platzhalter in beiden Themes lesbar.
- Sprache: Umschalter auf der Startseite funktioniert.

## So prüfst du es (für den Nutzer)
`npm run dev`, Startseite öffnen → gestreiftes Platzhalter-Bild und darunter „I build apps - for work, for life, for fun.“ Auf das Bild klicken → Beschriftung wechselt.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: _(trägt /dev-build ein)_
