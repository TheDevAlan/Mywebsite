# Segment 01: Auslieferung absichern (CNAME & .nojekyll)
Status: erledigt · Hängt ab von: —
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Astro-4-Webseite, Build-Ausgabe nach `docs/` (`astro.config.mjs` → `outDir`), GitHub Pages liefert `docs/` unter alangawlik.de aus.
`CNAME` und `.nojekyll` lagen bei Planung **nur** in `docs/`, nicht in `public/`. Ein Indiz in der Git-Historie (Commits „Entferne CNAME“ / „Create CNAME“) spricht dafür, dass ein Build sie schon einmal entfernt hat.
Planungsordner ist `planung/` (nicht `docs/`). **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
Sicherstellen, dass jeder Build `CNAME` (Inhalt `alangawlik.de`) und `.nojekyll` im Ausgabeordner erzeugt — indem beide Dateien als Quelle in `public/` liegen, die Astro unverändert in die Ausgabe kopiert.
Zuerst ermitteln und im Grounding notieren, ob ein Build `docs/` vorher leert (Beobachtung, keine Annahme). Danach die Dateien nach `public/` legen.
Nicht Teil davon: irgendetwas am Design oder an Seiten.

Hinweis: Ein Build löscht im Arbeitsordner die im Git getrackten `.astro/`-Dateien. Falls das passiert, mit `git checkout -- .astro` wiederherstellen und nicht mitcommitten (Bereinigung ist Scope-Grenze).

## Akzeptanzkriterien
- `public/CNAME` (Inhalt exakt `alangawlik.de`) und `public/.nojekyll` existieren.
- Nach `npm run build` existieren `docs/CNAME` mit gleichem Inhalt und `docs/.nojekyll`.
- Build grün, keine neuen Warnungen (die bekannte RSS-Warnung darf noch auftreten).

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Seiten, die noch nicht neu gebaut sind, werden in ihrer alten Fassung geprüft.
- Build: `npm run build` ohne Fehler.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: `/projects` zeigt weiterhin alle 17 Projekte.
- Impressum: `/impressum` erreichbar, Text unverändert.
- Sitemap & robots: `docs/sitemap-index.xml` und `docs/robots.txt` werden erzeugt.

## So prüfst du es (für den Nutzer)
`npm run build` im Projektordner starten → danach im Ordner `docs/` die Datei `CNAME` öffnen → erwarte `alangawlik.de`.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` wie bisher mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: 0
Beobachtung: Ein Build leert `docs/` vollständig (gemessen mit Marker-Datei); `CNAME`/`.nojekyll` kommen jetzt aus `public/`.
