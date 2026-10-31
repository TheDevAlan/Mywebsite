# Segment 04: Gemeinsames Layout mit Sidebar und Theme-Schalter
Status: offen · Hängt ab von: 03
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Design-Referenz: `planung/design-handoff/README.md`, Abschnitt **Globales Layout** (Sidebar: Logo, Navigation, Sprachumschalter, Theme-Umschalter inkl. Icon-SVGs, Footer) — Maße und Schriftgrößen von dort, nicht kopieren. Prototyp zum Ansehen: `planung/design-handoff/Alan Webseite Ideen.dc.html`, Runde 6.
Heute: `src/layouts/BaseLayout.astro` bindet `Header`, `SideBar` (horizontal), `Footer` und `ViewTransitions` ein. Farb-Tokens, Theme-Script und Umschaltfunktion existieren seit Segment 03. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
`BaseLayout.astro` neu aufbauen: zweispaltiges Grid (Sidebar links, Hauptspalte rechts) wie im Handoff. Die Sidebar als eigene Komponente (`src/components/Sidebar.astro`) mit einer Eigenschaft für den aktiven Navigationspunkt (Startseite: keiner).
- Logo „alan.“ mit Hover-Farbtausch, Link auf `/`.
- Navigation about / works / thoughts / contact; aktiver Punkt mit Wellen-Unterstrich. Die Ziele `/about`, `/works`, `/thoughts`, `/contact` existieren noch nicht — das ist in Ordnung (404 bis zu ihren Segmenten).
- Theme-Schalter (Sonne / Mond) **funktionsfähig**, nutzt die Umschaltfunktion aus Segment 03; aktives Icon hervorgehoben, Hover-Drehung.
- DE / EN als **reine Anzeige** (Funktion kommt in Segment 05).
- Footer mit © und Link `Datenschutz & Impressum` → `/impressum`.
- Möglichkeit für Seiten, die volle Viewporthöhe bzw. eine „sticky“ Sidebar zu wählen (works braucht sticky, Start/contact volle Höhe).

`ViewTransitions` entfernen (Entscheidung E-05) — samt Schalter `TRANSITION_API` in `src/config.ts`, falls er sonst nirgends gebraucht wird. Alte Komponenten `Header`, `SideBar`, `SideBarMenu`, `SideBarFooter`, `Footer` löschen, sofern per Grep nicht mehr importiert.
Bestehende Seiten (`index`, `projects`, `blog`, `impressum`, `404`) laufen danach im neuen Layout weiter — ihr Inhalt darf noch roh aussehen. Ihre Aufrufe des Layouts (heute u. a. Eigenschaft `sideBarActiveItemID`) an die neue Schnittstelle anpassen.
Nicht Teil davon: Seiteninhalte, Mobil-Ansicht (Segment 13), Sprachlogik.

## Akzeptanzkriterien
- Jede bestehende Seite zeigt links die Sidebar gemäß Handoff (Desktopbreite ≥ 1100 px mit Prototyp vergleichen).
- Klick auf Sonne/Mond schaltet das Theme; nach Seitenwechsel und Reload bleibt es; kein Flackern beim Seitenwechsel.
- Logo-Hover tauscht Farben; Nav-Hover koralle.
- Footer-Link führt zu `/impressum`.
- Kein Import der alten Header/SideBar/Footer-Komponenten mehr; Build grün.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Noch nicht neu gebaute Seiten in ihrer alten Fassung prüfen.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: `/projects` listet alle 17 Projekte mit funktionierenden Links.
- Impressum: `/impressum` erreichbar, Text unverändert, verlinkt aus dem Sidebar-Footer.
- Sitemap & robots erzeugt.
- Theme: Wahl bleibt nach Reload, kein Aufblitzen.

## So prüfst du es (für den Nutzer)
`npm run dev`, Startseite öffnen → links „alan.“ mit Menü. Auf den Mond klicken → Seite wird dunkel. Auf „Datenschutz & Impressum“ klicken → Impressum öffnet sich, weiterhin dunkel.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: _(trägt /dev-build ein)_
