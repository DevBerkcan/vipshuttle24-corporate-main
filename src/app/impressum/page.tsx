import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum | VIPSHUTTLE24 Düsseldorf',
  description: 'Impressum der VipShuttle24 – Ahmet Bostanci, Schlesische Str. 104, 40231 Düsseldorf.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://vipshuttle-24.de/impressum' },
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-midnight py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-silver/60 hover:text-silver transition-colors duration-300 mb-12 text-sm"
        >
          ← Zurück zur Website
        </Link>

        <div className="glass-card p-8 lg:p-12 space-y-8">
          <div>
            <div className="flex items-baseline space-x-1 mb-8">
              <span className="text-2xl font-display font-bold text-silver tracking-tight">VIPSHUTTLE</span>
              <span className="text-xl font-display font-light text-silver/70">24</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">Impressum</h1>
          </div>

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">Angaben gemäß § 5 TMG</h2>
            <address className="not-italic text-silver/70 leading-relaxed">
              <strong className="text-silver">Ahmet Bostanci</strong><br />
              Vipshuttle24<br />
              Schlesische Str. 104<br />
              40231 Düsseldorf
            </address>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">Kontakt</h2>
            <div className="text-silver/70 space-y-2">
              <p>Mobil: <a href="tel:+491772472408" className="text-silver hover:text-platinum transition-colors">+49 177 2472408</a></p>
              <p>Telefon: <a href="tel:+4921154232741" className="text-silver hover:text-platinum transition-colors">+49 211 54232741</a></p>
              <p>E-Mail: <a href="mailto:info@vipshuttle24.de" className="text-silver hover:text-platinum transition-colors">info@vipshuttle24.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">Allgemeiner Disclaimer</h2>
            <p className="text-silver/70 leading-relaxed text-sm">
              Für Vollständigkeit, Fehler redaktioneller und technischer Art, Auslassungen sowie die Richtigkeit der
              Eintragungen kann keine Haftung übernommen werden. Insbesondere kann keine Gewähr für die
              Vollständigkeit und Richtigkeit von Informationen übernommen werden, die über weiterführende Links
              erreicht werden. Anbieter sind für die eigenen Inhalte, die sie zur Nutzung bereithalten, nach den
              allgemeinen Gesetzen verantwortlich. Die Verweise durch Hyperlinks auf Inhalte fremder Webseiten
              dienen lediglich der Information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">Streitschlichtung</h2>
            <p className="text-silver/70 leading-relaxed text-sm">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-platinum hover:text-silver transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div className="pt-4 border-t border-silver/10">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/datenschutz" className="text-silver/50 hover:text-silver transition-colors">Datenschutz</Link>
              <Link href="/agb" className="text-silver/50 hover:text-silver transition-colors">AGB</Link>
              <Link href="/" className="text-silver/50 hover:text-silver transition-colors">Startseite</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}