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
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, Luxusfahrzeug Innenraum',        // 1
  'VipShuttle24 – Airport Transfer Düsseldorf, Mercedes am Flughafen',                   // 2
  'VipShuttle24 – Hochzeitsfahrt NRW, geschmücktes Brautauto',                           // 3
  'VipShuttle24 – Corporate Roadshow NRW, Business Limousine',                           // 4
  'VipShuttle24 – Mercedes S-Klasse, Luxus-Limousine Düsseldorf',                        // 5
  'VipShuttle24 – Mercedes E-Klasse, Business-Limousine NRW',                            // 7
  'VipShuttle24 – Mercedes V-Klasse VIP-Van, Gruppenfahrzeug',                           // 8
  'VipShuttle24 – Chauffeur Service Düsseldorf, eleganter Transfer',                     // 9
  'VipShuttle24 – Stundenweise Buchung, Limousine mit Fahrer',                           // 10
  'VipShuttle24 – VIP-Service NRW, Luxusfahrzeug Außenansicht',                          // 12
  'VipShuttle24 – Premium Chauffeur, gepflegter Mercedes Innenraum',                     // 13
  'VipShuttle24 – Flughafentransfer Köln, professioneller Fahrer',                       // 14
  'VipShuttle24 – Luxus Limousinenservice, schwarzer Mercedes',                          // 17
  'VipShuttle24 – Nachtfahrt Düsseldorf, stilvoller City Transfer',                      // 18
  'VipShuttle24 – Premium Transfer NRW, Chauffeur mit Fahrgast',                         // 19
  'VipShuttle24 – Mercedes S-Klasse Exterieur, Premium Limousine Düsseldorf',            // 20
  'VipShuttle24 – VIP Chauffeur Service, exklusiver Fahrgastraum',                       // 21
  'VipShuttle24 – Business Transfer NRW, professioneller Fahrservice',                   // 22
  'VipShuttle24 – Flughafentransfer Düsseldorf, pünktlicher Abholdienst',                // 23
  'VipShuttle24 – Luxusfahrzeug Detailansicht, premium Ausstattung',                     // 24
  'VipShuttle24 – Mercedes V-Klasse Innenraum, VIP Gruppenfahrzeug NRW',                 // 25
  'VipShuttle24 – Hochzeitsfahrt Düsseldorf, elegante Brautwagenfahrt',                  // 26
  'VipShuttle24 – Premium Fahrdienst, schwarzer Mercedes Exterieur',                     // 28
  'VipShuttle24 – Chauffeur Düsseldorf, stilvoller Abendtransfer',                       // 29
  'VipShuttle24 – Messe Düsseldorf Transfer, professioneller Shuttle',                   // 33
  'VipShuttle24 – Flughafen Meet and Greet, VIP Empfangsservice',                        // 34
  'VipShuttle24 – Corporate Roadshow Limousine, Geschäftsreise Service',                 // 37
  'VipShuttle24 – Luxus Innenraum Detail, erstklassige Ausstattung',                     // 38
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, neues Galerie-Foto',             // 41
  'VipShuttle24 – Premium Chauffeur Service NRW, neues Galerie-Foto',                    // 43
  'VipShuttle24 – Mercedes S-Klasse Medienhafen Düsseldorf, Premium Chauffeur',          // 44
  'VipShuttle24 – Luxusfahrzeug Düsseldorf, exklusiver Chauffeur Service',               // 45
  'VipShuttle24 – VIP Chauffeur NRW, schwarzer Mercedes Exterieur',                      // 47
  'VipShuttle24 – Exklusiver Fahrdienst NRW, Premium Mercedes',                          // 49
  'VipShuttle24 – Chauffeur Service NRW, stilvoller Luxustransfer',                      // 50
  'VipShuttle24 – Premium Fahrzeug Düsseldorf, VIP Limousinenservice',                   // 51
  'VipShuttle24 – Luxus Chauffeur Düsseldorf, erstklassiger Transfer',                   // 52
  'VipShuttle24 – VIP Transfer NRW, exklusiver Mercedes Service',                        // 53
  'VipShuttle24 – Premium Limousinenservice Düsseldorf, eleganter Fahrdienst',           // 55
  'VipShuttle24 – Exklusiver Chauffeur NRW, Premium Transfer Service',                   // 56
];

const IMAGE_ALTS_EN = [
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, luxury vehicle interior',        // 1
  'VipShuttle24 – Airport Transfer Düsseldorf, Mercedes at the airport',                 // 2
  'VipShuttle24 – Wedding Ride NRW, decorated bridal car',                               // 3
  'VipShuttle24 – Corporate Roadshow NRW, business limousine',                           // 4
  'VipShuttle24 – Mercedes S-Class, luxury sedan Düsseldorf',                            // 5
  'VipShuttle24 – Mercedes E-Class, business sedan NRW',                                 // 7
  'VipShuttle24 – Mercedes V-Class VIP van, group vehicle',                              // 8
  'VipShuttle24 – Chauffeur Service Düsseldorf, elegant transfer',                       // 9
  'VipShuttle24 – Hourly booking, limousine with driver',                                // 10
  'VipShuttle24 – VIP Service NRW, luxury vehicle exterior',                             // 12
  'VipShuttle24 – Premium chauffeur, maintained Mercedes interior',                      // 13
  'VipShuttle24 – Airport transfer Cologne, professional driver',                        // 14
  'VipShuttle24 – Luxury limousine service, black Mercedes',                             // 17
  'VipShuttle24 – Night ride Düsseldorf, stylish city transfer',                         // 18
  'VipShuttle24 – Premium transfer NRW, chauffeur with passenger',                       // 19
  'VipShuttle24 – Mercedes S-Class exterior, premium sedan Düsseldorf',                  // 20
  'VipShuttle24 – VIP chauffeur service, exclusive passenger cabin',                     // 21
  'VipShuttle24 – Business transfer NRW, professional driving service',                  // 22
  'VipShuttle24 – Airport transfer Düsseldorf, punctual pick-up service',                // 23
  'VipShuttle24 – Luxury vehicle detail view, premium interior',                         // 24
  'VipShuttle24 – Mercedes V-Class interior, VIP group vehicle NRW',                     // 25
  'VipShuttle24 – Wedding ride Düsseldorf, elegant bridal car journey',                  // 26
  'VipShuttle24 – Premium driving service, black Mercedes exterior',                     // 28
  'VipShuttle24 – Chauffeur Düsseldorf, stylish evening transfer',                       // 29
  'VipShuttle24 – Trade fair Düsseldorf transfer, professional shuttle',                 // 33
  'VipShuttle24 – Airport meet and greet, VIP reception service',                        // 34
  'VipShuttle24 – Corporate roadshow limousine, business travel service',                // 37
  'VipShuttle24 – Luxury interior detail, first-class fittings',                         // 38
  'VipShuttle24 – Premium Chauffeur Service Düsseldorf, new gallery photo',              // 41
  'VipShuttle24 – Premium Chauffeur Service NRW, new gallery photo',                     // 43
  'VipShuttle24 – Mercedes S-Class Medienhafen Düsseldorf, premium chauffeur',           // 44
  'VipShuttle24 – Luxury vehicle Düsseldorf, exclusive chauffeur service',               // 45
  'VipShuttle24 – VIP chauffeur NRW, black Mercedes exterior',                           // 47
  'VipShuttle24 – Exclusive driving service NRW, premium Mercedes',                      // 49
  'VipShuttle24 – Chauffeur service NRW, stylish luxury transfer',                       // 50
  'VipShuttle24 – Premium vehicle Düsseldorf, VIP limousine service',                    // 51
  'VipShuttle24 – Luxury chauffeur Düsseldorf, first-class transfer',                    // 52
  'VipShuttle24 – VIP transfer NRW, exclusive Mercedes service',                         // 53
  'VipShuttle24 – Premium limousine service Düsseldorf, elegant driving',                // 55
  'VipShuttle24 – Exclusive chauffeur NRW, premium transfer service',                    // 56
];

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string };

// ── Exact files that exist in /public ────────────────────────────────────────
const IMAGE_FILES: string[] = [
  '1.webp',
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp',
  '7.webp',
  '8.webp',
  '9.webp',
  '10.webp',
  '12.webp',
  '13.webp',
  '14.webp',
  '17.webp',
  '18.webp',
  '19.webp',
  '20.jpeg',
  '21.jpg',
  '22.jpg',
  '23.jpg',
  '24.jpg',
  '25.jpg',
  '26.jpg',
  '28.jpg',
  '29.jpg',
  '33.JPG',
  '34.JPG',
  '37.JPG',
  '38.JPG',
  '41.JPG',
  '43.jpg',
  '44.jpg',
  '45.jpg',
  '47.jpg',
  '49.jpg',
  '50.jpg',
  '51.jpg',
  '52.jpg',
  '53.jpg',
  '55.jpg',
  '56.jpg',
];

const buildMedia = (alts: string[], lang: 'de' | 'en'): MediaItem[] => {
  const images: MediaItem[] = IMAGE_FILES.map((file, i) => ({
    type: 'image',
    src: `/${file}`,
    alt: alts[i] ?? `VipShuttle24 – Gallery image ${i + 1}`,
  }));


  return [images[0], ...images.slice(1)];
};

// ── Video thumbnail ──────────────────────────────────────────────────────────
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
    {/*
      FIX: Vercel / production video issue.
      - Removed <video> thumbnail preview — Vercel's CDN serves .mp4 without
        the byte-range headers needed for <video> preload/poster on cold load.
      - Replaced with a static placeholder so the thumbnail always renders.
      - The actual video only loads inside the lightbox on user click.
    */}
    <div className="w-full h-full bg-gradient-to-br from-midnight to-silver/10 flex items-center justify-center">
      <div className="w-14 h-14 glass-card rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
        <FaPlay className="text-silver text-xl ml-1" aria-hidden="true" />
      </div>
    </div>
  </div>
);

// ── Lightbox video ───────────────────────────────────────────────────────────
const LightboxVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false); // FIX: start as false, wait for canplay
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
        /*
          FIX: Do NOT use autoPlay on Vercel — browsers block autoplay unless
          muted, and Vercel's CDN may not support byte-range requests needed
          for seamless autoplay. Instead we use onCanPlay to start playback
          once the browser signals it has enough data.
        */
        autoPlay={false}
        playsInline
        muted={false}
        preload="auto"
        controls={false}
        style={{ maxHeight: '78vh' }}
        onCanPlay={() => {
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().then(() => setPlaying(true)).catch(() => {});
          }
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
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

// ── Main Gallery ─────────────────────────────────────────────────────────────
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
    () => setSelectedIndex((prev) => (prev !== null ? (prev > 0 ? prev - 1 : media.length - 1) : null)),
    [media.length],
  );

  const handleNext = useCallback(
    () => setSelectedIndex((prev) => (prev !== null ? (prev < media.length - 1 ? prev + 1 : 0) : null)),
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
                  style={{ animation: `fadeInGallery 0.4s ease-out ${Math.min(index, 5) * 0.06}s both` }}
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
                    <FaChevronDown className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
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
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.prevLabel}
          >
            <FaChevronLeft className="text-silver" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
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
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Gallery;
