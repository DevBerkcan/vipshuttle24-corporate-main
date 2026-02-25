'use client';

import { FaPlane, FaHeart, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useLang } from '@/i18n/LangContext';

const ICONS = [FaPlane, FaHeart, FaBriefcase];
const IMAGES = [
  { src: '/2.webp', alt: 'VipShuttle24 Airport Transfer Düsseldorf – Mercedes Chauffeur am Flughafen' },
  { src: '/3.webp', alt: 'VipShuttle24 Hochzeitsfahrt NRW – Luxus Brautauto Mercedes' },
  { src: '/4.webp', alt: 'VipShuttle24 Corporate Roadshow NRW – Business Chauffeur Service' },
];

const Services = () => {
  const { t } = useLang();
  const s = t.services;

  return (
    <section id="services" className="py-16 lg:py-32 bg-midnight relative overflow-hidden" aria-label={s.sectionLabel}>
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-silver/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-platinum/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <div className="inline-block px-5 py-2 glass-card mb-5">
            <span className="text-silver text-xs sm:text-sm font-medium tracking-widest uppercase">{s.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4 leading-tight">{s.headline}</h2>
          <p className="text-silver/70 text-sm sm:text-base lg:text-lg leading-relaxed">{s.subline}</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {s.items.map((service, index) => {
            const Icon = ICONS[index];
            const img = IMAGES[index];
            return (
              <article key={service.title} className="glass-card group overflow-hidden" style={{ animation: `slideUp 0.8s ease-out ${index * 0.15}s both` }}>
                <div className={`flex flex-col lg:grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                  <div className={`relative h-52 sm:h-64 lg:h-auto lg:min-h-[380px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105" priority={index === 0} />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
                  </div>

                  <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <Icon className="text-2xl sm:text-3xl text-silver" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-silver mb-1 group-hover:text-silver-light transition-colors duration-300">{service.title}</h3>
                      <p className="text-platinum text-xs sm:text-sm font-medium mb-3 uppercase tracking-wider">{service.subtitle}</p>
                      <p className="text-silver/70 leading-relaxed text-sm sm:text-base">{service.description}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-silver rounded-full flex-shrink-0" />
                          <span className="text-silver/80 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#booking" className="inline-flex items-center space-x-2 text-silver hover:text-silver-light transition-colors duration-300 group/link w-fit">
                      <span className="font-medium text-sm sm:text-base">{s.cta}</span>
                      <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-16 text-center glass-card p-6 sm:p-8">
          <p className="text-silver/80 mb-4 sm:mb-6 text-sm sm:text-lg">{s.bottomText}</p>
          <a href="#booking" className="btn-primary inline-flex">{s.bottomCta}</a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

export default Services;
