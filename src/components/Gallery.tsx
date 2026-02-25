'use client';

import { useState, useCallback } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { useLang } from '@/i18n/LangContext';

const IMAGE_ALTS_DE = [
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, Luxusfahrzeug Innenraum',
  'VipShuttle24 – Airport Transfer Düsseldorf, Mercedes am Flughafen',
  'VipShuttle24 – Hochzeitsfahrt NRW, geschmücktes Brautauto',
  'VipShuttle24 – Corporate Roadshow NRW, Business Limousine',
  'VipShuttle24 – Mercedes S-Klasse, Luxus-Limousine Düsseldorf',
  'VipShuttle24 – Premium Fahrzeugflotte, exklusive Limousine',
  'VipShuttle24 – Mercedes E-Klasse, Business-Limousine NRW',
  'VipShuttle24 – Mercedes V-Klasse VIP-Van, Gruppenfahrzeug',
  'VipShuttle24 – Chauffeur Service Düsseldorf, eleganter Transfer',
  'VipShuttle24 – Stundenweise Buchung, Limousine mit Fahrer',
  'VipShuttle24 – Mercedes Sprinter, Gruppenbus Düsseldorf',
  'VipShuttle24 – VIP-Service NRW, Luxusfahrzeug Außenansicht',
  'VipShuttle24 – Premium Chauffeur, gepflegter Mercedes Innenraum',
  'VipShuttle24 – Flughafentransfer Köln, professioneller Fahrer',
  'VipShuttle24 – Abendveranstaltung Transfer, elegante Fahrt',
  'VipShuttle24 – Messe Shuttle Düsseldorf, Geschäftsreise NRW',
  'VipShuttle24 – Luxus Limousinenservice, schwarzer Mercedes',
  'VipShuttle24 – Nachtfahrt Düsseldorf, stilvoller City Transfer',
  'VipShuttle24 – Premium Transfer NRW, Chauffeur mit Fahrgast',
];
const IMAGE_ALTS_EN = [
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, luxury vehicle interior',
  'VipShuttle24 – Airport Transfer Düsseldorf, Mercedes at the airport',
  'VipShuttle24 – Wedding Ride NRW, decorated bridal car',
  'VipShuttle24 – Corporate Roadshow NRW, business limousine',
  'VipShuttle24 – Mercedes S-Class, luxury sedan Düsseldorf',
  'VipShuttle24 – Premium fleet, exclusive limousine',
  'VipShuttle24 – Mercedes E-Class, business sedan NRW',
  'VipShuttle24 – Mercedes V-Class VIP van, group vehicle',
  'VipShuttle24 – Chauffeur Service Düsseldorf, elegant transfer',
  'VipShuttle24 – Hourly booking, limousine with driver',
  'VipShuttle24 – Mercedes Sprinter, group bus Düsseldorf',
  'VipShuttle24 – VIP Service NRW, luxury vehicle exterior',
  'VipShuttle24 – Premium chauffeur, maintained Mercedes interior',
  'VipShuttle24 – Airport transfer Cologne, professional driver',
  'VipShuttle24 – Evening event transfer, elegant ride',
  'VipShuttle24 – Trade fair shuttle Düsseldorf, business trip NRW',
  'VipShuttle24 – Luxury limousine service, black Mercedes',
  'VipShuttle24 – Night ride Düsseldorf, stylish city transfer',
  'VipShuttle24 – Premium transfer NRW, chauffeur with passenger',
];

const Gallery = () => {
  const { t, lang } = useLang();
  const g = t.gallery;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const alts = lang === 'de' ? IMAGE_ALTS_DE : IMAGE_ALTS_EN;
  const images = Array.from({ length: 19 }, (_, i) => ({ src: `/${i + 1}.webp`, alt: alts[i] }));

  const INITIAL_COUNT = 6;
  const visibleImages = expanded ? images : images.slice(0, INITIAL_COUNT);
  const remaining = images.length - INITIAL_COUNT;

  const handlePrev = useCallback(() => setSelectedImage((prev) => prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : null), [images.length]);
  const handleNext = useCallback(() => setSelectedImage((prev) => prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : null), [images.length]);

  return (
    <>
      <section id="gallery" className="py-16 lg:py-28 bg-midnight relative overflow-hidden" aria-label={g.sectionLabel}>
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-silver/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-platinum/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
            <div className="inline-block px-5 py-2 glass-card mb-5">
              <span className="text-silver text-xs sm:text-sm font-medium tracking-widest uppercase flex items-center gap-2">
                <FaImages className="text-platinum" aria-hidden="true" />{g.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4 leading-tight">
              {g.headline1}<br />{g.headline2}
            </h2>
            <p className="text-silver/70 text-sm sm:text-base lg:text-lg leading-relaxed">{g.subline}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {visibleImages.map((img, index) => (
              <div key={img.src}
                className="group relative overflow-hidden rounded-lg glass-card cursor-pointer"
                style={{ aspectRatio: '4/3', animation: `fadeInGallery 0.4s ease-out ${Math.min(index, 5) * 0.06}s both` }}
                onClick={() => setSelectedImage(index)} role="button" tabIndex={0}
                aria-label={`${g.openLabel}: ${img.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(index)}>
                <Image src={img.src} alt={img.alt} fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index < INITIAL_COUNT ? 'eager' : 'lazy'} />
                <div className="absolute inset-0 bg-midnight/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 glass-card rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-silver rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {images.length > INITIAL_COUNT && (
            <div className="mt-8 sm:mt-10 text-center">
              <button onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 glass-card text-silver hover:shadow-glow transition-all duration-300 rounded-lg font-medium text-sm sm:text-base group"
                aria-expanded={expanded}>
                {expanded ? (
                  <>{g.showLess}<FaChevronDown className="transition-transform duration-300 rotate-180" aria-hidden="true" /></>
                ) : (
                  <>{g.showMore(remaining)}<FaChevronDown className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-midnight/98 backdrop-blur-xl z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true"
          aria-label={g.counter(selectedImage + 1, images.length)}>
          <button onClick={() => setSelectedImage(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.closeLabel}><FaTimes className="text-silver" /></button>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 glass-card px-3 py-1.5 rounded-full z-10">
            <span className="text-silver text-xs sm:text-sm font-medium">{g.counter(selectedImage + 1, images.length)}</span>
          </div>
          <button onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.prevLabel}><FaChevronLeft className="text-silver" /></button>
          <button onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.nextLabel}><FaChevronRight className="text-silver" /></button>
          <div className="w-full max-w-5xl flex items-center justify-center mt-10 relative"
            onClick={(e) => e.stopPropagation()} style={{ maxHeight: '78vh', aspectRatio: '16/9' }}>
            <Image src={images[selectedImage].src} alt={images[selectedImage].alt} fill
              className="object-contain rounded-lg" sizes="(max-width: 1280px) 95vw, 1280px" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInGallery { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
};

export default Gallery;
