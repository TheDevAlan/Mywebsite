# Segment 09: Seite „thoughts“ (Blog) mit Detailseite
Status: erledigt · Hängt ab von: 06
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Design-Referenz: `planung/design-handoff/README.md`, Abschnitt **6d thoughts** (Kopfzeile mit Doodle, Post-Liste, Datumsformat, schlichte Detailseite); Prototyp Runde 6d.
Heute: Collection `blog` (`src/content/config.ts`, Felder u. a. `title`, `description`, `pubDate`), drei Demo-Posts in `src/content/blog/`, Seiten `src/pages/blog/[...page].astro`, `blog/[slug].astro`, `blog/tag/[tag]/[...page].astro`, Layout `PostLayout.astro`, Hilfsfunktion `src/lib/createSlug.ts`. Doodle-Komponente (06) und Sprachmechanismus (05) existieren. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
1. Liste `/thoughts` und `/en/thoughts` nach 6d; Einträge neueste zuerst; Datum im Format „Okt 2026“ (EN: „Oct 2026“).
2. Detailseite `/thoughts/<slug>` (und EN-Pendant) schlicht nach Handoff, im neuen Layout.
3. **Sprachablage der Posts (Designentscheidung):** Empfehlung Unterordner je Sprache in der Collection; `/en/thoughts` zeigt englische Posts und für Posts ohne englische Fassung die deutsche. Wenn eine einfachere Lösung gleichwertig ist, wählen und im Grounding begründen.
4. **Leerzustand:** solange keine Posts existieren, freundlicher kurzer Hinweis im Stil der Seite (Text über das Wörterbuch) statt leerer Liste. Mit Alan kurz abstimmen.
5. Demo-Posts löschen. Alte Blog-Seiten, Tag-Seiten und `PostLayout.astro` entfernen; `createSlug.ts` und die Konstante `GENERATE_SLUG_FROM_TITLE` (`src/config.ts`) nur entfernen, wenn per Grep ungenutzt. Ungenutzte Schema-Felder (`heroImage`, `badge`, `tags`) dürfen optional bleiben.
6. Zum Test einen temporären Beispielpost anlegen und **vor dem Commit wieder löschen** — oder Alan liefert einen echten.

Nicht Teil davon: Weiterleitung `/blog` → `/thoughts` (Segment 12), Texte schreiben, RSS (entfällt).

## Akzeptanzkriterien
- Ohne Posts: `/thoughts` zeigt den Leerzustand, Build grün.
- Mit Testpost: Liste zeigt Datum, Titel, Teaser; Hover verschiebt den Eintrag; Klick öffnet Detailseite mit Titel, Datum, Fließtext.
- In `src/` gibt es keine Demo-Posts, keine Tag-Seiten, kein `PostLayout` mehr.
- `/en/thoughts` existiert.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Noch nicht neu gebaute Seiten in ihrer alten Fassung prüfen.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: alle 17 auf `/works`.
- Impressum: `/impressum` erreichbar, Text unverändert.
- Sitemap & robots erzeugt, ohne Demo-Posts/Tag-Seiten.
- Theme & Sprache: Wahl bleibt, Umschalter landet auf der jeweils anderen Sprachfassung.

## So prüfst du es (für den Nutzer)
`npm run dev`, auf „thoughts“ klicken → große Überschrift „thoughts.“ mit orangem Punkt, rechts ein Platzhalter-Bild, darunter der Hinweis, dass noch nichts da ist.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: 5 (impressum.astro hing mit ungenutzten Blog-Importen an der Collection; leere Collection erzeugt Build-Warnungen, daher Posts per import.meta.glob aus src/posts; dayjs nur im gelöschten PostLayout, Entfernung bleibt Segment 14; Inhalt nach E-08 in src/views; /blog liefert bis Segment 12 einen 404). Testposts angelegt und wieder gelöscht.

Hinweis: Auf Wunsch von Alan ist der Punkt in „thoughts.“ nicht orange (weicht vom Handoff 6d ab).
