'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useLang } from '@/i18n/LangContext';

const Footer = () => {
  const { t } = useLang();
  const f = t.footer;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a href="https://wa.me/+491772472408" target="_blank" rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-silver to-platinum rounded-full items-center justify-center shadow-glow-lg hover:shadow-glow transition-all duration-300 hover:scale-110 z-40"
        aria-label={f.whatsappLabel}>
        <FaWhatsapp className="text-midnight text-2xl" aria-hidden="true" />
      </a>

      <footer className="bg-midnight-dark border-t border-silver/10" role="contentinfo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Brand */}
            <div className="space-y-5">
              <div>
                <div className="flex items-baseline space-x-1 mb-3">
                  <span className="text-xl sm:text-2xl font-display font-bold text-silver tracking-tight">VIPSHUTTLE</span>
                  <span className="text-lg sm:text-xl font-display font-light text-silver/70">24</span>
                </div>
                <p className="text-silver/60 text-sm leading-relaxed">{f.tagline}</p>
              </div>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/people/VipShuttle24de/100070007923784/" target="_blank" rel="noopener noreferrer"
                  aria-label={f.fbLabel} className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 group">
                  <FaFacebook className="text-silver/70 group-hover:text-silver transition-colors duration-300" />
                </a>
                <a href="https://www.instagram.com/vipshuttle24.de/" target="_blank" rel="noopener noreferrer"
                  aria-label={f.igLabel} className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 group">
                  <FaInstagram className="text-silver/70 group-hover:text-silver transition-colors duration-300" />
                </a>
                <a href="https://wa.me/+491772472408" target="_blank" rel="noopener noreferrer"
                  aria-label={f.waLabel} className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 group">
                  <FaWhatsapp className="text-silver/70 group-hover:text-silver transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Nav */}
            <nav aria-label="Footer Navigation">
              <h3 className="text-silver font-display font-semibold mb-4 text-base lg:text-lg">{f.navTitle}</h3>
              <ul className="space-y-3">
                {f.navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-silver/60 hover:text-silver transition-colors duration-300 text-sm">{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <div>
              <h3 className="text-silver font-display font-semibold mb-4 text-base lg:text-lg">{f.servicesTitle}</h3>
              <ul className="space-y-3 text-sm text-silver/60">
                {f.servicesList.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-silver font-display font-semibold mb-4 text-base lg:text-lg">{f.contactTitle}</h3>
              <address className="not-italic space-y-4">
                <a href="tel:+491772472408" className="flex items-start space-x-3 text-silver/60 hover:text-silver transition-colors duration-300 group" aria-label={f.phoneLabel}>
                  <FaPhone className="text-platinum mt-1 flex-shrink-0 group-hover:text-silver transition-colors duration-300" aria-hidden="true" />
                  <div className="text-sm"><div>+49 177 2472408</div><div className="text-xs text-silver/40">{f.hotline}</div></div>
                </a>
                <a href="mailto:info@vipshuttle24.de" className="flex items-start space-x-3 text-silver/60 hover:text-silver transition-colors duration-300 group" aria-label={f.emailLabel}>
                  <FaEnvelope className="text-platinum mt-1 flex-shrink-0 group-hover:text-silver transition-colors duration-300" aria-hidden="true" />
                  <div className="text-sm">info@vipshuttle24.de</div>
                </a>
                <a href="https://maps.google.com/?q=Schlesische+Str.+104+40231+Düsseldorf" target="_blank" rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-silver/60 hover:text-silver transition-colors duration-300 group" aria-label={f.addressLabel}>
                  <FaMapMarkerAlt className="text-platinum mt-1 flex-shrink-0 group-hover:text-silver transition-colors duration-300" aria-hidden="true" />
                  <div className="text-sm">Schlesische Str. 104<br />40231 Düsseldorf</div>
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-silver/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-silver/50 text-xs sm:text-sm text-center sm:text-left">{f.copyright(currentYear)}</p>
              <nav aria-label="Rechtliches" className="flex space-x-5 text-sm">
                <a href="/impressum" className="text-silver/50 hover:text-silver transition-colors duration-300 text-xs sm:text-sm">{f.impressum}</a>
                <a href="/datenschutz" className="text-silver/50 hover:text-silver transition-colors duration-300 text-xs sm:text-sm">{f.datenschutz}</a>
                <a href="/agb" className="text-silver/50 hover:text-silver transition-colors duration-300 text-xs sm:text-sm">{f.agb}</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
