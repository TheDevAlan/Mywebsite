# Entscheidungen

Format: Kontext · Alternativen · Begründung · Konsequenz.

## E-01 — Umbau des bestehenden Astro-Projekts statt Neubau (2026-10-31)
**Kontext:** Design-Handoff liegt vor; Frage, ob komplett neu programmiert oder angepasst wird.
**Alternativen:** (a) Neues Astro-Projekt aufsetzen. (b) Bestehendes Projekt umbauen.
**Begründung:** Das Handoff verlangt selbst den Nachbau „im bestehenden Astro-Projekt“. Auslieferung (`docs/` + GitHub Pages + Domain), Sitemap und Blog-Collection laufen und müssten sonst neu aufgebaut werden; am Ende wäre es wieder Astro.
**Konsequenz:** Fast die gesamte Oberfläche wird ersetzt, das technische Gerüst bleibt.

## E-02 — Planungsordner `planung/` statt `docs/` (2026-10-31)
**Kontext:** Die Planungs-Workflows legen Dokumente standardmäßig in `docs/` ab.
**Alternativen:** `docs/planung/` · `planung/` im Repo-Root.
**Begründung:** `docs/` ist hier die **Build-Ausgabe** (`outDir: './docs'`), wird beim Build neu geschrieben und öffentlich ausgeliefert. Planung dort wäre öffentlich und könnte beim Build verschwinden.
**Konsequenz:** Alle Pfade aus den Workflow-Beschreibungen (`docs/PLAN.md`, `docs/changes/`, `docs/segments/`, `docs/decisions.md`) gelten hier als `planung/…`.

## E-03 — Zweisprachigkeit (DE/EN) sofort mit Astro-i18n-Routing (2026-10-31)
**Kontext:** Das Design enthält einen DE/EN-Schalter; englische Texte fehlen noch.
**Alternativen:** Nur Deutsch, Schalter später · Zweisprachigkeit jetzt.
**Begründung:** Von Alan so entschieden. Früh festzulegen ist günstiger als späteres Nachrüsten.
**Konsequenz:** Deutsch ohne Präfix, Englisch unter `/en/…`, Navigation in beiden Sprachen englisch, fehlende englische Inhalte fallen auf Deutsch zurück. Ablage der Texte pro Sprache wird in der Segmentierung festgelegt.

## E-04 — Alte Adressen über Weiterleitungsseiten, nicht 301 (2026-10-31)
**Kontext:** Handoff wünscht 301-Weiterleitungen `/projects`→`/works`, `/blog`→`/thoughts`.
**Begründung:** GitHub Pages kann keine serverseitigen Weiterleitungen. Astro kann stattdessen kleine Weiterleitungsseiten erzeugen (⚠️ Verhalten bei der Umsetzung gegen die Astro-Doku prüfen).
**Konsequenz:** Für eine persönliche Seite ausreichend; Suchmaschinen-Übergang minimal weniger sauber als bei 301.

## E-05 — `ViewTransitions` entfernen (Vorschlag, 2026-10-31)
**Kontext:** `BaseLayout.astro` nutzt Astro-ViewTransitions; Theme per Inline-Script und `localStorage` soll nicht flackern.
**Begründung:** Das Design verlangt keine animierten Seitenwechsel; ViewTransitions erschweren die korrekte Theme-Anwendung beim Seitenwechsel.
**Konsequenz:** Einfacherer Aufbau. Wenn Alan die Übergänge möchte, wird der Theme-Mechanismus entsprechend angepasst. _(Vorschlag — kann geändert werden.)_

## E-06 — Schriften lokal einbinden (Vorschlag, 2026-10-31)
**Kontext:** Das Handoff erlaubt Google Fonts oder lokal (`@fontsource`).
**Begründung:** Bei Google Fonts würde der Besucher-Browser Google-Server kontaktieren (IP-Adresse geht an Dritte). Das widerspricht der Aussage im Datenschutztext („nicht an Dritte weitergegeben“) und ist in Deutschland datenschutzrechtlich heikel.
**Konsequenz:** Pakete `@fontsource/gaegu` und `@fontsource/karla` ⚠️ zu verifizieren (Existenz/Gewichte). _(Vorschlag — kann geändert werden.)_

## E-07 — RSS entfällt (2026-10-31)
**Kontext:** Feed ist bereits defekt (Build-Warnung); Blog ist künftig „thoughts“.
**Begründung:** Von Alan so entschieden.
**Konsequenz:** `src/pages/rss.xml.js` und `@astrojs/rss` werden entfernt.
