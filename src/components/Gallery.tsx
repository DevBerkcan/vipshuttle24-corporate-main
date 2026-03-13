'use client';

import { useState, useCallback, useRef } from 'react';
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaChevronDown,
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';
import Image from 'next/image';
import { useLang } from '@/i18n/LangContext';

const IMAGE_ALTS_DE = [
  // 1
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, Luxusfahrzeug Innenraum',
  // 2
  'VipShuttle24 – Airport Transfer Düsseldorf, Mercedes am Flughafen',
  // 3
  'VipShuttle24 – Hochzeitsfahrt NRW, geschmücktes Brautauto',
  // 4
  'VipShuttle24 – Corporate Roadshow NRW, Business Limousine',
  // 5
  'VipShuttle24 – Mercedes S-Klasse, Luxus-Limousine Düsseldorf',
  // 6
  'VipShuttle24 – Premium Fahrzeugflotte, exklusive Limousine',
  // 7
  'VipShuttle24 – Mercedes E-Klasse, Business-Limousine NRW',
  // 8
  'VipShuttle24 – Mercedes V-Klasse VIP-Van, Gruppenfahrzeug',
  // 9
  'VipShuttle24 – Chauffeur Service Düsseldorf, eleganter Transfer',
  // 10
  'VipShuttle24 – Stundenweise Buchung, Limousine mit Fahrer',
  // 11
  'VipShuttle24 – Mercedes Sprinter, Gruppenbus Düsseldorf',
  // 12
  'VipShuttle24 – VIP-Service NRW, Luxusfahrzeug Außenansicht',
  // 13
  'VipShuttle24 – Premium Chauffeur, gepflegter Mercedes Innenraum',
  // 14
  'VipShuttle24 – Flughafentransfer Köln, professioneller Fahrer',
  // 15
  'VipShuttle24 – Abendveranstaltung Transfer, elegante Fahrt',
  // 16
  'VipShuttle24 – Messe Shuttle Düsseldorf, Geschäftsreise NRW',
  // 17
  'VipShuttle24 – Luxus Limousinenservice, schwarzer Mercedes',
  // 18
  'VipShuttle24 – Nachtfahrt Düsseldorf, stilvoller City Transfer',
  // 19
  'VipShuttle24 – Premium Transfer NRW, Chauffeur mit Fahrgast',
  // 20
  'VipShuttle24 – Mercedes S-Klasse Exterieur, Premium Limousine Düsseldorf',
  // 21
  'VipShuttle24 – VIP Chauffeur Service, exklusiver Fahrgastraum',
  // 22
  'VipShuttle24 – Business Transfer NRW, professioneller Fahrservice',
  // 23
  'VipShuttle24 – Flughafentransfer Düsseldorf, pünktlicher Abholdienst',
  // 24
  'VipShuttle24 – Luxusfahrzeug Detailansicht, premium Ausstattung',
  // 25
  'VipShuttle24 – Mercedes V-Klasse Innenraum, VIP Gruppenfahrzeug NRW',
  // 26
  'VipShuttle24 – Hochzeitsfahrt Düsseldorf, elegante Brautwagenfahrt',

  // 28
  'VipShuttle24 – Geschäftsreise Limousine, Corporate Transfer NRW',
  // 29
  'VipShuttle24 – Premium Fahrdienst, schwarzer Mercedes Exterieur',

  // 32
  'VipShuttle24 – Chauffeur Düsseldorf, stilvoller Abendtransfer',
  // 33
  'VipShuttle24 – VIP Transfer Düsseldorf, exklusive Fahrzeugflotte',
  // 34
  'VipShuttle24 – Mercedes E-Klasse Innenraum, Business Ambiente',
  // 35
  'VipShuttle24 – Nacht Transfer NRW, Premium Limousinenservice',
  // 36
  'VipShuttle24 – Messe Düsseldorf Transfer, professioneller Shuttle',
  // 37
  'VipShuttle24 – Flughafen Meet and Greet, VIP Empfangsservice',
  // 38
  'VipShuttle24 – Hochzeitsfahrzeug NRW, geschmückter Luxus-Mercedes',
  // 39
  'VipShuttle24 – Premium Chauffeur Köln, eleganter Fahrdienst',
  // 40
  'VipShuttle24 – Corporate Roadshow Limousine, Geschäftsreise Service',
  // 41
  'VipShuttle24 – Luxus Innenraum Detail, erstklassige Ausstattung',

  // 42
  'VipShuttle24 – VIP Gruppenfahrt NRW, Premium Transfer für Gruppen',
  // 43
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, neues Galerie-Foto',
  // 44
  'VipShuttle24 – Luxus Limousinenservice Düsseldorf, neues Galerie-Foto',
  // 45
  'VipShuttle24 – Premium Chauffeur Service NRW, neues Galerie-Foto',
];

const IMAGE_ALTS_EN = [
  // 1
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, luxury vehicle interior',
  // 2
  'VipShuttle24 – Airport Transfer Düsseldorf, Mercedes at the airport',
  // 3
  'VipShuttle24 – Wedding Ride NRW, decorated bridal car',
  // 4
  'VipShuttle24 – Corporate Roadshow NRW, business limousine',
  // 5
  'VipShuttle24 – Mercedes S-Class, luxury sedan Düsseldorf',
  // 6
  'VipShuttle24 – Premium fleet, exclusive limousine',
  // 7
  'VipShuttle24 – Mercedes E-Class, business sedan NRW',
  // 8
  'VipShuttle24 – Mercedes V-Class VIP van, group vehicle',
  // 9
  'VipShuttle24 – Chauffeur Service Düsseldorf, elegant transfer',
  // 10
  'VipShuttle24 – Hourly booking, limousine with driver',
  // 11
  'VipShuttle24 – Mercedes Sprinter, group bus Düsseldorf',
  // 12
  'VipShuttle24 – VIP Service NRW, luxury vehicle exterior',
  // 13
  'VipShuttle24 – Premium chauffeur, maintained Mercedes interior',
  // 14
  'VipShuttle24 – Airport transfer Cologne, professional driver',
  // 15
  'VipShuttle24 – Evening event transfer, elegant ride',
  // 16
  'VipShuttle24 – Trade fair shuttle Düsseldorf, business trip NRW',
  // 17
  'VipShuttle24 – Luxury limousine service, black Mercedes',
  // 18
  'VipShuttle24 – Night ride Düsseldorf, stylish city transfer',
  // 19
  'VipShuttle24 – Premium transfer NRW, chauffeur with passenger',
  // 20
  'VipShuttle24 – Mercedes S-Class exterior, premium sedan Düsseldorf',
  // 21
  'VipShuttle24 – VIP chauffeur service, exclusive passenger cabin',
  // 22
  'VipShuttle24 – Business transfer NRW, professional driving service',
  // 23
  'VipShuttle24 – Airport transfer Düsseldorf, punctual pick-up service',
  // 24
  'VipShuttle24 – Luxury vehicle detail view, premium interior',
  // 25
  'VipShuttle24 – Mercedes V-Class interior, VIP group vehicle NRW',
  // 26
  'VipShuttle24 – Wedding ride Düsseldorf, elegant bridal car journey',

  // 28
  'VipShuttle24 – Business trip limousine, corporate transfer NRW',
  // 29
  'VipShuttle24 – Premium driving service, black Mercedes exterior',

  // 32
  'VipShuttle24 – Chauffeur Düsseldorf, stylish evening transfer',
  // 33
  'VipShuttle24 – VIP transfer Düsseldorf, exclusive vehicle fleet',
  // 34
  'VipShuttle24 – Mercedes E-Class interior, business ambience',
  // 35
  'VipShuttle24 – Night transfer NRW, premium limousine service',
  // 36
  'VipShuttle24 – Trade fair Düsseldorf transfer, professional shuttle',
  // 37
  'VipShuttle24 – Airport meet and greet, VIP reception service',
  // 38
  'VipShuttle24 – Wedding vehicle NRW, decorated luxury Mercedes',
  // 39
  'VipShuttle24 – Premium chauffeur Cologne, elegant driving service',
  // 40
  'VipShuttle24 – Corporate roadshow limousine, business travel service',
  // 41
  'VipShuttle24 – Luxury interior detail, first-class fittings',

  // 42
  'VipShuttle24 – VIP group ride NRW, premium group transfer',
  // 43
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, new gallery photo',
  // 44
  'VipShuttle24 – Luxury limousine service Düsseldorf, new gallery photo',
  // 45
  'VipShuttle24 – Premium Chauffeur Service NRW, new gallery photo',
];

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string };

/**
 * Only include files that exist.
 * Removed: 27, 30, 31
 * Added: 42, 43, 44, 45
 */
const IMAGE_FILES: string[] = [
  // 1-19
  ...Array.from({ length: 19 }, (_, i) => `${i + 1}.webp`),

  // 20
  '20.jpeg',

  // 21-26
  ...Array.from({ length: 6 }, (_, i) => `${21 + i}.jpg`),

  // 28-29 (27 removed)
  '28.jpg',
  '29.jpg',

  // 32-41 (30/31 removed)
  ...Array.from({ length: 10 }, (_, i) => `${32 + i}.JPG`),

  // 42-45 (assumed .jpg)
  '42.jpg',
  '43.jpg',
  '44.jpg',
  '45.jpg',
];

const buildMedia = (alts: string[], lang: 'de' | 'en'): MediaItem[] => {
  const images: MediaItem[] = IMAGE_FILES.map((file, i) => ({
    type: 'image',
    src: `/${file}`,
    alt: alts[i] ?? `VipShuttle24 – Gallery image ${i + 1}`,
  }));

  const videoAlt =
    lang === 'de'
      ? 'VipShuttle24 – Premium Chauffeur Service Video, Düsseldorf NRW'
      : 'VipShuttle24 – Premium Chauffeur Service Video, Düsseldorf NRW';

  const video: MediaItem = { type: 'video', src: '/video_1.mp4', alt: videoAlt };

  // Keep video as 2nd item (after first image)
  return [images[0], video, ...images.slice(1)];
};

const VideoThumbnail = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <div
    className="group relative overflow-hidden rounded-lg glass-card cursor-pointer"
    style={{ aspectRatio: '4/3' }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-label={label}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
  >
    <video src="/video_1.mp4" className="w-full h-full object-cover" muted playsInline preload="metadata" />
    <div className="absolute inset-0 bg-midnight/50 flex items-center justify-center transition-colors duration-300 group-hover:bg-midnight/30">
      <div className="w-14 h-14 glass-card rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
        <FaPlay className="text-silver text-xl ml-1" aria-hidden="true" />
      </div>
    </div>
  </div>
);

const LightboxVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
      <video
        ref={videoRef}
        src={src}
        className="max-w-full max-h-full rounded-lg object-contain"
        autoPlay
        playsInline
        controls={false}
        style={{ maxHeight: '78vh' }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        <button
          onClick={togglePlay}
          className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <FaPause className="text-silver text-sm" /> : <FaPlay className="text-silver text-sm ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? <FaVolumeMute className="text-silver text-sm" /> : <FaVolumeUp className="text-silver text-sm" />}
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  const { t, lang } = useLang();
  const g = t.gallery;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const media = buildMedia(lang === 'de' ? IMAGE_ALTS_DE : IMAGE_ALTS_EN, lang);

  const INITIAL_COUNT = 6;
  const visibleMedia = expanded ? media : media.slice(0, INITIAL_COUNT);
  const remaining = media.length - INITIAL_COUNT;

  const handlePrev = useCallback(
    () =>
      setSelectedIndex((prev) =>
        prev !== null ? (prev > 0 ? prev - 1 : media.length - 1) : null,
      ),
    [media.length],
  );

  const handleNext = useCallback(
    () =>
      setSelectedIndex((prev) =>
        prev !== null ? (prev < media.length - 1 ? prev + 1 : 0) : null,
      ),
    [media.length],
  );

  const selectedItem = selectedIndex !== null ? media[selectedIndex] : null;

  return (
    <>
      <section
        id="gallery"
        className="py-16 lg:py-28 bg-midnight relative overflow-hidden"
        aria-label={g.sectionLabel}
      >
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-silver/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-platinum/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
            <div className="inline-block px-5 py-2 glass-card mb-5">
              <span className="text-silver text-xs sm:text-sm font-medium tracking-widest uppercase flex items-center gap-2">
                <FaImages className="text-platinum" aria-hidden="true" />
                {g.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4 leading-tight">
              {g.headline1}
              <br />
              {g.headline2}
            </h2>
            <p className="text-silver/70 text-sm sm:text-base lg:text-lg leading-relaxed">{g.subline}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {visibleMedia.map((item, index) =>
              item.type === 'video' ? (
                <div
                  key="video_1"
                  style={{
                    animation: `fadeInGallery 0.4s ease-out ${Math.min(index, 5) * 0.06}s both`,
                  }}
                >
                  <VideoThumbnail onClick={() => setSelectedIndex(index)} label={`${g.openLabel}: ${item.alt}`} />
                </div>
              ) : (
                <div
                  key={item.src}
                  className="group relative overflow-hidden rounded-lg glass-card cursor-pointer"
                  style={{
                    aspectRatio: '4/3',
                    animation: `fadeInGallery 0.4s ease-out ${Math.min(index, 5) * 0.06}s both`,
                  }}
                  onClick={() => setSelectedIndex(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${g.openLabel}: ${item.alt}`}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(index)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < INITIAL_COUNT ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-midnight/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 glass-card rounded-full flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-silver rounded-full" />
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          {media.length > INITIAL_COUNT && (
            <div className="mt-8 sm:mt-10 text-center">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 glass-card text-silver hover:shadow-glow transition-all duration-300 rounded-lg font-medium text-sm sm:text-base group"
                aria-expanded={expanded}
              >
                {expanded ? (
                  <>
                    {g.showLess}
                    <FaChevronDown className="transition-transform duration-300 rotate-180" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    {g.showMore(remaining)}
                    <FaChevronDown
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedIndex !== null && selectedItem !== null && (
        <div
          className="fixed inset-0 bg-midnight/98 backdrop-blur-xl z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={g.counter(selectedIndex + 1, media.length)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.closeLabel}
          >
            <FaTimes className="text-silver" />
          </button>

          <div className="absolute top-3 left-1/2 -translate-x-1/2 glass-card px-3 py-1.5 rounded-full z-10">
            <span className="text-silver text-xs sm:text-sm font-medium">
              {g.counter(selectedIndex + 1, media.length)}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.prevLabel}
          >
            <FaChevronLeft className="text-silver" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.nextLabel}
          >
            <FaChevronRight className="text-silver" />
          </button>

          <div
            className="w-full max-w-5xl flex items-center justify-center mt-10"
            style={{ maxHeight: '78vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
              <LightboxVideo src={selectedItem.src} />
            ) : (
              <div className="relative w-full" style={{ maxHeight: '78vh', aspectRatio: '16/9' }}>
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 1280px) 95vw, 1280px"
                />
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInGallery {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Gallery;
