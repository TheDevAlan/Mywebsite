// Pfad-Hilfen für Deutsch (ohne Präfix) und Englisch (/en/...). Siehe planung/decisions.md, E-08.
import { defaultLang, type Lang } from './ui';

/** Sprache aus der URL: `/en` oder `/en/...` → en, sonst de. */
export function getLangFromUrl(url: URL): Lang {
  const { pathname } = url;
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : defaultLang;
}

/** Entfernt ein führendes `/en`: `/en/about/` → `/about/`, `/en/` → `/`. */
export function stripLang(pathname: string): string {
  if (pathname === '/en') return '/';
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname;
}

/** Pfad (ohne Sprachpräfix, mit führendem `/`) in der gewünschten Sprache: `/about` → `/en/about`. */
export function localePath(path: string, lang: Lang): string {
  const clean = stripLang(path);
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** Dieselbe Seite in der anderen Sprache. */
export function switchLangPath(pathname: string, target: Lang): string {
  return localePath(pathname, target);
}
