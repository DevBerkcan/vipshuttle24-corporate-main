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
    default: "VIPSHUTTLE24 | VIP Chauffeur Service Germany – Düsseldorf | Premium Limousinenservice",
    template: "%s | VIPSHUTTLE24",
  },
  description:
    "VIP chauffeur service in Germany for celebrities, executives & international clients. English-speaking drivers, Mercedes fleet, 24/7. Airport transfers, corporate travel & private hire across Germany and Europe. Based in Düsseldorf.",
  keywords:
    "VIP chauffeur service Germany, luxury car service Germany, celebrity driver Germany, private chauffeur Düsseldorf, VIP transportation Germany, Mercedes chauffeur Germany, airport transfer Germany VIP, private driver Germany English speaking, VIP shuttle Germany, Chauffeur Service Düsseldorf, Limousinenservice NRW, Flughafentransfer Düsseldorf, Premium Transfer NRW, Corporate Roadshow NRW, VIP Service Düsseldorf, vipshuttle24",
  authors: [{ name: "VIPSHUTTLE24", url: "https://vipshuttle-24.de" }],
  creator: "VIPSHUTTLE24",
  publisher: "VIPSHUTTLE24",
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
    alternateLocale: ["en_US", "en_GB"],
    url: "https://vipshuttle-24.de",
    siteName: "VIPSHUTTLE24",
    title: "VIPSHUTTLE24 | VIP Chauffeur Service Germany – English Speaking Drivers",
    description:
      "Professional VIP chauffeur and luxury car service in Germany. English-speaking, discreet drivers for celebrities, executives & VIP clients. Mercedes S-Class, E-Class & Sprinter fleet. Airport transfers, corporate travel, private hire. 24/7 – Düsseldorf & all of Germany.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "VIPSHUTTLE24 – VIP Chauffeur Service Germany, Luxury Mercedes Fleet Düsseldorf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIPSHUTTLE24 | VIP Chauffeur Service Germany – 24/7 English Speaking",
    description:
      "Luxury Mercedes chauffeur service in Germany. English-speaking, discreet drivers for celebrities, executives & VIP clients. Airport transfers & private hire across Germany.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://vipshuttle-24.de",
    languages: {
      de: "https://vipshuttle-24.de",
      en: "https://vipshuttle-24.de",
      "x-default": "https://vipshuttle-24.de",
    },
  },
  category: "transportation",
};

// ─── Structured Data (JSON-LD) ─────────────────────────────────────────────────
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vipshuttle-24.de/#business",
  name: "VIPSHUTTLE24",
  alternateName: ["VIP Shuttle 24", "Vipshuttle24", "VIPSHUTTLE 24"],
  description:
    "VIPSHUTTLE24 is a professional VIP chauffeur and luxury car service based in Düsseldorf, Germany. We provide English-speaking, discreet drivers for celebrities, business executives, politicians, athletes, delegations, and VIP clients throughout Germany and Europe. Our fleet consists exclusively of Mercedes-Benz vehicles including the S-Class, E-Class, V-Class, Sprinter, and Tourismo coach. Services include VIP airport transfers, corporate roadshows, celebrity transport, private hire, group transfers, and 24/7 on-call chauffeur service.",
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
  image: "https://vipshuttle-24.de/1.webp",
  logo: "https://vipshuttle-24.de/logo2.webp",
  knowsLanguage: ["de", "en", "tr"],
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Country", name: "Belgium" },
    { "@type": "Country", name: "Luxembourg" },
    { "@type": "State", name: "Nordrhein-Westfalen" },
    { "@type": "City", name: "Düsseldorf" },
    { "@type": "City", name: "Köln" },
    { "@type": "City", name: "Bonn" },
    { "@type": "City", name: "Frankfurt" },
    { "@type": "City", name: "Hamburg" },
    { "@type": "City", name: "München" },
    { "@type": "City", name: "Berlin" },
    { "@type": "City", name: "Stuttgart" },
    { "@type": "City", name: "Essen" },
    { "@type": "City", name: "Dortmund" },
    { "@type": "City", name: "Hannover" },
    { "@type": "City", name: "Leipzig" },
    { "@type": "City", name: "Düsseldorf Airport" },
    { "@type": "City", name: "Frankfurt Airport" },
    { "@type": "City", name: "Munich Airport" },
    { "@type": "City", name: "Hamburg Airport" },
    { "@type": "City", name: "Berlin Brandenburg Airport" },
    { "@type": "City", name: "Cologne Bonn Airport" },
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
  description:
    "VIP Chauffeur & Luxury Car Service Germany – Premium Limousinenservice Düsseldorf und NRW",
  publisher: { "@id": "https://vipshuttle-24.de/#business" },
};

const serviceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://vipshuttle-24.de/#services",
  name: "VIPSHUTTLE24 Services – VIP Chauffeur & Luxury Transportation Germany",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        "@id": "https://vipshuttle-24.de/#vip-chauffeur-service",
        name: "VIP & Celebrity Chauffeur Service Germany",
        description:
          "Dedicated VIP chauffeur service for celebrities, business executives, politicians, athletes, and high-net-worth individuals throughout Germany. English-speaking, discreet drivers available 24/7. Mercedes S-Class and E-Class fleet.",
        provider: { "@id": "https://vipshuttle-24.de/#business" },
        areaServed: { "@type": "Country", name: "Germany" },
        serviceType: "VIP Chauffeur Service",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        "@id": "https://vipshuttle-24.de/#airport-transfer-germany",
        name: "VIP Airport Transfer Germany",
        description:
          "Professional VIP airport transfers to and from all major German airports: Düsseldorf (DUS), Frankfurt (FRA), Munich (MUC), Hamburg (HAM), Berlin Brandenburg (BER), and Cologne/Bonn (CGN). Real-time flight monitoring, meet & greet service with name board, luggage assistance included.",
        provider: { "@id": "https://vipshuttle-24.de/#business" },
        areaServed: { "@type": "Country", name: "Germany" },
        serviceType: "Airport Transfer",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        "@id": "https://vipshuttle-24.de/#corporate-roadshow",
        name: "Corporate Roadshow & Business Travel Germany",
        description:
          "Professional corporate roadshow logistics and executive travel throughout Germany and Europe. Coordination for delegations, investor roadshows, and trade fair transfers including Messe Düsseldorf, Hannover Messe, IAA Frankfurt, and Bauma Munich. English-speaking drivers, fixed pricing.",
        provider: { "@id": "https://vipshuttle-24.de/#business" },
        areaServed: [
          { "@type": "Country", name: "Germany" },
          { "@type": "Continent", name: "Europe" },
        ],
        serviceType: "Corporate Transportation",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        "@id": "https://vipshuttle-24.de/#luxury-car-service-germany",
        name: "Luxury Car Service Germany",
        description:
          "Premium Mercedes-Benz chauffeur service across Germany. S-Class, E-Class, V-Class and Sprinter fleet for private clients, celebrities, athletes and business travelers. Fixed-price guarantee, no hidden fees.",
        provider: { "@id": "https://vipshuttle-24.de/#business" },
        areaServed: { "@type": "Country", name: "Germany" },
        serviceType: "Luxury Car Service",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        "@id": "https://vipshuttle-24.de/#group-coach-transfer",
        name: "Group Transfer & Coach Hire Germany",
        description:
          "Luxury group transfers and coach hire in Germany for up to 50 passengers. Mercedes-Benz Sprinter and Tourismo coach for corporate events, tour groups, sports teams and concert tours.",
        provider: { "@id": "https://vipshuttle-24.de/#business" },
        areaServed: { "@type": "Country", name: "Germany" },
        serviceType: "Group Transportation",
      },
    },
  ],
};

// German FAQ (keeps existing German SEO)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://vipshuttle-24.de/#faq-de",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Fahrzeuge nutzt VIPSHUTTLE24?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir fahren ausschließlich mit gepflegten Mercedes-Fahrzeugen (S-Klasse, E-Klasse, V-Klasse, Sprinter, Tourismo), die nicht älter als 3 Jahre sind.",
      },
    },
    {
      "@type": "Question",
      name: "Ist VIPSHUTTLE24 24/7 verfügbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, unser Chauffeur-Service ist 7 Tage die Woche, 24 Stunden am Tag verfügbar – auch an Feiertagen. Hotline: +49 177 2472408.",
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
        text: "Ja, wir sind in ganz Deutschland tätig – inkl. Köln, Bonn, Frankfurt, Hamburg, München, Berlin, Stuttgart, Essen, Dortmund und darüber hinaus auch in Österreich, der Schweiz und den Benelux-Ländern.",
      },
    },
  ],
};

// English FAQ (for international/AI search targeting)
const faqEnJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://vipshuttle-24.de/#faq-en",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is VIPSHUTTLE24?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VIPSHUTTLE24 is a professional VIP chauffeur and luxury car service based in Düsseldorf, Germany. Founded over 20 years ago, the company provides English-speaking, discreet drivers for celebrities, business executives, politicians, athletes, and VIP clients throughout Germany and neighboring European countries. The fleet consists exclusively of Mercedes-Benz vehicles.",
      },
    },
    {
      "@type": "Question",
      name: "Does VIPSHUTTLE24 have English-speaking drivers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VIPSHUTTLE24 employs multilingual, English-speaking chauffeurs who are experienced with international clients. All booking communication and in-car service can be conducted entirely in English. WhatsApp communication is also available for fast, easy contact.",
      },
    },
    {
      "@type": "Question",
      name: "Which German cities does VIPSHUTTLE24 serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VIPSHUTTLE24 provides chauffeur service across all of Germany, including Düsseldorf, Cologne (Köln), Frankfurt, Hamburg, Munich (München), Berlin, Stuttgart, Bonn, Essen, and Dortmund. International transfers to Austria, Switzerland, the Netherlands, Belgium, and Luxembourg are also available.",
      },
    },
    {
      "@type": "Question",
      name: "Which airports does VIPSHUTTLE24 serve in Germany?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VIPSHUTTLE24 provides VIP airport transfers to and from all major German airports, including Düsseldorf Airport (DUS), Frankfurt Airport (FRA), Munich Airport (MUC), Hamburg Airport (HAM), Berlin Brandenburg Airport (BER), and Cologne Bonn Airport (CGN). Real-time flight tracking ensures pickups adjust automatically to delays.",
      },
    },
    {
      "@type": "Question",
      name: "What vehicles does VIPSHUTTLE24 use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VIPSHUTTLE24 operates an exclusively Mercedes-Benz fleet: the S-Class (flagship luxury sedan), E-Class (business sedan), V-Class (premium MPV), Sprinter (VIP van for up to 7 passengers), and Mercedes-Benz Tourismo coach for groups of up to 50 passengers. All vehicles are no more than 3 years old.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a VIP chauffeur in Germany?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book VIPSHUTTLE24 by calling +49 177 2472408 (available 24/7), via WhatsApp at the same number for fastest response, or by submitting a booking request via the website at vipshuttle-24.de. Advance booking of at least 24 hours is recommended, though last-minute requests can be accommodated by calling directly.",
      },
    },
    {
      "@type": "Question",
      name: "Is VIPSHUTTLE24 available 24 hours a day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VIPSHUTTLE24 operates 24 hours a day, 7 days a week, including public holidays. The 24/7 hotline is +49 177 2472408.",
      },
    },
    {
      "@type": "Question",
      name: "Does VIPSHUTTLE24 transport celebrities and VIPs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VIPSHUTTLE24 regularly provides chauffeur services for celebrities, athletes, musicians, politicians, delegations, and high-profile business executives visiting or traveling within Germany. Absolute discretion and confidentiality are guaranteed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price for a chauffeur service in Germany?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VIPSHUTTLE24 offers fixed-price transfers with no meter and no hidden charges. All prices are quoted and agreed in advance before the journey begins. Payment is accepted by credit card or bank transfer. Parking and toll fees are charged separately when applicable.",
      },
    },
    {
      "@type": "Question",
      name: "Can VIPSHUTTLE24 handle corporate roadshows and delegation transfers in Germany?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VIPSHUTTLE24 specializes in corporate roadshow logistics, investor delegation transfers, and multi-day executive travel programs across Germany and Europe. Services include trade fair shuttle at Messe Düsseldorf, Hannover Messe, IAA Frankfurt, and Bauma Munich, with a personal coordinator available for complex multi-vehicle itineraries.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqEnJsonLd) }}
        />

        {/* Geo tags */}
        <meta name="geo.region" content="DE-NW" />
        <meta name="geo.placename" content="Düsseldorf" />
        <meta name="geo.position" content="51.2217;6.7762" />
        <meta name="ICBM" content="51.2217, 6.7762" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Performance: preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload hero poster (LCP image) */}
        <link rel="preload" as="image" href="/12.webp" />

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
