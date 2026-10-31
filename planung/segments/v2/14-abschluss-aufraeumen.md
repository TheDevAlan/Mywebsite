# Segment 14: Abschluss — Reste aufräumen und Gesamtprüfung
Status: erledigt · Hängt ab von: 12, 13
Aus: planung/changes/01-umbau-design-relaunch.md

## Kontext
Nach den Segmenten 01–13 sind alle Seiten neu. Übrig bleiben voraussichtlich ungenutzte Template-Reste: Abhängigkeiten (Kandidaten bei Planung: `dayjs`, `@tailwindcss/typography`, evtl. `sharp`, `@astrojs/mdx`), Konstanten in `src/config.ts`, Komponenten/Hilfsdateien, veraltete Template-Texte in `README.md` (z. B. falscher Port `3000`, Platzhalter-Repo-URL) und `package.json` (`name`/`description` „Astrofy“). **Stand bei Erstellung — zur Bauzeit prüfen.**

## Aufgabe
1. Per Grep ermitteln, welche Abhängigkeiten, Komponenten, Layouts und Hilfsdateien nicht mehr verwendet werden, und diese entfernen. Eine Abhängigkeit nur entfernen, wenn weder Code noch Konfiguration sie nutzt (MDX z. B. bleibt, wenn Posts `.mdx` sein dürfen — im Grounding entscheiden und begründen).
2. `README.md` auf den neuen Stand bringen (Seitenstruktur, DE/EN, Doodles in `public/doodles/`, wo Projekte gepflegt werden, wo Planung liegt, `npm run dev` mit korrektem Port). `package.json` `name`/`description` anpassen.
3. **Gesamtprüfung:** die komplette Liste „Was NICHT kaputtgehen darf“ aus Änderung 01 einmal vollständig durchgehen und das Ergebnis im Grounding protokollieren.
4. Änderung 01 auf „umgesetzt — wartet auf Veröffentlichung“ setzen.

Nicht Teil davon: Löschen der Bilder unter `public/Profil/` und `docs/Profil/`, Tracking von `.astro/`, `/social_img.webp`-Verweis, `pnpm-lock.yaml` (alles Scope-Grenze). **Kein Merge nach `main` und kein Push** — das entscheidet Alan ausdrücklich.

## Akzeptanzkriterien
- Build grün, ohne Warnungen; `npm install` auf frischem Stand (z. B. `npm ci`) funktioniert.
- Keine ungenutzten Abhängigkeiten oder Komponenten mehr (Grep-Nachweis im Grounding).
- README beschreibt den neuen Stand korrekt.
- Gesamtprüfung vollständig bestanden und protokolliert.

## Regressionsprüfung
Aus „Was NICHT kaputtgehen darf“ (Änderung 01) — hier **vollständig**:
- Domain/Auslieferung: `docs/CNAME` = `alangawlik.de`, `docs/.nojekyll` vorhanden.
- Build: ohne Fehler, ohne Warnungen.
- Projekte: alle 17 auf `/works`, Links wie auf der alten Seite (Tracking-Parameter ausgenommen), neuer Tab.
- Impressum/Datenschutz: Wortlaut unverändert, `/impressum` + Sidebar-Footer.
- Kontaktwege: Mail, GitHub, LinkedIn, Buy me a coffee auf `/contact` und `/about`.
- Sitemap & robots: erzeugt, nur aktuelle Seiten.
- Alte Links: `/projects` → `/works`, `/blog` → `/thoughts`.
- Theme: Wahl bleibt nach Reload, Erstbesuch folgt System, kein Aufblitzen.
- Sprache: `/en/…` erreichbar, Umschalter auf gleiche Seite, Nav englisch.
- Mobil: < 500 px benutzbar.

## So prüfst du es (für den Nutzer)
`npm run build`, dann `npm run preview` und jede Seite einmal in hell und dunkel, auf Deutsch und Englisch, auf Desktop- und Handybreite durchklicken. Wenn alles passt: Bescheid geben — dann besprechen wir die Veröffentlichung (Zusammenführen nach `main`).

## Abschluss
Nach bestandenem Test: git add + commit mit sprechender Nachricht (Build-Ausgabe `docs/` mitcommitten),
Status in dieser Datei und in planung/PLAN.md auf "erledigt" setzen,
kurz in Klartext erklären, was gebaut wurde und wie man es ausführt.
Grounding-Befunde: 4 (Tailwind bleibt, Card.astro, .npmrc-Warnung, robots.txt mit Vorlagen-Sitemap)
