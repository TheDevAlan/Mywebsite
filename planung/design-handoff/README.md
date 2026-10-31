# Handoff: alangawlik.de – Relaunch „lockeres Skizzenbuch“ (v2, Offwhite + Hell/Dunkel)

## Overview
Neugestaltung der persönlichen Website alangawlik.de. Ziel: effortless, leicht verspielt, minimal, positiver Vibe, bewusst nicht 100 % poliert (unfertige Projekte sind ok und werden markiert). Fünf Seiten: Startseite, about, works, thoughts, contact. Hell- und Dunkelmodus mit Schalter. Der Lebenslauf entfällt komplett.

Bestehendes Repo: `TheDevAlan/Mywebsite` (Astro 4, Tailwind + daisyUI). Inhalte (Projekte, Links) stammen von dort.

## About the Design Files
`Alan Webseite Ideen.dc.html` ist eine **Design-Referenz in HTML** (Prototyp mit Aussehen und Verhalten), kein Produktionscode. Aufgabe: die Designs im bestehenden Astro-Projekt nachbauen, mit dessen Mustern (Astro-Komponenten, Layouts, Content Collections). daisyUI-Theme/-Komponenten für diese Seiten nicht verwenden; Styling eigenständig wie unten beschrieben (Tailwind oder eigenes CSS mit CSS-Variablen).

Die Referenzdatei enthält mehrere Entwurfsrunden. **Umsetzen nur Runde 6** (ganz oben in der Datei):
- **6a** Startseite · **6b** about · **6c** works · **6d** thoughts · **6e** contact

Alle anderen Runden (1–5) sind ältere Entwürfe und werden ignoriert.

## Fidelity
**High-fidelity.** Farben, Schriften, Abstände und Interaktionen sind final. Ausnahme: gestreifte Flächen mit Monospace-Text sind **Platzhalter für Alans eigene Zeichnungen** (Doodles), die später als PNG/SVG kommen. Bis dahin die Platzhalter wie beschrieben umsetzen.

---

## Theming (Hell/Dunkel)
Alle Farben laufen über CSS-Variablen auf `<html data-theme="light|dark">`. Übergang beim Umschalten: `transition: background .35s, color .35s` auf Body/Kacheln.

| Variable | light | dark | Verwendung |
|---|---|---|---|
| `--bg` | `#fbfaf7` | `#1b1a18` | Seitenhintergrund |
| `--ink` | `#1f1c18` | `#efe9de` | Text, Linien, Rahmen |
| `--coral` | `oklch(0.64 0.16 32)` | `oklch(0.74 0.14 34)` | Akzent: Wellenlinie, Logo-Punkt, Kategorie-Unterstrich, Hover |
| `--coral-d` | `oklch(0.55 0.17 30)` | `oklch(0.78 0.12 36)` | kleine Koralle-Texte (Datum, Stempel) |
| `--coral-l` | `oklch(0.83 0.09 35)` | `oklch(0.46 0.1 32)` | Marker-Strich, Pill-Hover-Fläche |
| `--text2` | `#45413a` | `#cfc8bc` | Fließtext |
| `--muted` | `#6b675f` | `#a39c90` | sekundär, inaktive Elemente |
| `--muted2` | `#a29d93` | `#6f6a62` | Trenn-Schrägstriche |
| `--stripe` | `#efece5` | `#26241f` | Doodle-Platzhalter-Streifen |
| `--line` | `#d6d0c4` | `#3d3a34` | gestrichelte Trennlinien |
| `--t0`…`--t5` | `#f3efe6 #f8e3da #efe7d6 #f3efe6 #f7edd0 #f6ece6` | `#24221f #33251f #2b2720 #24221f #2f2a1c #2c2522` | Kachel-Töne auf works |

**Verhalten:** Startwert = `prefers-color-scheme` des Systems; Wahl in `localStorage` speichern; Theme-Attribut per Inline-Script im `<head>` setzen, damit nichts flackert.

**Cursor** (je Theme, als Variable `--cur`, auf `body { cursor: var(--cur) }`):
- light: Pfeil gefüllt `#fbfaf7`, Kontur `#1f1c18`
- dark: Pfeil gefüllt `#1b1a18`, Kontur `#efe9de`
```css
url('data:image/svg+xml,%3Csvg xmlns=%22http%3A//www.w3.org/2000/svg%22 width=%2230%22 height=%2230%22%3E%3Cpath d=%22M4 3 C10 6 18 10 25 13 C20 14 16 15 14 16 C13 19 12 22 11 26 C9 18 6 10 4 3 Z%22 fill=%22%23fbfaf7%22 stroke=%22%231f1c18%22 stroke-width=%222.2%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E') 4 3, auto
```
(Für dark `fbfaf7`→`1b1a18` und `1f1c18`→`efe9de` tauschen.) Auf klickbaren Doodles und Buttons `cursor: pointer`.

---

## Globales Layout (alle Seiten)
Zweispaltiges Grid, Desktop-Referenzbreite 1100px: `grid-template-columns: 280px 1fr`. Startseite und contact: volle Viewporthöhe. works und thoughts scrollen.

### Sidebar (linke Spalte)
- Padding `64px 0 40px 72px`, `display:flex; flex-direction:column`. Auf works: `position:sticky; top:0; align-self:start; min-height:100vh`.
- Alle Sidebar-Texte in **Gaegu**.

1. **Logo „alan.“**: Gaegu 700, 52px, line-height 1. „alan“ in `--ink`, Punkt in `--coral`. **Hover:** Farben tauschen (alan → `--coral`, Punkt → `--ink`). Link `/`.
2. **Navigation**: 72px unter dem Logo. Vertikal, gap 14px, Gaegu 400, 30px: `about` `/about`, `works` `/works`, `thoughts` `/thoughts`, `contact` `/contact`. Farbe `--ink`, Hover `--coral`. Aktive Seite: `text-decoration: underline wavy var(--coral); text-underline-offset: 6px`. Startseite: kein aktiver Punkt.
3. **Sprachumschalter**: 44px unter der Nav. `DE / EN`, Gaegu 22px, gap 8px. Aktiv: 700 + `--ink`, inaktiv: `--muted`, Schrägstrich `--muted2`.
4. **Theme-Umschalter**: 14px darunter, gleicher Aufbau wie DE / EN: `[Sonne] / [Mond]`, gap 8px.
   - Zwei `<button>` ohne Hintergrund/Rahmen, padding 2px, `aria-label="hell"` / `"dunkel"`.
   - Aktives Icon `--ink`, inaktives `--muted`. Schrägstrich `--muted2`.
   - Hover: Sonne `rotate(20deg)`, Mond `rotate(-15deg)`, `transition: transform .2s`.
   - Icons (Outline, `stroke="currentColor"`):
   ```html
   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.3M12 19.2v2.3M2.5 12h2.3M19.2 12h2.3M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>
   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M19.5 14.8A8 8 0 0 1 9.2 4.5 8 8 0 1 0 19.5 14.8Z"/></svg>
   ```
5. **Footer** (unten via `margin-top:auto; padding-top:40px`): Karla 12px, `--muted`, gap 4px: `© 2025 Alan Gawlik` / Link `Datenschutz & Impressum` → `/impressum`.

### Doodle-Komponente
Jede Seite außer works hat ein Doodle mit zwei Zuständen (Bild A / B). **Klick** wechselt A↔B. **Hover:** leichte Drehung + Scale, `transition: transform .25s`.
Platzhalter bis echte Zeichnungen da sind: `border: 2px dashed var(--ink)`, `border-radius: 8px 16px 10px 14px`, Hintergrund `repeating-linear-gradient(135deg, var(--stripe) 0 10px, var(--bg) 10px 20px)`, Monospace-Label 12px `--muted`. Mit echten Bildern: Rahmen/Streifen entfernen, nur die Zeichnung zeigen (transparente PNG/SVG; für Dark-Mode Linien in `currentColor` als SVG oder `filter: invert(1)` auf schwarz-weißen PNGs).

---

## Screens

### 6a Startseite `/`
Hauptspalte: `flex column; align-items:center; justify-content:center; gap:28px; padding:40px`.
- **Doodle** 400×320, `rotate(2deg)`, Hover `rotate(-1.5deg) scale(1.02)`. A: „du am Schreibtisch, tief im Code“ · B: „du schaust hoch und winkst“
- **Claim**: `I build apps - for work, for life, for fun.`, Gaegu 700, 40px, line-height 1.1, zentriert, max-width 520px, `text-wrap: balance`.
- Sonst nichts.

### 6b about `/about`
Hauptspalte: `flex column; justify-content:center; gap:24px; padding:72px 96px 72px 24px; max-width:640px`.
- **Doodle** 260×200, `rotate(-2deg)`, Hover `rotate(2deg) scale(1.03)`. A: „du, winkend“ · B: „winkt zurück“
- **H1** `KI-Enthusiast und Hobby-Entwickler`: Gaegu 700, 48px, line-height 1.1, margin-top 8px.
- **Text** (Karla 16px, lh 1.7, `--text2`): „Auf dieser Webseite stelle ich meine Projekte vor, die den Workflow erleichtern und den Alltag bereichern sollen. Ich entwickle zudem maßgeschneiderte Code-Lösungen, die Arbeitsprozesse effizienter gestalten und repetitive Aufgaben automatisieren.“
- **Links** Gaegu 22px, gap 22px, `--ink`, Hover `--coral`: `linkedin` · `github` · `kaffee spendieren`.

### 6c works `/works` (ersetzt `/projects`, 301-Redirect)
Hauptspalte: `flex column; gap:52px; padding:72px 64px 72px 24px`. Pro Kategorie ein Block (gap 32px):
- **Kategorie-Titel**: Gaegu 700, 34px, `text-decoration: underline var(--coral); text-decoration-thickness:5px; text-underline-offset:6px`.
- **Grid**: `repeat(3, minmax(0,1fr))`, gap `40px 26px`.
- **Kachel** (Link, `target="_blank"`): `aspect-ratio:1; padding:22px 20px 20px; border-radius:4px`, kein Schatten, keine Rotation, kein Rahmen. Hintergrund `var(--tN)` mit N = `(globalerIndex * 5) % 6`. Hover `translateY(-4px)`, `.2s`.
  - Titel: Gaegu 700, 23px, lh 1.05, `overflow-wrap:anywhere; hyphens:auto; lang="de"`
  - Beschreibung: Karla 13.5px, lh 1.45, `--text2`, `line-clamp: 5`
  - **„neu!“-Badge**: absolut `top:-12px; right:-8px`, Gaegu 700 19px, Hintergrund `--ink`, Text `--bg`, `padding:1px 10px`, `border-radius:20px 16px 22px 14px`, `rotate(10deg)`.
  - **„IN ARBEIT“-Stempel**: absolut `bottom:12px; right:8px`, Gaegu 700 22px, uppercase, Farbe + `border:3px double` in `--coral-d`, `padding:1px 10px`, `rotate(-12deg)`.
- Daten: `projects.json` (Felder `category, title, description, href, isNew, wip`), Reihenfolge der Kategorien wie in der Datei.

### 6d thoughts `/thoughts` (ersetzt `/blog`)
Kurze Blogposts über verschiedene Themen. Blog-Collection `src/content/blog` weiterverwenden, Demo-Posts löschen.
Hauptspalte: `flex column; gap:40px; padding:72px 72px 72px 24px`.
- **Kopfzeile**: `flex; justify-content:space-between; align-items:flex-end; gap:32px`
  - links: H1 `thoughts.` (Gaegu 700, 64px, lh 1, **Punkt in `--coral`**) + `Kleine Texte über verschiedene Sachen.` (Karla 16px, `--text2`, max-width 360px, gap 10px)
  - rechts: **Doodle** 240×190, `rotate(-3deg)`, Hover `rotate(2deg) scale(1.03)`. A: „du, nachdenklich, Gedankenblase über dem Kopf“ · B: „Glühbirne geht an“
- **Post-Liste**: je Eintrag ein Link, `grid; grid-template-columns:110px 1fr; gap:20px; padding:22px 0; border-top:1.5px dashed var(--line)`. Hover `translateX(8px)`, `.2s`.
  - Datum (pubDate, Format „Okt 2026“): Gaegu 20px, `--coral-d`, padding-top 4px
  - Titel: Gaegu 700, 28px, lh 1.1
  - Teaser (description): Karla 14.5px, `--muted`
- Post-Detailseite (nicht gestaltet, schlicht halten): gleiche Sidebar; Hauptspalte max-width ~640px, Titel Gaegu 700 48px, Datum wie oben, Fließtext Karla 17px/1.7 `--text2`.

### 6e contact `/contact`
Hauptspalte: `position:relative; flex column; justify-content:flex-end; gap:22px; padding:72px 72px 96px 24px`.
- **Doodle** absolut `top:64px; right:80px`, 260×200, `rotate(3deg)`, Hover `rotate(-2deg) scale(1.03)`. A: „zwei Tassen Kaffee“ · B: „Tassen stoßen an“
- **H1** `sag hallo.`: Gaegu 700, 64px, lh 1. **Punkt NICHT orange**, komplett `--ink`.
- **Text**: `Eine Mail ist der schnellste Weg zu mir. Oder du findest mich hier im Internet.`, Karla 17px, lh 1.65, `--text2`, max-width 440px.
- **E-Mail** `info@alangawlik.de` (mailto), Karla 30px, margin-top 10px, `padding:0 6px; isolation:isolate`. Marker dahinter: absolut `left:-4px; right:-6px; bottom:-2px; height:16px; background: var(--coral-l); border-radius:10px 4px 12px 6px; transform: rotate(-1.2deg); z-index:-1`. Hover `rotate(-1deg)`.
- **Pills** (margin-top 22px, flex-wrap, gap 16px), `target="_blank"`, jeweils **Icon (20×20, `fill="currentColor"`) + Text**, gap 10px:
  - GitHub-Icon + `github` → https://github.com/TheDevAlan
  - LinkedIn-Icon + `linkedin` → https://www.linkedin.com/in/alan-gawlik-332202316/
  - Tassen-Icon + `buy me a coffee` → https://buymeacoffee.com/TheDevAlan
  - Icons: dieselben SVG-Pfade wie im bisherigen Footer des Repos (`docs/projects/index.html`, `.social-icons`). In der Referenzdatei unter 6e ebenfalls enthalten.
  - Stil: Gaegu 22px, `--ink`, `border:1.5px solid var(--ink); border-radius:30px; padding:8px 24px 8px 18px`. Hover: Hintergrund `--coral-l`, `rotate(-2deg)`, `transition: background .2s, transform .2s`.

---

## Interactions & Behavior
- Doodle-Klick: Toggle A/B (lokaler State je Doodle, nicht persistieren).
- Logo-Hover: per CSS, z. B. `.logo:hover{color:var(--coral)} .logo:hover .dot{color:var(--ink)}`.
- Theme-Umschalter: siehe Theming. Klick auf Sonne → light, Mond → dark.
- Alle Hover-Transitions 0.2–0.25s, Standard-Easing.
- Externe Links in neuem Tab.
- **DE/EN**: Astro i18n-Routing (`/en/...`). Navigation bleibt in beiden Sprachen englisch. Englische Texte liefert Alan; bis dahin DE als Fallback.
- **Responsive** (nicht gestaltet, Vorschlag): unter ~800px Sidebar oben als Leiste (Logo links, Nav als Zeile, DE/EN + Theme rechts), works-Grid 2 Spalten, unter 500px 1 Spalte; Doodles max. 80 % Breite; contact-Doodle statisch über der Überschrift.
- `prefers-reduced-motion`: Hover-Rotationen/-Verschiebungen und Theme-Transition deaktivieren.

## Typografie
Google Fonts (oder self-hosted via @fontsource):
```html
<link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&family=Karla:wght@400;500;700&display=swap" rel="stylesheet">
```
- **Gaegu** 400/700: Logo, Navigation, Überschriften, Projekttitel, Labels, Pills
- **Karla** 400: Fließtext, Beschreibungen, E-Mail, Footer
- Größen: 64 (Seiten-H1), 52 (Logo), 48 (about-H1), 40 (Claim), 34 (Kategorie), 30 (Nav, E-Mail), 28 (Post-Titel), 23 (Kachel-Titel), 22 (Pills, DE/EN), 20 (Datum), 19 (Badge). Fließtext 13.5–17.

## Weitere Tokens
- Radien: Kachel 4px · Pills 30px · Doodle-Rahmen `8px 16px 10px 14px` · Badge `20px 16px 22px 14px` · Marker `10px 4px 12px 6px`
- Schatten: keine
- Abstände: Sidebar 280px, links 72px Einzug; Hauptspalte 72px oben, 64–72px rechts

## Assets
- Doodles: 4 Stück × 2 Zustände (Start, about, thoughts, contact). Ablage `public/doodles/`, z. B. `home-a.svg`, `home-b.svg`, `about-a.svg` … Bis dahin Platzhalter.
- Optional: eigener Cursor `public/cursor-light.svg` / `cursor-dark.svg` (30×30, Hotspot 4 3).
- Projekt-Thumbnails aus `/Profil/` werden nicht mehr verwendet.

## Aufräumen im Repo
- Entfernen: Lebenslauf (`/cv`), Services, Store
- `/projects` → `/works`, `/blog` → `/thoughts` (301)
- daisyUI-Navbar und alten Footer durch ein gemeinsames `BaseLayout.astro` mit `<Sidebar active="works" />` ersetzen
- Impressum ins neue Layout übernehmen

## Files
- `Alan Webseite Ideen.dc.html`: Design-Referenz, im Browser öffnen, **Runde 6 (6a–6e)** ist maßgeblich
- `support.js`: nur zum Öffnen der Referenz nötig
- `projects.json`: alle 17 Projekte mit Kategorie, Link, neu/in-Arbeit-Flags
