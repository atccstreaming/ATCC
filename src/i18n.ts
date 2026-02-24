export type Locale = 'zh' | 'en';

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname;
}

export function withLocale(pathname: string, locale: Locale): string {
  const base = stripLocalePrefix(pathname);
  if (locale === 'en') return base === '/' ? '/en' : `/en${base}`;
  return base;
}
