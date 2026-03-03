import type { Metadata } from 'next';
import Link from 'next/link';
import { translations } from '@/i18n/translations';

export const metadata: Metadata = {
  title: 'AGB | VIPSHUTTLE24 Düsseldorf',
  description: 'Allgemeine Geschäftsbedingungen der VipShuttle24 – Premium Chauffeur Service Düsseldorf.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://vipshuttle-24.de/agb' },
};

export default function AGB({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'de';
  const l = translations[lang].legal;
  const a = l.agb;
  const lk = l.links;

  const blocks = [
    a.preise, a.zahlung, a.leistung, a.mindest,
    a.wartezeit, a.fahrpreis, a.rauchen,
    a.haftungKunde, a.haftungsausschluss,
  ];

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
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{a.h1}</h1>
          </div>

          <section className="space-y-4">
            {blocks.map((block) => (
              <div key={block.title} className="glass-card p-5">
                <h2 className="text-silver font-semibold mb-2">{block.title}</h2>
                <p className="text-silver/70 text-sm leading-relaxed">{block.text}</p>
              </div>
            ))}

            {/* Cancellation table */}
            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">{a.storno.title}</h2>
              <div className="text-silver/70 text-sm leading-relaxed space-y-2">
                {[
                  { label: a.storno.row1label, value: a.storno.row1value, color: 'text-green-400' },
                  { label: a.storno.row2label, value: a.storno.row2value, color: 'text-yellow-400' },
                  { label: a.storno.row3label, value: a.storno.row3value, color: 'text-orange-400' },
                  { label: a.storno.row4label, value: a.storno.row4value, color: 'text-red-400' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-1 border-b border-silver/10 last:border-0">
                    <span>{row.label}</span>
                    <span className={`${row.color} font-medium ml-4`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">{a.gericht.title}</h2>
              <p className="text-silver/70 text-sm leading-relaxed">{a.gericht.text}</p>
            </div>
          </section>

          <div className="pt-4 border-t border-silver/10">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/impressum" className="text-silver/50 hover:text-silver transition-colors">{lk.impressum}</Link>
              <Link href="/datenschutz" className="text-silver/50 hover:text-silver transition-colors">{lk.datenschutz}</Link>
              <Link href="/" className="text-silver/50 hover:text-silver transition-colors">{lk.home}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
