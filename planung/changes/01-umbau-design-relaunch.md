# Änderung 01: Design-Relaunch „lockeres Skizzenbuch“
Typ: Umbau · Stand: 2026-10-31 · Status: geplant
Zweig: change/01-design-relaunch

> Ablage-Hinweis: Planungsdokumente liegen in `planung/`, **nicht** in `docs/`.
> `docs/` ist die Build-Ausgabe (`astro.config.mjs`: `outDir: './docs'`) und wird öffentlich
> von GitHub Pages ausgeliefert. Alles, was dort liegt, ist unter alangawlik.de abrufbar.

## Anliegen
Die Webseite wird optisch und strukturell nach dem Claude-Design-Handoff neu gestaltet.
Arbeitsauftrag und Design-Referenz: `planung/design-handoff/README.md` (maßgeblich, **nur Runde 6**),
`planung/design-handoff/Alan Webseite Ideen.dc.html` (Prototyp), `planung/design-handoff/projects.json` (Projektdaten).

Entscheidung zur Vorgehensweise: **bestehendes Astro-Projekt umbauen, nicht neu aufsetzen** (siehe `planung/decisions.md`, E-01).

Vom Nutzer bestätigt:
- Zweisprachigkeit (DE/EN) wird **jetzt** mit eingebaut; englische Texte liefert Alan später, bis dahin deutscher Fallback.
- RSS-Feed entfällt ersatzlos.
- Planungsordner ist `planung/`.

## Ist-Analyse (Stand: 2026-10-31)
**Technik.** Astro `^4.16.18`, Tailwind `^3.3.5` + daisyUI `^4.4.10`, MDX, Sitemap, RSS (`package.json`).
Es ist das Open-Source-Template „Astrofy“ (`package.json` name/description). `astro.config.mjs`: `site: 'https://alangawlik.de'`,
`outDir: './docs'`. Veröffentlichung = `docs/` ins Git, GitHub Pages liefert es aus; `docs/CNAME` enthält `alangawlik.de`.

**Layout/Seiten heute.**
- `src/layouts/BaseLayout.astro`: setzt `data-theme="lofi"` (daisyUI), bindet `Header`, `SideBar` (horizontales Menü), `Footer`; nutzt `ViewTransitions` (Schalter `TRANSITION_API` in `src/config.ts`).
- Seiten in `src/pages/`: `index`, `projects`, `blog/*`, `cv`, `services`, `store/*`, `impressum`, `404`, `rss.xml.js`.
- `src/pages/projects.astro`: 17 Projekte **fest im Code** als `HorizontalCard`-Aufrufe, vier Kategorien; Thumbnails aus `/Profil/`.
- `src/pages/index.astro`: Begrüßung, Fließtext, Auswahl von Projekten (dupliziert Inhalte aus `projects.astro`).
- `src/pages/impressum.astro`: Datenschutz + Impressum als Fließtext, nutzt `BaseLayout`. Importiert/berechnet unnötig Blogposts (tote Zeilen).
- Content Collections (`src/content/config.ts`): `blog` (title, description, pubDate, updatedDate, heroImage, badge, tags) und `store`. `src/content/blog/` enthält nur 3 Demo-Posts (Lorem ipsum).
- `BaseHead.astro`: Standard-Bild `/social_img.webp` ist in `public/` nicht vorhanden (toter Verweis, Nebenbefund).

**Was dranhängt.** Menüeinträge und interne Links auf `/projects`, `/blog`, `/cv`, `/store`, `/services` stehen in
`SideBarMenu.astro`, `index.astro`, `PostLayout.astro`, `cv.astro`, `store/[...page].astro`, `blog/[...page].astro`, `blog/tag/[tag]/[...page].astro`, `rss.xml.js`
(Grep-Befund zum Stand). Bilder unter `public/Profil/` hängen nur an `projects.astro` und `index.astro`.

**Auffälligkeiten mit Risiko für diese Änderung.**
1. **CNAME/.nojekyll liegen nur in `docs/`, nicht in `public/`.** Ein `astro build` mit `outDir: './docs'` leert den Zielordner normalerweise vor dem Bau.
   Indiz: Die Commit-Historie enthält „Entferne CNAME“ (`e7ee787`) und „Create CNAME“ (`ce4700f`) — die Datei ist offenbar schon einmal verloren gegangen und von Hand wieder angelegt worden.
   ⚠️ zu verifizieren (bewusst nicht gegen `docs/` getestet, um den Live-Stand nicht anzufassen): Verschwindet `docs/CNAME` beim Build? Unabhängig vom Ergebnis ist die sichere Lösung, `CNAME` und `.nojekyll` nach `public/` zu legen.
2. **RSS ist schon heute defekt:** Build-Warnung `No API Route handler exists for the method "GET" for the route "/rss.xml". Found handlers: "get"` (`src/pages/rss.xml.js` exportiert `get` statt `GET`). Erledigt sich durch die Entfernung.
3. **`.astro/` ist im Git getrackt**, obwohl generiert. Ein Build löscht diese Dateien im Arbeitsordner (beim Nullpunkt-Test passiert, wiederhergestellt). Kein Fehler dieser Änderung, nur Stolperstein.

## Nullpunkt (Stand vor der Änderung)
- Befehl: `npx astro build --outDir <Testordner außerhalb des Repos>` → **grün**: „17 page(s) built in 4.01s · Complete!“, eine Warnung (RSS, siehe oben).
- Tests: **keine vorhanden** (`package.json` hat kein `test`-Skript). Die Absicherung läuft daher über Build + manuelle Prüfschritte unten.
- Dev-Server wurde für diese Planung nicht gestartet; optisch ungeprüft.
- Git: Arbeitsbaum war sauber (Commit `78e5f7e`), Zweig `main`.

## Soll-Zustand
Gemäß `planung/design-handoff/README.md`, Runde 6 (Details dort, hier nicht kopiert):
- Fünf Seiten: Startseite `/`, `/about`, `/works`, `/thoughts`, `/contact` — plus `/impressum` im neuen Layout und eine neu gestaltete 404.
- Gemeinsames Layout mit linker Sidebar (Logo „alan.“, Navigation, DE/EN-Umschalter, Hell/Dunkel-Umschalter, Footer).
- Hell-/Dunkelmodus über CSS-Variablen auf `<html data-theme>`; Startwert = Systemeinstellung, Wahl in `localStorage`, Inline-Script im `<head>` gegen Flackern.
- Schriften Gaegu + Karla, eigener Cursor, Doodle-Platzhalter (Klick-Wechsel A/B) bis echte Zeichnungen vorliegen.
- `/works`: Kachelraster aus **einer Datendatei** (`projects.json`, 17 Projekte, 4 Kategorien), mit „neu!“- und „IN ARBEIT“-Markierung.
- `/thoughts`: Liste der Blogposts aus der bestehenden Collection `blog`, Detailseite schlicht. Demo-Posts weg.
- Zweisprachig: Deutsch unter `/…`, Englisch unter `/en/…`; Navigationsbegriffe bleiben in beiden Sprachen englisch; fehlende englische Texte fallen auf Deutsch zurück.
- Alte Adressen `/projects` → `/works`, `/blog` → `/thoughts` leiten weiter.
- Entfallen: Lebenslauf, Services, Store, RSS, daisyUI, Demo-Posts.

## Was NICHT kaputtgehen darf
- **Domain/Auslieferung:** Nach `npm run build` liegen `docs/CNAME` (Inhalt `alangawlik.de`) und `docs/.nojekyll` im Ausgabeordner → Prüfschritt: Build laufen lassen, beide Dateien ansehen.
- **Build:** `npm run build` endet ohne Fehler, ohne neue Warnungen.
- **Projekte vollständig & korrekt:** `/works` zeigt alle 17 Projekte; Links stimmen mit der alten Seite überein → Prüfschritt: Linkliste aus `git show main:src/pages/projects.astro` mit den Kacheln vergleichen, jede Kachel öffnet im neuen Tab.
- **Impressum/Datenschutz:** Wortlaut unverändert (rechtlich relevant), erreichbar unter `/impressum` und über den Sidebar-Footer → Prüfschritt: Text gegen `git show main:src/pages/impressum.astro` abgleichen.
- **Kontaktwege:** `mailto:info@alangawlik.de`, GitHub `https://github.com/TheDevAlan`, LinkedIn `https://www.linkedin.com/in/alan-gawlik-332202316/`, Buy-me-a-coffee `https://buymeacoffee.com/TheDevAlan` → Prüfschritt: auf `/contact` und `/about` jeden Link anklicken.
- **Sitemap & robots:** `sitemap-index.xml` und `robots.txt` werden weiterhin erzeugt; Sitemap enthält keine gelöschten Seiten.
- **Alte Links:** `/projects` und `/blog` landen auf `/works` bzw. `/thoughts`.
- **Theme:** Wechsel hell↔dunkel, Seite neu laden → Wahl bleibt; erster Besuch folgt der Systemeinstellung; kein Aufblitzen der falschen Farbe.
- **Sprache:** `/en/about` o. ä. erreichbar, Umschalter springt auf die gleiche Seite der anderen Sprache, Navigation bleibt englisch.
- **Mobil:** Seite ist auf Handybreite (< 500 px) benutzbar (Vorschlag aus dem Handoff, im Design nicht gestaltet).

_(Diese Liste kommt als Regressionsprüfung in jedes Segment.)_

## Scope-Grenze
Ausdrücklich NICHT Teil dieser Änderung:
- Echte Doodle-Zeichnungen (kommen von Alan; hier nur Platzhalter).
- Englische Übersetzungen der Inhalte (Alan liefert; hier nur Struktur + Fallback).
- Neue Blogposts schreiben (nur Gerüst; Leerzustand siehe unten).
- Löschen der Bilddateien unter `public/Profil/` und `docs/Profil/` (werden nicht mehr verwendet, bleiben aber vorerst liegen; separates Aufräumen).
- Veröffentlichung: Merge nach `main` und Push (= live) nur nach ausdrücklicher Freigabe durch Alan.
- Reparatur des toten `/social_img.webp`-Verweises und `.astro/`-Tracking (Nebenbefunde, separat).

## Datenmigration
Keine Datenbank, keine Nutzerdaten. Inhalte, die umziehen:
- 17 Projekte: aus Code (`projects.astro`) nach `projects.json`. Das Handoff liefert die Datei bereits; **Abgleich Titel/Link/Beschreibung gegen die alte Seite ist Pflicht** (siehe Regressionsliste). Sicherung = Zweig + `main` bleibt unverändert.
- Impressum/Datenschutz: Text wird 1:1 ins neue Layout übernommen.
- Blog: 3 Demo-Posts werden gelöscht (kein echter Inhalt).
- Offen, bitte zur Bauzeit klären: **Leerzustand von `/thoughts`**, solange kein echter Post existiert (das Design zeigt nur eine gefüllte Liste). Vorschlag: kurzer freundlicher Hinweistext im Stil der Seite.

## Abhängigkeiten & Reihenfolge
- **Fundament zuerst:** Theme-Variablen, Schriften, gemeinsames Layout mit Sidebar und die Auslieferungs-Absicherung (`CNAME`/`.nojekyll` nach `public/`) müssen stehen, bevor einzelne Seiten gebaut werden — alles andere hängt daran.
- **i18n früh festlegen:** Das Routing (`/en/…`) und die Art, wie Texte (UI-Texte, Projektbeschreibungen, Blogposts) pro Sprache abgelegt werden, bestimmt den Aufbau jeder Seite. Nachträglich einbauen wäre teuer. Struktur: Deutsch ohne Präfix, Englisch unter `/en/` (Handoff), Fallback auf Deutsch.
- **Größtes Risiko:** (1) Theme-Umschalter zusammen mit `ViewTransitions` — beim Seitenwechsel kann das Theme-Attribut verloren gehen oder flackern; Empfehlung E-05: `ViewTransitions` entfernen. (2) Die CNAME-Frage oben (Seite wäre sonst nach dem Veröffentlichen unter der Domain nicht erreichbar). (3) i18n-Umfang auf Blog-Collection und Projektdaten.
- **Aufräumen (Lebenslauf, Services, Store, RSS, daisyUI, Demo-Posts)** am Schluss oder früh, solange nichts Neues davon abhängt; Abhängigkeiten (`daisyui`, `@astrojs/rss`, ggf. `dayjs`) erst entfernen, wenn kein Code sie mehr importiert.
- Alte Adressen per Astro-Weiterleitungsseiten (E-04), da GitHub Pages keine echten 301 kann.
- Schriften lokal einbinden statt von Google (Vorschlag E-06, Begründung dort).

## Bezug zu bestehenden Entscheidungen
Es gab bisher keine `decisions.md`; sie wird mit dieser Änderung angelegt (`planung/decisions.md`). Einzige historische Spur:
CNAME wurde per Commit entfernt und wieder angelegt (`e7ee787`, `ce4700f`) — wird bewusst abgesichert, nicht „aufgeräumt“.
Das Impressum enthält Anschrift und Telefonnummer; sie bleiben unverändert.

## Rollback
Zweig `change/01-design-relaunch`. Der Zweig `main` (= die live veröffentlichte Seite) bleibt unangetastet, bis du bewusst zusammenführst.
Zurück zum alten Stand: `git checkout main` — dann hast du wieder exakt die bisherige Seite. Wenn nach einer Zusammenführung etwas schiefgeht: `git revert` auf den Merge-Commit macht ihn rückgängig, ohne Verlauf zu löschen.

## Segmente
Ablage: `planung/segments/v2/` — _(Ordner und Inhalt legt /dev-split-code an; `v2`, weil es noch keine Segmente gibt und `v1` der Erstbau wäre.)_
