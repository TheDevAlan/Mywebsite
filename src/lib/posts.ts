// Posts als Markdown-Dateien: src/posts/de/<name>.md und src/posts/en/<name>.md.
// Pflichtfelder im Kopf (Frontmatter): title, description, pubDate (z. B. 2026-10-31).
// Der Basis-Slug ist der Dateiname ohne Sprachordner. Die englische Liste zeigt englische Fassungen
// und, wo es keine gibt, die deutsche (Rückfall wie im Wörterbuch, siehe planung/decisions.md E-09).
// Bewusst ohne Astro-Content-Collection: eine leere Collection erzeugt bei jedem Build Warnungen.
import type { MarkdownInstance } from 'astro';
import type { Lang } from '../i18n/ui';

export interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  Content: MarkdownInstance<Record<string, unknown>>['Content'];
}

const modules = import.meta.glob<MarkdownInstance<Record<string, unknown>>>('/src/posts/*/*.{md,mdx}', {
  eager: true,
});

function toPost(path: string, mod: MarkdownInstance<Record<string, unknown>>): Post {
  const fm = mod.frontmatter;
  const pubDate = new Date(fm.pubDate as string);
  if (typeof fm.title !== 'string' || typeof fm.description !== 'string' || Number.isNaN(pubDate.valueOf())) {
    throw new Error(`${path}: title, description und pubDate (Datum) sind Pflicht.`);
  }
  const slug = path.split('/').pop()!.replace(/\.(md|mdx)$/, '');
  return { slug, title: fm.title, description: fm.description, pubDate, Content: mod.Content };
}

/** Posts für eine Sprache, neueste zuerst. */
export function getPosts(lang: Lang): Post[] {
  const bySlug = new Map<string, Post>();
  for (const folder of lang === 'en' ? ['de', 'en'] : ['de']) {
    for (const [path, mod] of Object.entries(modules)) {
      if (path.startsWith(`/src/posts/${folder}/`)) {
        const post = toPost(path, mod);
        bySlug.set(post.slug, post);
      }
    }
  }
  return [...bySlug.values()].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
}

const months: Record<Lang, string[]> = {
  de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

/** "Okt 2026" bzw. "Oct 2026" (UTC, damit die Zeitzone den Monat nicht verschiebt). */
export function formatMonth(date: Date, lang: Lang): string {
  return `${months[lang][date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
