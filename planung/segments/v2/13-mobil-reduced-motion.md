# Segment 13: Mobil-Ansicht und reduzierte Bewegung
Status: offen · Hängt ab von: 06, 07, 08, 09, 10, 11
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Das Design ist nur für Desktop gestaltet. `planung/design-handoff/README.md`, Abschnitt **Interactions & Behavior → Responsive** und **prefers-reduced-motion**, enthält einen Vorschlag: unter ca. 800 px Sidebar als Leiste oben, works-Raster 2 Spalten, unter 500 px 1 Spalte, Doodles max. 80 % Breite, contact-Doodle statisch über der Überschrift. Alle Seiten existieren zu diesem Zeitpunkt. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
Den Vorschlag aus dem Handoff umsetzen, sodass alle Seiten auf Handy- und Tabletbreite gut benutzbar sind: keine waagerechte Scrollleiste, lesbare Schriftgrößen (große Überschriften dürfen schrumpfen), Navigation, DE/EN und Theme-Schalter erreichbar und mit dem Finger treffbar.
`prefers-reduced-motion`: alle Hover-Drehungen/-Verschiebungen (Doodles, Kacheln, Liste, Pills, Icons) und den Theme-Übergang abschalten.
Nicht Teil davon: neues Design für Mobil über den Handoff-Vorschlag hinaus; Burger-Menü (nur, wenn die Zeile mit vier Nav-Punkten bei 360 px nicht passt — dann im Grounding begründen).

## Akzeptanzkriterien
- Bei 360 px, 500 px, 800 px und 1100 px Breite (Browser-Entwicklertools) auf jeder Seite: keine waagerechte Scrollleiste, nichts abgeschnitten, alle Bedienelemente erreichbar.
- works: 1 Spalte < 500 px, 2 Spalten bis ~800 px, 3 darüber.
- Mit aktivierter Einstellung „Bewegung reduzieren“ (Windows: Animationen aus) keine Hover-Bewegung mehr.
- Desktop-Ansicht unverändert gegenüber den Segmenten 06–11.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01).
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: alle 17 auf `/works`, auch mobil.
- Impressum: Wortlaut unverändert, erreichbar (auch mobil).
- Kontaktwege korrekt.
- Sitemap & robots erzeugt.
- Alte Links leiten weiter.
- Theme & Sprache funktionieren, auch in der mobilen Leiste.
- Mobil: auf < 500 px benutzbar.

## So prüfst du es (für den Nutzer)
`npm run dev`, Seite im Browser öffnen, mit F12 die Entwicklertools öffnen und auf Handy-Ansicht umschalten (Strg+Umschalt+M) → Menü oben als Leiste, alles ohne seitliches Scrollen lesbar. Am besten zusätzlich auf deinem Handy im gleichen WLAN öffnen.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: _(trägt /dev-build ein)_
