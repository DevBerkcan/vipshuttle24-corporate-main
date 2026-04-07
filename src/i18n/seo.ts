import type { Metadata } from 'next';
import type { Lang } from './translations';
import { getAbsoluteUrl, getPath, type RouteKey } from './config';

function getAlternates(route: RouteKey, lang: Lang) {
  return {
    canonical: getPath(lang, route),
    languages: {
      de: getAbsoluteUrl(getPath('de', route)),
      en: getAbsoluteUrl(getPath('en', route)),
      'x-default': getAbsoluteUrl(getPath('de', route)),
    },
  };
}

export function getHomeMetadata(lang: Lang): Metadata {
  const isEnglish = lang === 'en';
  const pathname = getPath(lang, 'home');

  return {
    title: isEnglish
      ? 'VIP Chauffeur Service Germany | English-Speaking Drivers'
      : 'Chauffeur Service Duesseldorf | Premium Limousinenservice',
    description: isEnglish
      ? 'VIP chauffeur service in Germany with English-speaking drivers, luxury Mercedes fleet, airport transfers, roadshows and private hire from Düsseldorf across Germany and Europe.'
      : 'Premium Chauffeur- und Limousinenservice in Duesseldorf und NRW. Diskrete Fahrer, Mercedes-Flotte, Flughafentransfers, Businessfahrten und VIP-Service rund um die Uhr.',
    keywords: isEnglish
      ? [
          'VIP chauffeur service Germany',
          'chauffeur service Düsseldorf',
          'English speaking driver Germany',
          'airport transfer Germany',
          'luxury car service Germany',
          'corporate roadshow Germany',
          'private driver Düsseldorf',
          'Mercedes chauffeur Germany',
        ]
      : [
          'Chauffeur Service Düsseldorf',
          'Limousinenservice Düsseldorf',
          'VIP Shuttle Düsseldorf',
          'Flughafentransfer Düsseldorf',
          'Business Transfer NRW',
          'Mercedes Chauffeur Service',
          'VIP Fahrservice Deutschland',
          'Gruppentransfer NRW',
        ],
    alternates: getAlternates('home', lang),
    openGraph: {
      type: 'website',
      url: getAbsoluteUrl(pathname),
      siteName: 'VIPSHUTTLE24',
      locale: isEnglish ? 'en_US' : 'de_DE',
      alternateLocale: isEnglish ? ['de_DE'] : ['en_US'],
      title: isEnglish
        ? 'VIPSHUTTLE24 | VIP Chauffeur Service Germany'
        : 'VIPSHUTTLE24 | Premium Chauffeur Service Düsseldorf',
      description: isEnglish
        ? 'Luxury chauffeur service across Germany for international clients, executives and VIPs.'
        : 'Diskreter Premium Chauffeur-Service in Düsseldorf und NRW für Business, Flughafen und VIP-Fahrten.',
      images: [
        {
          url: '/og-image.webp',
          width: 1200,
          height: 630,
          alt: 'VIPSHUTTLE24 chauffeur service',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEnglish
        ? 'VIPSHUTTLE24 | VIP Chauffeur Service Germany'
        : 'VIPSHUTTLE24 | Chauffeur Service Düsseldorf',
      description: isEnglish
        ? 'English-speaking chauffeurs, Mercedes fleet, airport transfers and private hire across Germany.'
        : 'Premium Limousinenservice, Flughafentransfers und VIP-Fahrten in Düsseldorf und NRW.',
      images: ['/og-image.webp'],
    },
  };
}

export function getLegalMetadata(route: Exclude<RouteKey, 'home'>, lang: Lang): Metadata {
  const isEnglish = lang === 'en';
  const pathname = getPath(lang, route);

  const pages = {
    impressum: {
      de: {
        title: 'Impressum',
        description: 'Rechtliche Anbieterkennzeichnung und Kontaktdaten von VIPSHUTTLE24 in Düsseldorf.',
      },
      en: {
        title: 'Legal Notice',
        description: 'Legal notice and provider information for VIPSHUTTLE24 in Düsseldorf, Germany.',
      },
    },
    datenschutz: {
      de: {
        title: 'Datenschutz',
        description: 'Datenschutzhinweise und Informationen zur Verarbeitung personenbezogener Daten durch VIPSHUTTLE24.',
      },
      en: {
        title: 'Privacy Policy',
        description: 'Privacy policy and information on how VIPSHUTTLE24 processes personal data.',
      },
    },
    agb: {
      de: {
        title: 'AGB',
        description: 'Allgemeine Geschäftsbedingungen von VIPSHUTTLE24 für Chauffeur- und Transferleistungen.',
      },
      en: {
        title: 'Terms and Conditions',
        description: 'Terms and conditions for VIPSHUTTLE24 chauffeur and transfer services.',
      },
    },
  } as const;

  const copy = pages[route][lang];

  return {
    title: copy.title,
    description: copy.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: getAlternates(route, lang),
    openGraph: {
      type: 'article',
      url: getAbsoluteUrl(pathname),
      siteName: 'VIPSHUTTLE24',
      locale: isEnglish ? 'en_US' : 'de_DE',
      alternateLocale: isEnglish ? ['de_DE'] : ['en_US'],
      title: `${copy.title} | VIPSHUTTLE24`,
      description: copy.description,
    },
    twitter: {
      card: 'summary',
      title: `${copy.title} | VIPSHUTTLE24`,
      description: copy.description,
    },
  };
}
