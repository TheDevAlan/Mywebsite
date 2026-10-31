# Segment 11: Impressum und 404 im neuen Stil
Status: offen · Hängt ab von: 05
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Beide Seiten sind im Design nicht eigens gestaltet; Typografie und Farben folgen der Detailseiten-Regel aus `planung/design-handoff/README.md` (6d, „Post-Detailseite“: Titel Gaegu, Fließtext Karla, schmale Spalte).
`src/pages/impressum.astro` enthält Datenschutz + Impressum als Fließtext mit Tailwind-Klassen; zusätzlich tote Zeilen (Blog-Import ohne Verwendung). `src/pages/404.astro` stammt aus dem Template. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
1. Impressum im neuen Stil darstellen, **Wortlaut exakt unverändert** (rechtlich relevant — keine Umformulierung, keine „Korrektur“ von Gesetzesverweisen; Auffälligkeiten nur Alan melden). Tote Imports entfernen. `/en/impressum` zeigt denselben deutschen Text (Rechtstext bleibt deutsch) mit englischer Sidebar.
2. 404-Seite im neuen Layout: kurzer, lockerer Text im Ton der Seite und Link zur Startseite; Texte über das Wörterbuch.

Nicht Teil davon: inhaltliche Überarbeitung des Datenschutztexts (auch nicht wegen der lokalen Schriften).

## Akzeptanzkriterien
- Text von `/impressum` ist wortgleich mit `git show main:src/pages/impressum.astro` (Inhalt vergleichen, Markup darf abweichen).
- Impressum sieht im neuen Layout ordentlich aus, in beiden Themes lesbar.
- Eine unbekannte Adresse (`/gibtsnicht`) zeigt die neue 404-Seite mit Link nach `/`.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Noch nicht neu gebaute Seiten in ihrer alten Fassung prüfen.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: alle 17 auf `/works`.
- Impressum: Wortlaut unverändert, aus dem Sidebar-Footer erreichbar.
- Sitemap & robots erzeugt.
- Theme & Sprache: Wahl bleibt, Umschalter funktioniert.

## So prüfst du es (für den Nutzer)
`npm run dev`, unten links auf „Datenschutz & Impressum“ klicken → dein Impressum im neuen Look. Danach `http://localhost:4321/gibtsnicht` öffnen → die neue Fehlerseite. (Die echte 404 zeigt GitHub Pages erst nach Veröffentlichung.)

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: _(trägt /dev-build ein)_
