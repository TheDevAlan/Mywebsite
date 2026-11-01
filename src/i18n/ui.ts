// Zentrales Wörterbuch. Deutsch ist die Hauptsprache (ohne URL-Präfix), Englisch liegt unter /en/.
// Fehlt ein Eintrag in `en`, wird der deutsche Text verwendet – Fallback bewusst hier und
// nicht über Astros i18n-Fallback (siehe planung/decisions.md, E-08).

export const languages = { de: 'DE', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

const de = {
  'sidebar.home': 'alan. – Startseite',
  'sidebar.navLabel': 'Hauptnavigation',
  'sidebar.langLabel': 'Sprache',
  'footer.legal': 'Datenschutz & Impressum',
  'home.doodleA': 'du am Schreibtisch, tief im Code',
  'home.doodleB': 'du schaust hoch und winkst',
  'home.claim': 'I build apps - for work, for life, for fun.',
  'about.doodleA': 'du, winkend',
  'about.doodleB': 'winkt zurück',
  'about.title': 'KI-Enthusiast und Hobby-Entwickler',
  'about.text':
    'Auf dieser Webseite stelle ich meine Projekte vor, die den Workflow erleichtern und den Alltag bereichern sollen. Ich entwickle zudem maßgeschneiderte Code-Lösungen, die Arbeitsprozesse effizienter gestalten und repetitive Aufgaben automatisieren.',
  'about.linkedin': 'linkedin',
  'about.github': 'github',
  'about.coffee': 'kaffee spendieren',
  'works.title': 'works',
  'works.new': 'neu!',
  'works.wip': 'in arbeit',
  'works.doodleA': 'du mit Werkzeug in der Hand',
  'works.doodleB': 'das Werk ist fertig',
  'thoughts.title': 'thoughts',
  'thoughts.sub': 'Kleine Texte über verschiedene Sachen.',
  'thoughts.doodleA': 'du, nachdenklich, Gedankenblase über dem Kopf',
  'thoughts.doodleB': 'Glühbirne geht an',
  'thoughts.empty': 'Hier ist noch nichts. Gedanken kommen bald.',
  'contact.doodleA': 'zwei Tassen Kaffee',
  'contact.doodleB': 'Tassen stoßen an',
  'contact.title': 'sag hallo.',
  'contact.text': 'Eine Mail ist der schnellste Weg zu mir. Oder du findest mich hier im Internet.',
  'contact.github': 'github',
  'contact.linkedin': 'linkedin',
  'contact.coffee': 'buy me a coffee',
  'notfound.text': 'Hier ist nichts. Vielleicht hast du dich verlaufen.',
  'notfound.home': 'zur startseite',
} as const;

export type UiKey = keyof typeof de;

// Englisch: nur ergänzen, was übersetzt ist. `footer.legal` fehlt absichtlich (Alan liefert).
const en: Partial<Record<UiKey, string>> = {
  'sidebar.home': 'alan. – home',
  'sidebar.navLabel': 'Main navigation',
  'sidebar.langLabel': 'Language',
  'home.claim': 'I build apps - for work, for life, for fun.',
};

export const ui: Record<Lang, Partial<Record<UiKey, string>>> = { de, en };

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}
