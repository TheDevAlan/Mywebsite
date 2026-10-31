# Segment 05: Zweisprachigkeit (DE/EN) — Mechanismus und Sprachumschalter
Status: erledigt · Hängt ab von: 04
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Entscheidung E-03 (`planung/decisions.md`): Deutsch ohne Präfix (`/about`), Englisch unter `/en/…` (`/en/about`). Navigation bleibt in beiden Sprachen englisch. Englische Texte liefert Alan später — bis dahin muss überall der deutsche Text erscheinen.
Die Sidebar aus Segment 04 zeigt DE / EN bisher nur an. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
Den Sprachmechanismus festlegen und **einmal** sauber bauen, den alle folgenden Seiten-Segmente nutzen:
- **Muster (Designentscheidung):** Seiteninhalt als Komponente mit Sprachparameter; je Sprache eine dünne Routen-Datei (`src/pages/…` für DE, `src/pages/en/…` für EN), die nur die Komponente mit der Sprache aufruft. So existieren beide URLs als echte Seiten.
- **Texte:** ein zentrales Wörterbuch für UI- und Seitentexte je Sprache, mit Rückfall: fehlt ein englischer Eintrag, wird der deutsche verwendet. Kein Text darf leer erscheinen.
- **Fallback bewusst über das Wörterbuch**, nicht über Astros i18n-Fallback: Dessen statisches Verhalten kann auf die deutsche Seite weiterleiten statt eine englische URL zu liefern. Ob Astros `i18n`-Konfiguration zusätzlich für Hilfsfunktionen (z. B. sprachrichtige Pfade) genutzt wird: ⚠️ zu verifizieren in der Astro-4-Doku; ohne sie geht es mit einer eigenen kleinen Pfad-Hilfsfunktion.
- **Sprachumschalter** in der Sidebar funktionsfähig: springt auf **dieselbe** Seite der anderen Sprache; aktive Sprache hervorgehoben. Navigation, Logo-Link und Footer-Link führen innerhalb der aktuellen Sprache.
- `<html lang>` je Sprache korrekt.
- Als Nachweis die bereits bestehende Startseite (Inhalt noch alt/roh) zusätzlich unter `/en/` verfügbar machen.

Nicht Teil davon: englische Übersetzungen schreiben; Blog-/Projektdaten-Sprachen (entscheiden Segmente 08 und 09 auf Basis dieses Musters).

## Akzeptanzkriterien
- `/` und `/en/` liefern beide eine Seite (kein Redirect), `<html lang>` = `de` bzw. `en`.
- Klick auf EN auf `/` → landet auf `/en/`; Klick auf DE → zurück. Aktive Sprache fett.
- Auf `/en/` führen Logo und Nav-Links auf `/en/…`-Ziele.
- Fehlender englischer Wörterbucheintrag → deutscher Text erscheint (testweise einen EN-Eintrag weglassen).
- Build grün.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Noch nicht neu gebaute Seiten in ihrer alten Fassung prüfen.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: `/projects` listet alle 17 Projekte mit funktionierenden Links.
- Impressum: `/impressum` erreichbar, Text unverändert.
- Sitemap & robots erzeugt.
- Theme: Wahl bleibt nach Reload und über Sprachwechsel hinweg.

## So prüfst du es (für den Nutzer)
`npm run dev`, Startseite öffnen, in der Sidebar auf „EN“ klicken → Adresse endet auf `/en/`, „EN“ ist fett. Auf „DE“ klicken → zurück auf `/`.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: 2 (kein i18n-Block in astro.config nötig, eigene Hilfen gewählt; bestehende Startseite ist Wegwerf-Nachweis bis Segment 06)
Hinweis: Muster siehe planung/decisions.md E-08. Auf /en/ erscheint `footer.legal` bewusst auf Deutsch (Alan liefert Übersetzung); Sprachwechsel führt auf Seiten ohne Gegenseite bis Segment 06–11 zu 404.
