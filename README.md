# alangawlik.de

Persönliche Webseite von Alan Gawlik: Projekte, kurze Texte, Kontakt. Live unter https://alangawlik.de (GitHub Pages).
Gebaut mit [Astro](https://astro.build/) 4 und Tailwind (nur Basis-Reset), zweisprachig (Deutsch und Englisch), Hell- und Dunkelmodus.

## Seiten

| Deutsch | Englisch | Inhalt |
|---|---|---|
| `/` | `/en/` | Startseite mit Doodle |
| `/about` | `/en/about` | Über mich |
| `/works` | `/en/works` | 17 Projekte als Kacheln |
| `/thoughts` | `/en/thoughts` | Liste kurzer Texte, Detailseite `/thoughts/<name>` |
| `/contact` | `/en/contact` | Mail, GitHub, LinkedIn, Buy me a coffee |
| `/impressum` | `/en/impressum` | Datenschutz und Impressum |

Die alten Adressen `/projects` und `/blog` leiten auf `/works` bzw. `/thoughts` weiter (Weiterleitungsseiten, GitHub Pages kann kein 301).
Navigationsbegriffe bleiben in beiden Sprachen englisch. Fehlt ein englischer Text, erscheint der deutsche.

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # schreibt die fertige Seite nach docs/
npm run preview    # gebaute Seite ansehen, http://localhost:4321
```

## Wo pflege ich was?

- **Projekte:** `src/data/projects.json`. Felder: `category`, `title`, `description`, `href`, `isNew`, `wip`. Englische Texte optional als `category_en`, `title_en`, `description_en`.
- **Texte der Seiten und der Oberfläche:** `src/i18n/ui.ts` (Deutsch und Englisch; fehlt der englische Eintrag, erscheint Deutsch).
- **Thoughts (Blogposts):** Markdown-Dateien in `src/posts/de/<name>.md` und `src/posts/en/<name>.md`. Pflichtfelder im Kopf: `title`, `description`, `pubDate` (z. B. `2026-10-31`). Eine englische Fassung gehört zur deutschen, wenn die Datei gleich heißt. `.mdx` ist ebenfalls erlaubt.
- **Doodles:** Zeichnungen in `public/doodles/` als `home-a.svg` und `home-b.svg`, ebenso `about-`, `thoughts-` und `contact-` (auch `.png`). Fehlt eine der beiden Dateien eines Doodles, erscheint der Platzhalter.
- **Farben, Schriften, Cursor:** `src/styles/global.css`. Die Schriften (Gaegu, Karla) liegen lokal über `@fontsource`.

## Veröffentlichung

`npm run build` schreibt nach `docs/` (`outDir` in `astro.config.mjs`). GitHub Pages liefert den Ordner `docs/` des Zweigs `main` aus. `CNAME` (Domain) und `.nojekyll` liegen in `public/` und werden beim Build mit nach `docs/` kopiert. Die Build-Ausgabe `docs/` wird mit eingecheckt.

## Planung

Planung, Entscheidungen und Segmente liegen in `planung/` (nicht in `docs/`, das ist die öffentliche Build-Ausgabe): `planung/PLAN.md`, `planung/decisions.md`, `planung/changes/`, `planung/segments/`. Die Design-Vorlage steht in `planung/design-handoff/`.

## Lizenz

MIT, siehe [LICENSE](LICENSE).
