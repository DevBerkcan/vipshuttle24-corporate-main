import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | VIPSHUTTLE24 Düsseldorf',
  description: 'Datenschutzerklärung der VipShuttle24 gemäß DSGVO.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://vipshuttle-24.de/datenschutz' },
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-midnight py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-silver/60 hover:text-silver transition-colors duration-300 mb-12 text-sm"
        >
          ← Zurück zur Website
        </Link>

        <div className="glass-card p-8 lg:p-12 space-y-10">
          <div>
            <div className="flex items-baseline space-x-1 mb-8">
              <span className="text-2xl font-display font-bold text-silver tracking-tight">VIPSHUTTLE</span>
              <span className="text-xl font-display font-light text-silver/70">24</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">Datenschutzerklärung</h1>
          </div>

          {/* 1 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-silver/90 font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
            <h3 className="text-silver/90 font-semibold mb-2">Datenerfassung auf dieser Website</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Ihre Daten werden zum
              einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. Kontaktformular). Andere Daten werden
              automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (technische Daten wie
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <h3 className="text-silver/90 font-semibold mb-2">Ihre Rechte</h3>
            <p className="text-silver/70 leading-relaxed text-sm">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser
              Daten. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">2. Hosting</h2>
            <h3 className="text-silver/90 font-semibold mb-2">RAIDBOXES</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">
              Wir hosten die Inhalte unserer Website bei RAIDBOXES GmbH, Hafenstr. 32, 48151 Münster. Wenn Sie
              unsere Website besuchen, erfasst RAIDBOXES verschiedene Logfiles inklusive Ihrer IP-Adressen. Die
              Verwendung von RAIDBOXES erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <h3 className="text-silver/90 font-semibold mb-2">Cloudflare</h3>
            <p className="text-silver/70 leading-relaxed text-sm">
              Wir nutzen den Service „Cloudflare" der Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107,
              USA. Cloudflare bietet ein weltweit verteiltes Content Delivery Network. Der Einsatz erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das Unternehmen verfügt über eine Zertifizierung nach dem
              „EU-US Data Privacy Framework" (DPF).
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">3. Verantwortliche Stelle</h2>
            <address className="not-italic text-silver/70 leading-relaxed text-sm">
              <strong className="text-silver">Vipshuttle24</strong><br />
              Ahmet Bostanci<br />
              Schlesische Str. 104<br />
              40231 Düsseldorf<br /><br />
              Telefon: <a href="tel:+4921154232741" className="text-platinum hover:text-silver transition-colors">+49 211 54232741</a><br />
              Mobil: <a href="tel:+491772472408" className="text-platinum hover:text-silver transition-colors">+49 177 2472408</a><br />
              E-Mail: <a href="mailto:info@vipshuttle24.de" className="text-platinum hover:text-silver transition-colors">info@vipshuttle24.de</a>
            </address>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-silver/90 font-semibold mb-2">Cookies</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">
              Unsere Internetseiten verwenden sogenannte „Cookies". Cookies sind kleine Datenpakete, die auf Ihrem
              Endgerät gespeichert werden. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
              Cookies informiert werden.
            </p>
            <h3 className="text-silver/90 font-semibold mb-2">Kontaktformular & E-Mail</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive
              der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>
            <h3 className="text-silver/90 font-semibold mb-2">Kommunikation via WhatsApp</h3>
            <p className="text-silver/70 leading-relaxed text-sm">
              Für die Kommunikation nutzen wir WhatsApp Business der WhatsApp Ireland Limited, 4 Grand Canal Square,
              Dublin 2, Irland. Die Kommunikation erfolgt über Ende-zu-Ende-Verschlüsselung. Rechtsgrundlage:
              Art. 6 Abs. 1 lit. f DSGVO. Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
              Privacy Framework".
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">5. Soziale Medien</h2>
            <p className="text-silver/70 leading-relaxed text-sm">
              Auf dieser Website sind Elemente von sozialen Medien (Facebook, Instagram) eingebunden. Diese werden
              nur zusammen mit der „Shariff"-Lösung eingesetzt, die verhindert, dass beim Seitenaufruf bereits
              Daten übertragen werden. Erst bei aktivem Klick auf das Social-Media-Element wird eine Verbindung
              hergestellt (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">6. Analyse-Tools</h2>
            <h3 className="text-silver/90 font-semibold mb-2">WP Statistics</h3>
            <p className="text-silver/70 leading-relaxed text-sm">
              Diese Website nutzt WP Statistics (Veronalabs, Tallinn, Estland) zur anonymisierten Auswertung der
              Besucherzugriffe. Die erfassten Daten werden ausschließlich auf unserem eigenen Server gespeichert.
              IP-Adressen werden anonymisiert. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">7. Plugins und Tools</h2>
            <h3 className="text-silver/90 font-semibold mb-2">YouTube (erweiterter Datenschutz)</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">
              Diese Website bindet Videos von YouTube ein (Google Ireland Limited, Dublin 4, Irland). Wir nutzen
              den erweiterten Datenschutzmodus. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Google ist nach dem
              EU-US Data Privacy Framework zertifiziert.
            </p>
            <h3 className="text-silver/90 font-semibold mb-2">Font Awesome</h3>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">
              Diese Seite nutzt Font Awesome (Fonticons, Inc., Cambridge, Massachusetts, USA) zur Darstellung von
              Icons. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <h3 className="text-silver/90 font-semibold mb-2">OpenStreetMap</h3>
            <p className="text-silver/70 leading-relaxed text-sm">
              Wir binden OpenStreetMap auf unserem eigenen Server ein, sodass keine Verbindung zu Servern Dritter
              erfolgt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">8. SSL-Verschlüsselung</h2>
            <p className="text-silver/70 leading-relaxed text-sm">
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.
            </p>
          </section>

          <div className="pt-4 border-t border-silver/10">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/impressum" className="text-silver/50 hover:text-silver transition-colors">Impressum</Link>
              <Link href="/agb" className="text-silver/50 hover:text-silver transition-colors">AGB</Link>
              <Link href="/" className="text-silver/50 hover:text-silver transition-colors">Startseite</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}