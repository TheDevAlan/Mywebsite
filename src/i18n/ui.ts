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
