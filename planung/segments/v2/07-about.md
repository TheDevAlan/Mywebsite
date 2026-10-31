# Segment 07: Seite „about“
Status: erledigt · Hängt ab von: 06
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Design-Referenz: `planung/design-handoff/README.md`, Abschnitt **6b about**; Prototyp Runde 6b. Doodle-Komponente (Segment 06), Layout (04) und Sprachmechanismus (05) existieren. Die Seite ist neu, es gibt keinen Vorgänger.
Link-Ziele: LinkedIn `https://www.linkedin.com/in/alan-gawlik-332202316/`, GitHub `https://github.com/TheDevAlan`, Kaffee `https://buymeacoffee.com/TheDevAlan`. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
Seite `/about` und `/en/about` nach 6b: Doodle (Zustände laut Handoff), Überschrift, Fließtext (Wortlaut im Handoff), drei Text-Links in neuem Tab. Texte über das Wörterbuch; EN fällt auf DE zurück. Navigation markiert „about“ als aktiv.
Nicht Teil davon: englische Übersetzung des Fließtexts, Mobil-Ansicht.

## Akzeptanzkriterien
- Seite entspricht 6b im Prototyp (Desktop).
- Alle drei Links öffnen das richtige Ziel in einem neuen Tab (mit `rel="noopener"`).
- „about“ ist in der Navigation mit Wellenlinie markiert.
- `/en/about` existiert und zeigt (vorerst) den deutschen Text.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Noch nicht neu gebaute Seiten in ihrer alten Fassung prüfen.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: `/projects` listet alle 17 Projekte mit funktionierenden Links.
- Impressum: `/impressum` erreichbar, Text unverändert.
- Kontaktwege: Links auf about korrekt.
- Sitemap & robots erzeugt.
- Theme & Sprache: Wahl bleibt, Umschalter landet auf `/en/about` bzw. `/about`.

## So prüfst du es (für den Nutzer)
`npm run dev`, in der Sidebar auf „about“ klicken → Überschrift „KI-Enthusiast und Hobby-Entwickler“, darunter „linkedin · github · kaffee spendieren“. Jeden Link anklicken → öffnet sich im neuen Tab.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: 2 (Inhalt liegt seit Segment 05 in src/views plus zwei Routen-Dateien; BaseLayout-Standard-Padding und max-width widersprachen 6b, daher Eigenschaft `bare`)
