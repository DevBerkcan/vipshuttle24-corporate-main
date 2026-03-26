'use client';

import { useState, useCallback } from 'react';
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaChevronDown,
} from 'react-icons/fa';
import Image from 'next/image';
import { useLang } from '@/i18n/LangContext';

type MediaItem = { type: 'image'; src: string };

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
  '55.jpg',
  '56.jpg',
];

const media: MediaItem[] = IMAGE_FILES.map((file) => ({
  type: 'image',
  src: `/${file}`,
}));

// ── Main Gallery ─────────────────────────────────────────────────────────────
const Gallery = () => {
  const { t } = useLang();
  const g = t.gallery;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const INITIAL_COUNT = 6;
  const visibleMedia = expanded ? media : media.slice(0, INITIAL_COUNT);
  const remaining = media.length - INITIAL_COUNT;

  const handlePrev = useCallback(
    () =>
      setSelectedIndex((prev) =>
        prev !== null ? (prev > 0 ? prev - 1 : media.length - 1) : null,
      ),
    [],
  );

  const handleNext = useCallback(
    () =>
      setSelectedIndex((prev) =>
        prev !== null ? (prev < media.length - 1 ? prev + 1 : 0) : null,
      ),
    [],
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
            <p className="text-silver/70 text-sm sm:text-base lg:text-lg leading-relaxed">
              {g.subline}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {visibleMedia.map((item, index) => (
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
                aria-label={g.openLabel}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(index)}
              >
                <Image
                  src={item.src}
                  alt={`VipShuttle24 – Gallery image ${index + 1}`}
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
            ))}
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
                    <FaChevronDown
                      className="transition-transform duration-300 rotate-180"
                      aria-hidden="true"
                    />
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

      {/* ── Lightbox ── */}
      {selectedIndex !== null && selectedItem !== null && (
        <div
          className="fixed inset-0 bg-midnight/98 backdrop-blur-xl z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={g.counter(selectedIndex + 1, media.length)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.closeLabel}
          >
            <FaTimes className="text-silver" />
          </button>

          {/* Counter */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 glass-card px-3 py-1.5 rounded-full z-10">
            <span className="text-silver text-xs sm:text-sm font-medium">
              {g.counter(selectedIndex + 1, media.length)}
            </span>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.prevLabel}
          >
            <FaChevronLeft className="text-silver" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label={g.nextLabel}
          >
            <FaChevronRight className="text-silver" />
          </button>

          {/* ── Image container ── */}
          <div
            className="w-full max-w-5xl flex items-center justify-center mt-10"
            style={{ height: '78vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full h-full"
              style={{ maxHeight: '78vh' }}
            >
              <Image
                src={selectedItem.src}
                alt={`VipShuttle24 – Gallery image ${selectedIndex + 1}`}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1280px) 95vw, 1280px"
                priority
              />
            </div>
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
