import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LangProvider } from "@/i18n/LangContext";

// ─── Viewport (separate export required by Next.js 14+) ──────────────────────
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://vipshuttle-24.de"),
  title: {
    default: "VIPSHUTTLE24 | Premium Chauffeur & Limousinenservice Düsseldorf",
    template: "%s | VIPSHUTTLE24",
  },
  description:
    "Erstklassiger Chauffeur-Service in Düsseldorf und NRW. Professioneller Flughafentransfer, Hochzeitsfahrten, VIP-Service & Corporate Roadshows. Rund um die Uhr verfügbar – 24/7.",
  keywords:
    "VIP Shuttle Düsseldorf, Chauffeur Service Düsseldorf, Limousinenservice NRW, Flughafentransfer Düsseldorf, Mercedes Chauffeur, Premium Transfer NRW, Hochzeitsfahrt Düsseldorf, Corporate Roadshow NRW, VIP Service Düsseldorf, vipshuttle24",
  authors: [{ name: "VipShuttle24", url: "https://vipshuttle-24.de" }],
  creator: "VipShuttle24",
  publisher: "VipShuttle24",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://vipshuttle-24.de",
    siteName: "VIPSHUTTLE24",
    title: "VIPSHUTTLE24 | Premium Chauffeur & Limousinenservice Düsseldorf",
    description:
      "Erstklassiger Chauffeur-Service in Düsseldorf und NRW. Flughafentransfer, Hochzeitsfahrten, VIP-Service rund um die Uhr.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "VIPSHUTTLE24 – Premium Chauffeur Service Düsseldorf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIPSHUTTLE24 | Premium Chauffeur Service Düsseldorf",
    description:
      "Erstklassiger Chauffeur-Service in Düsseldorf und NRW. 24/7 verfügbar.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://vipshuttle-24.de",
  },
  category: "transportation",
};

// ─── Structured Data (JSON-LD) ─────────────────────────────────────────────────
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vipshuttle-24.de/#business",
  name: "VIPSHUTTLE24",
  description:
    "Premium Chauffeur und Limousinenservice in Düsseldorf und NRW. Flughafentransfer, Hochzeitsfahrten, VIP-Service und Corporate Roadshows.",
  url: "https://vipshuttle-24.de",
  telephone: "+491772472408",
  email: "info@vipshuttle24.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Schlesische Str. 104",
    addressLocality: "Düsseldorf",
    postalCode: "40231",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.2217,
    longitude: 6.7762,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/people/VipShuttle24de/100070007923784/",
    "https://www.instagram.com/vipshuttle24.de/",
  ],
  priceRange: "€€€",
  image: "https://vipshuttle-24.de/og-image.webp",
  logo: "https://vipshuttle-24.de/og-image.webp",
  areaServed: [
    { "@type": "State", name: "Nordrhein-Westfalen" },
    { "@type": "City", name: "Düsseldorf" },
    { "@type": "City", name: "Köln" },
    { "@type": "City", name: "Bonn" },
  ],
  hasMap: "https://maps.google.com/?q=Schlesische+Str.+104+40231+Düsseldorf",
  currenciesAccepted: "EUR",
  paymentAccepted: "Credit Card, Bank Transfer",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://vipshuttle-24.de/#website",
  url: "https://vipshuttle-24.de",
  name: "VIPSHUTTLE24",
  description: "Premium Chauffeur & Limousinenservice Düsseldorf und NRW",
  publisher: { "@id": "https://vipshuttle-24.de/#business" },
};

const serviceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://vipshuttle-24.de/#services",
  name: "VIPSHUTTLE24 Leistungen",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        "@id": "https://vipshuttle-24.de/#airport-transfer",
        name: "Airport Transfer Düsseldorf",
        description:
          "Professioneller Flughafentransfer zu allen deutschen und internationalen Flughäfen mit Echtzeit-Flugüberwachung.",
        provider: { "@id": "https://vipshuttle-24.de/#business" },
        areaServed: { "@type": "City", name: "Düsseldorf" },
        serviceType: "Airport Transfer",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        "@id": "https://vipshuttle-24.de/#hochzeitsfahrten",
        name: "Hochzeitsfahrten NRW",
        description:
          "Stilvolle Hochzeitsfahrten mit geschmückten Fahrzeugen und erfahrenen Chauffeuren in NRW.",
        provider: { "@id": "https://vipshuttle-24.de/#business" },
        areaServed: { "@type": "State", name: "Nordrhein-Westfalen" },
        serviceType: "Wedding Transportation",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        "@id": "https://vipshuttle-24.de/#corporate-roadshow",
        name: "Corporate Roadshow NRW",
        description:
          "Professionelle Geschäftsreisen und Roadshows durch ganz NRW mit persönlichem Koordinator.",
        provider: { "@id": "https://vipshuttle-24.de/#business" },
        areaServed: { "@type": "State", name: "Nordrhein-Westfalen" },
        serviceType: "Corporate Transportation",
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Fahrzeuge nutzt VIPSHUTTLE24?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir fahren ausschließlich mit gepflegten Mercedes-Fahrzeugen (S-Klasse, E-Klasse, V-Klasse, Sprinter), die nicht älter als 3 Jahre sind.",
      },
    },
    {
      "@type": "Question",
      name: "Ist VIPSHUTTLE24 24/7 verfügbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, unser Chauffeur-Service ist 7 Tage die Woche, 24 Stunden am Tag verfügbar – auch an Feiertagen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie weit im Voraus muss ich buchen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir empfehlen eine Buchung mindestens 24 Stunden im Voraus. Für Kurzfristbuchungen rufen Sie uns bitte direkt an unter +49 177 2472408.",
      },
    },
    {
      "@type": "Question",
      name: "Fahren Sie auch außerhalb von Düsseldorf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir sind in ganz Nordrhein-Westfalen tätig – inkl. Köln, Bonn, Essen, Dortmund und darüber hinaus.",
      },
    },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Geo tags */}
        <meta name="geo.region" content="DE-NW" />
        <meta name="geo.placename" content="Düsseldorf" />
        <meta name="geo.position" content="51.2217;6.7762" />
        <meta name="ICBM" content="51.2217, 6.7762" />

        {/* Performance: preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload hero poster (LCP image) */}
        <link rel="preload" as="image" href="/11.webp" />

        {/* Fonts */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body><LangProvider>{children}</LangProvider></body>
    </html>
  );
}
