# Segment 03: Design-Fundament (Farben, Hell/Dunkel, Schriften, Cursor) — daisyUI raus
Status: offen · Hängt ab von: 02
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Design-Referenz: `planung/design-handoff/README.md`, Abschnitte **Theming**, **Typografie**, **Weitere Tokens** (Runde 6 ist maßgeblich). Dort stehen alle Farbwerte, Cursor-SVGs und Schriftgewichte — **nicht hierher kopieren, von dort übernehmen.**
Heute: `BaseLayout.astro` setzt `data-theme="lofi"`; `tailwind.config.cjs` bindet daisyUI mit `themes: true` ein. **Konflikt:** daisyUI reagiert ebenfalls auf `data-theme` und kennt Themes namens `light` und `dark` — mit daisyUI würde der neue Schalter daisyUI-Themes umschalten. Deshalb wird daisyUI in diesem Segment entfernt.
Globale Styles liegen in `src/styles/global.css`, eingebunden über `BaseHead.astro`. **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
1. Alle Farb-Tokens aus dem Handoff als CSS-Variablen für `[data-theme="light"]` und `[data-theme="dark"]` anlegen, inkl. Cursor-Variable; Body nutzt Hintergrund/Text/Cursor aus den Variablen, mit der Übergangszeit aus dem Handoff.
2. Theme-Logik: ein **Inline-Script im `<head>`** (vor dem ersten Rendern) setzt `data-theme` auf `<html>` — gespeicherte Wahl aus `localStorage`, sonst `prefers-color-scheme`. Zugriff auf `localStorage` in try/catch. Eine kleine, im ganzen Projekt wiederverwendbare Funktion zum Umschalten + Speichern bereitstellen (der Schalter selbst kommt in Segment 04).
3. Schriften Gaegu (400/700) und Karla (400/500/700) **lokal** einbinden, nicht von Google (Entscheidung E-06). Kandidaten `@fontsource/gaegu`, `@fontsource/karla` — ⚠️ zu verifizieren (Existenz, verfügbare Gewichte), sonst Schriftdateien selbst unter `public/` ablegen.
4. daisyUI entfernen (Tailwind-Plugin und Paket). `@tailwindcss/typography` bleibt vorerst. Paketmanager npm.
5. `prefers-reduced-motion`: Theme-Übergang abschalten.

**Erwartet und in Ordnung:** Die alten Seiten verlieren damit ihr daisyUI-Styling und sehen bis zu ihrem Ersatz roh aus. Der Zweig ist nicht live; `main` bleibt unverändert.
Nicht Teil davon: Sidebar, Layout, Seiteninhalte.

## Akzeptanzkriterien
- Erster Besuch (kein `localStorage`-Eintrag) folgt der Systemeinstellung hell/dunkel.
- In der Browser-Konsole die Umschaltfunktion aufrufen → Farben wechseln mit sanftem Übergang; nach Reload bleibt die Wahl.
- Beim Laden im Dunkelmodus blitzt nicht kurz der helle Hintergrund auf.
- Texte erscheinen in Karla, im Netzwerk-Tab gibt es **keine** Anfrage an `fonts.googleapis.com` / `fonts.gstatic.com`.
- Eigener Cursor sichtbar, passend zum Theme.
- `tailwind.config.cjs` und `package.json` enthalten kein daisyUI mehr; Build grün.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01). Alte Seiten dürfen optisch roh sein, müssen aber erreichbar und inhaltlich vollständig sein.
- Build: `npm run build` ohne Fehler und ohne neue Warnungen.
- Domain: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Projekte: `/projects` listet alle 17 Projekte mit funktionierenden Links.
- Impressum: `/impressum` erreichbar, Text unverändert.
- Sitemap & robots erzeugt.
- Theme: Wahl bleibt nach Reload, kein Aufblitzen.

## So prüfst du es (für den Nutzer)
`npm run dev` starten, Seite öffnen. In Windows auf Dunkelmodus umstellen und die Seite in einem privaten Fenster neu laden → erwarte dunklen, warmen Hintergrund ohne weißes Aufblitzen.

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: _(trägt /dev-build ein)_
