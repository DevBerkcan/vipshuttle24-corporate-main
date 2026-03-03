import type { Metadata } from 'next';
import Link from 'next/link';
import { translations } from '@/i18n/translations';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Datenschutzerklärung | VIPSHUTTLE24 Düsseldorf',
    description: 'Datenschutzerklärung der VipShuttle24 gemäß DSGVO.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://vipshuttle-24.de/datenschutz' },
  };
}

export default function Datenschutz({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'de';
  const l = translations[lang].legal;
  const d = l.datenschutz;
  const lk = l.links;

  return (
    <main className="min-h-screen bg-midnight py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-silver/60 hover:text-silver transition-colors duration-300 mb-12 text-sm">
          {l.back}
        </Link>

        <div className="glass-card p-8 lg:p-12 space-y-10">
          <div>
            <div className="flex items-baseline space-x-1 mb-8">
              <span className="text-2xl font-display font-bold text-silver tracking-tight">VIPSHUTTLE</span>
              <span className="text-xl font-display font-light text-silver/70">24</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{d.h1}</h1>
          </div>

          {/* 1 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{d.s1Title}</h2>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s1h2}</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{d.s1p1}</p>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s1h3}</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{d.s1p2}</p>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s1h4}</h3>
            <p className="text-silver/70 leading-relaxed text-sm">{d.s1p3}</p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{d.s2Title}</h2>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s2h2}</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{d.s2p1}</p>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s2h3}</h3>
            <p className="text-silver/70 leading-relaxed text-sm">{d.s2p2}</p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{d.s3Title}</h2>
            <address className="not-italic text-silver/70 leading-relaxed text-sm">
              <strong className="text-silver">{d.s3Name}</strong><br />
              {d.s3Person}<br />
              {d.s3Street}<br />
              {d.s3City}<br /><br />
              {d.s3Phone}: <a href="tel:+4921154232741" className="text-platinum hover:text-silver transition-colors">+49 211 54232741</a><br />
              {d.s3Mobile}: <a href="tel:+491772472408" className="text-platinum hover:text-silver transition-colors">+49 177 2472408</a><br />
              {d.s3Email}: <a href="mailto:info@vipshuttle24.de" className="text-platinum hover:text-silver transition-colors">info@vipshuttle24.de</a>
            </address>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{d.s4Title}</h2>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s4h2}</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{d.s4p1}</p>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s4h3}</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{d.s4p2}</p>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s4h4}</h3>
            <p className="text-silver/70 leading-relaxed text-sm">{d.s4p3}</p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{d.s5Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm">{d.s5p1}</p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{d.s6Title}</h2>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s6h2}</h3>
            <p className="text-silver/70 leading-relaxed text-sm">{d.s6p1}</p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{d.s7Title}</h2>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s7h2}</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{d.s7p1}</p>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s7h3}</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{d.s7p2}</p>
            <h3 className="text-silver/90 font-semibold mb-2">{d.s7h4}</h3>
            <p className="text-silver/70 leading-relaxed text-sm">{d.s7p3}</p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{d.s8Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm">{d.s8p1}</p>
          </section>

          <div className="pt-4 border-t border-silver/10">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/impressum" className="text-silver/50 hover:text-silver transition-colors">{lk.impressum}</Link>
              <Link href="/agb" className="text-silver/50 hover:text-silver transition-colors">{lk.agb}</Link>
              <Link href="/" className="text-silver/50 hover:text-silver transition-colors">{lk.home}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
