// Zentrales Wörterbuch. Deutsch ist die Hauptsprache (ohne URL-Präfix), Englisch liegt unter /en/.
// Beide Sprachen sind vollständig und je einsprachig. Der Rückfall auf Deutsch (`t()`) bleibt nur
// als Sicherheitsnetz, falls später ein Schlüssel ergänzt und in `en` vergessen wird (siehe planung/decisions.md, E-08).
// Navigationsbegriffe (`nav.*`) sind je Sprache übersetzt; die Adressen bleiben englisch (/about, /works, …).
// Rechtstext (Impressum/Datenschutz) bleibt deutsch, siehe ImpressumView.astro.

export const languages = { de: 'DE', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

const de = {
  'meta.description': 'Portfolio von Alan Gawlik: KI-Manager, Apps und Projekte.',
  'sidebar.home': 'alan. – Startseite',
  'nav.about': 'über mich',
  'nav.works': 'projekte',
  'nav.thoughts': 'gedanken',
  'nav.contact': 'kontakt',
  'sidebar.navLabel': 'Hauptnavigation',
  'sidebar.langLabel': 'Sprache',
  'sidebar.themeLight': 'hell',
  'sidebar.themeDark': 'dunkel',
  'footer.legal': 'Datenschutz & Impressum',
  'home.doodleAlt': 'Zeichnung: Ich am Schreibtisch beim Programmieren – beim Darüberfahren schaue ich hoch und winke',
  'home.claim': 'Ich baue Apps\nfür die Arbeit, fürs Leben\nund just for fun.',
  'about.doodleAlt': 'Zeichnung: Ich winke – beim Darüberfahren winke ich fröhlich zurück und sage hi',
  'about.title': 'Hi, ich bin Alan.',
  'about.text':
    'Ich bin KI-Manager. Beruflich sorge ich dafür, dass KI im Arbeitsalltag ankommt: durchdacht, datenschutzkonform und so, dass sie Menschen wirklich entlastet. Was ich dabei lerne, probiere ich in eigenen Projekten aus. Manche machen die Arbeit leichter, manche den Alltag, und manche sind einfach Spielerei. Hier findest du sie alle.',
  'about.linkedin': 'linkedin',
  'about.github': 'github',
  'about.coffee': 'kaffee spendieren',
  'works.doodleAlt': 'Zeichnung: Ich hämmere an einem Browserfenster – beim Darüberfahren ist das Werk fertig',
  'works.title': 'projekte',
  'works.more': 'mehr anzeigen',
  'works.less': 'weniger anzeigen',
  'works.new': 'neu!',
  'works.wip': 'in arbeit',
  'thoughts.doodleAlt': 'Zeichnung: Ich denke nach, Gedankenblase über dem Kopf – beim Darüberfahren geht die Glühbirne an',
  'thoughts.title': 'gedanken',
  'thoughts.sub': 'Kleine Texte über verschiedene Sachen.',
  'thoughts.empty': 'Hier ist noch nichts. Gedanken kommen bald.',
  'contact.doodleAlt': 'Zeichnung: Zwei Kaffeetassen – beim Darüberfahren stoßen sie an',
  'legal.doodleAlt': 'Zeichnung: Ich lese das Kleingedruckte auf einer langen Papierrolle – beim Darüberfahren schließt sich das Schloss im Schutzschild',
  'contact.title': 'sag hallo.',
  'contact.text': 'Eine Mail ist der schnellste Weg zu mir. Oder du findest mich hier im Internet.',
  'contact.github': 'github',
  'contact.linkedin': 'linkedin',
  'contact.coffee': 'kaffee spendieren',
  'notfound.text': 'Hier ist nichts. Vielleicht hast du dich verlaufen.',
  'notfound.home': 'zur startseite',
} as const;

export type UiKey = keyof typeof de;

const en: Record<UiKey, string> = {
  'meta.description': 'Portfolio of Alan Gawlik: AI manager, apps and projects.',
  'sidebar.home': 'alan. – home',
  'nav.about': 'about',
  'nav.works': 'works',
  'nav.thoughts': 'thoughts',
  'nav.contact': 'contact',
  'sidebar.navLabel': 'Main navigation',
  'sidebar.langLabel': 'Language',
  'sidebar.themeLight': 'light',
  'sidebar.themeDark': 'dark',
  'footer.legal': 'Privacy & Legal Notice',
  'home.doodleAlt': 'Drawing: me at my desk, coding – when you hover over it, I look up and wave',
  'home.claim': 'I build apps\nfor work, for life, for fun.',
  'about.doodleAlt': 'Drawing: me waving – when you hover over it, I wave back cheerfully and say hi',
  'about.title': "Hi, I'm Alan.",
  'about.text':
    "I'm an AI manager. At work, I make sure AI actually lands in everyday work: well thought out, privacy-compliant, and in a way that genuinely takes load off people. What I learn along the way, I try out in projects of my own. Some make work easier, some make daily life easier, and some are just for fun. You'll find them all here.",
  'about.linkedin': 'linkedin',
  'about.github': 'github',
  'about.coffee': 'buy me a coffee',
  'works.doodleAlt': 'Drawing: me hammering away at a browser window – when you hover over it, the work is done',
  'works.title': 'works',
  'works.more': 'show more',
  'works.less': 'show less',
  'works.new': 'new!',
  'works.wip': 'wip',
  'thoughts.doodleAlt': 'Drawing: me thinking, thought bubble above my head – when you hover over it, the light bulb switches on',
  'thoughts.title': 'thoughts',
  'thoughts.sub': 'Short texts about various things.',
  'thoughts.empty': 'Nothing here yet. Thoughts are coming soon.',
  'contact.doodleAlt': 'Drawing: two coffee cups – when you hover over them, they clink',
  'legal.doodleAlt': 'Drawing: me reading the fine print on a long paper scroll – when you hover over it, the padlock in the shield snaps shut',
  'contact.title': 'say hello.',
  'contact.text': 'An email is the quickest way to reach me. Or you can find me here around the internet.',
  'contact.github': 'github',
  'contact.linkedin': 'linkedin',
  'contact.coffee': 'buy me a coffee',
  'notfound.text': "There's nothing here. Maybe you took a wrong turn.",
  'notfound.home': 'back to home',
};

export const ui: Record<Lang, Partial<Record<UiKey, string>>> = { de, en };

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}
