import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AGB | VIPSHUTTLE24 Düsseldorf',
  description: 'Allgemeine Geschäftsbedingungen der VipShuttle24 – Premium Chauffeur Service Düsseldorf.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://vipshuttle-24.de/agb' },
};

export default function AGB() {
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
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
              Allgemeine Geschäftsbedingungen
            </h1>
          </div>

          <section className="space-y-4">
            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Preise</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                Alle Preise sind in Euro und inklusive der gesetzlichen Mehrwertsteuer in Höhe von 19 %.
              </p>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Zahlung</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                Zahlung für Dienstleistungen ist per Banküberweisung im Voraus oder mit Kreditkarte möglich.
                Wir akzeptieren keine Barzahlungen.
              </p>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Leistungsumfang</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                Mietpreise beinhalten Fahrdienstleistungen, Treibstoffkosten und kostenloses Wasser im Fahrzeug.
                Park- und Mautgebühren werden extra berechnet.
              </p>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Mindestmietdauer</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                Die Mindestmietdauer für Stundenbuchungen beträgt drei Stunden.
              </p>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Wartezeit</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                30 Minuten Wartezeit am Flughafen und 15 Minuten an anderen Abholorten sind im Preis enthalten.
                Weitere Wartezeit am Abholort wird im 30-Minuten-Takt berechnet.
              </p>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Fahrpreis</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                Der Fahrpreis ändert sich nicht während der Fahrt aufgrund von verkehrsbedingten Änderungen
                der Fahrstrecke oder Wartezeiten.
              </p>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Rauchverbot</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                Das Rauchen ist in jedem unserer Fahrzeuge verboten.
              </p>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Haftung des Kunden</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                Die Kunden übernehmen die volle finanzielle Haftung für Schäden, die durch Sie oder Mitglieder
                ihrer Vertragspartei während der Miet-/Fahrzeit verursacht wurden.
              </p>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Haftungsausschluss</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                Das Unternehmen ist nicht verantwortlich für Verzögerungen wegen Wetter, Verkehr oder unsicherer
                Straßenverhältnisse (Naturereignisse, Unfälle oder unvorhersehbare technische Pannen). In diesen
                Fällen darf vom Vertrag ohne Ersatzleistung zurückgetreten werden. Unsere Haftung ist grundsätzlich
                auf die gesetzlich vorgeschriebene Betriebshaftpflichtversicherung beschränkt.
              </p>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Stornierungsbedingungen</h2>
              <div className="text-silver/70 text-sm leading-relaxed space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-silver/10">
                  <span>Stornierung bis 7 Tage vor Abreise</span>
                  <span className="text-green-400 font-medium ml-4">Kostenlos</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-silver/10">
                  <span>Stornierung bis 2 Tage vor Abreise</span>
                  <span className="text-yellow-400 font-medium ml-4">50 %</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-silver/10">
                  <span>Stornierung bis 24 Stunden vor Abreise</span>
                  <span className="text-orange-400 font-medium ml-4">75 %</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>Stornierung ab 24 Stunden vor Abreise</span>
                  <span className="text-red-400 font-medium ml-4">100 %</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-5">
              <h2 className="text-silver font-semibold mb-2">Gerichtsstand</h2>
              <p className="text-silver/70 text-sm leading-relaxed">
                Gerichtsstand ist ausschließlich Düsseldorf, soweit der Auftraggeber Kaufmann, juristische Person
                des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen ist. Dies gilt gleichermaßen,
                wenn der Auftraggeber keinen allgemeinen Gerichtsstand in Deutschland oder einem anderen Mitgliedsstaat
                der EU hat.
              </p>
            </div>
          </section>

          <div className="pt-4 border-t border-silver/10">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/impressum" className="text-silver/50 hover:text-silver transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="text-silver/50 hover:text-silver transition-colors">Datenschutz</Link>
              <Link href="/" className="text-silver/50 hover:text-silver transition-colors">Startseite</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}