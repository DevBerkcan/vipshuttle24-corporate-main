import type { Lang } from './translations';

export const siteUrl = 'https://vipshuttle-24.de';

export const localizedPaths = {
  de: {
    home: '/',
    impressum: '/impressum',
    datenschutz: '/datenschutz',
    agb: '/agb',
  },
  en: {
    home: '/en',
    impressum: '/en/legal-notice',
    datenschutz: '/en/privacy-policy',
    agb: '/en/terms-and-conditions',
  },
} as const;

export type RouteKey = keyof typeof localizedPaths.de;

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function getPath(lang: Lang, route: RouteKey) {
  return localizedPaths[lang][route];
}

export function getLangFromPathname(pathname?: string | null): Lang {
  return pathname?.startsWith('/en') ? 'en' : 'de';
}

export function getAbsoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function getRouteKeyFromPathname(pathname: string): RouteKey {
  const normalizedPathname = normalizePathname(pathname);

  for (const lang of Object.keys(localizedPaths) as Lang[]) {
    for (const [routeKey, routePath] of Object.entries(localizedPaths[lang]) as [RouteKey, string][]) {
      if (normalizePathname(routePath) === normalizedPathname) {
        return routeKey;
      }
    }
  }

  return 'home';
}

export function switchLocalePath(pathname: string, targetLang: Lang) {
  const routeKey = getRouteKeyFromPathname(pathname);
  return getPath(targetLang, routeKey);
}
