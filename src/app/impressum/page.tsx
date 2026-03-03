import type { Metadata } from 'next';
import Link from 'next/link';
import { translations } from '@/i18n/translations';

export const metadata: Metadata = {
  title: 'Impressum | VIPSHUTTLE24 Düsseldorf',
  description: 'Impressum der VipShuttle24 – Ahmet Bostanci, Schlesische Str. 104, 40231 Düsseldorf.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://vipshuttle-24.de/impressum' },
};

export default function Impressum({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'de';
  const l = translations[lang].legal;
  const i = l.impressum;
  const lk = l.links;

  return (
    <main className="min-h-screen bg-midnight py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-silver/60 hover:text-silver transition-colors duration-300 mb-12 text-sm">
          {l.back}
        </Link>

        <div className="glass-card p-8 lg:p-12 space-y-8">
          <div>
            <div className="flex items-baseline space-x-1 mb-8">
              <span className="text-2xl font-display font-bold text-silver tracking-tight">VIPSHUTTLE</span>
              <span className="text-xl font-display font-light text-silver/70">24</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{i.h1}</h1>
          </div>

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{i.s1Title}</h2>
            <address className="not-italic text-silver/70 leading-relaxed">
              <strong className="text-silver">{i.s1Name}</strong><br />
              {i.s1Company}<br />
              {i.s1Street}<br />
              {i.s1City}
            </address>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{i.s2Title}</h2>
            <div className="text-silver/70 space-y-2">
              <p>{i.s2Mobile}: <a href="tel:+491772472408" className="text-silver hover:text-platinum transition-colors">+49 177 2472408</a></p>
              <p>{i.s2Phone}: <a href="tel:+4921154232741" className="text-silver hover:text-platinum transition-colors">+49 211 54232741</a></p>
              <p>{i.s2Email}: <a href="mailto:info@vipshuttle24.de" className="text-silver hover:text-platinum transition-colors">info@vipshuttle24.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{i.s3Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm">{i.s3Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{i.s4Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm">
              {i.s4Text}{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                className="text-platinum hover:text-silver transition-colors">
                https://ec.europa.eu/consumers/odr/
              </a>
              . {i.s4Suffix}
            </p>
          </section>

          <div className="pt-4 border-t border-silver/10">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/datenschutz" className="text-silver/50 hover:text-silver transition-colors">{lk.datenschutz}</Link>
              <Link href="/agb" className="text-silver/50 hover:text-silver transition-colors">{lk.agb}</Link>
              <Link href="/" className="text-silver/50 hover:text-silver transition-colors">{lk.home}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
