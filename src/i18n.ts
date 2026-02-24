export type Locale = 'zh' | 'en';

export function withBasePath(pathname: string): string {
  if (!pathname) return pathname;
  if (pathname.startsWith('http://') || pathname.startsWith('https://')) return pathname;
  if (pathname.startsWith('mailto:') || pathname.startsWith('tel:')) return pathname;
  if (pathname.startsWith('#')) return pathname;

  const base = (import.meta as any).env?.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  if (normalizedBase === '/') return pathname;

  const normalizedPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  return `${normalizedBase}${normalizedPath}`;
}

export function stripBasePath(pathname: string): string {
  const base = (import.meta as any).env?.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

  if (!normalizedBase || normalizedBase === '/') return pathname;
  if (pathname === normalizedBase) return '/';
  if (pathname.startsWith(`${normalizedBase}/`)) return pathname.slice(normalizedBase.length);
  return pathname;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const path = stripBasePath(pathname);
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'zh';
}

export function stripLocalePrefix(pathname: string): string {
  const path = stripBasePath(pathname);
  if (path === '/en') return '/';
  if (path.startsWith('/en/')) return path.slice(3);
  return path;
}

export function withLocale(pathname: string, locale: Locale): string {
  const base = stripLocalePrefix(pathname);
  if (locale === 'en') return base === '/' ? '/en' : `/en${base}`;
  return base;
}
