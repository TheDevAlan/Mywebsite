# Segment 10: Seite „contact“
Status: erledigt · Hängt ab von: 06
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Design-Referenz: `planung/design-handoff/README.md`, Abschnitt **6e contact** (Doodle-Position, Überschrift ohne orangen Punkt, Text, E-Mail mit Marker, Pills mit Icons); Prototyp Runde 6e.
Icon-SVGs (GitHub, LinkedIn, Tasse): laut Handoff im Prototyp unter 6e enthalten und im alten Footer der Seite — Quelle zur Bauzeit prüfen (der alte Footer wurde in Segment 04 entfernt; `git show main:src/components/Footer.astro` oder der Prototyp).
Ziele: `mailto:info@alangawlik.de`, GitHub `https://github.com/TheDevAlan`, LinkedIn `https://www.linkedin.com/in/alan-gawlik-332202316/`, Buy me a coffee `https://buymeacoffee.com/TheDevAlan`. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
Seite `/contact` und `/en/contact` nach 6e, volle Viewporthöhe, „contact“ aktiv in der Navigation. Externe Pills in neuem Tab. Icons mit `currentColor`, damit sie in beiden Themes funktionieren; dekorative Icons für Screenreader ausblenden. Texte über das Wörterbuch.
Nicht Teil davon: Kontaktformular, Mobil-Ansicht (dort wandert das Doodle über die Überschrift — Segment 13).

## Akzeptanzkriterien
- Seite entspricht 6e im Prototyp (Desktop); „sag hallo.“ komplett in Textfarbe.
- E-Mail-Link öffnet das Mailprogramm mit `info@alangawlik.de`; Marker-Strich liegt hinter der Adresse.
- Drei Pills mit Icon und Text, richtige Ziele, neuer Tab, Hover-Effekt.
- `/en/contact` existiert.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Noch nicht neu gebaute Seiten in ihrer alten Fassung prüfen.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: alle 17 auf `/works`.
- Impressum: `/impressum` erreichbar, Text unverändert.
- Kontaktwege: alle vier Ziele auf contact korrekt.
- Sitemap & robots erzeugt.
- Theme & Sprache: Icons und Marker in beiden Themes sichtbar; Umschalter funktioniert.

## So prüfst du es (für den Nutzer)
`npm run dev`, auf „contact“ klicken → „sag hallo.“ und darunter die E-Mail-Adresse mit orangem Strich. Auf „github“ klicken → dein GitHub-Profil öffnet sich im neuen Tab.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: 3 (Icon-Pfade nur noch auf main im alten Footer; Pill-Stile nur im Prototyp, nicht im Handoff-Text; Inhalt nach E-08 in src/views)
