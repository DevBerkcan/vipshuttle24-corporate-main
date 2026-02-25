'use client';

import { useLang } from '@/i18n/LangContext';

const Hero = () => {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="VipShuttle24 – Premium Chauffeur Service Düsseldorf"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover"
          poster="/11.webp" aria-hidden="true" title="VipShuttle24 Premium Chauffeur Service Düsseldorf">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-silver rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-silver-light rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-platinum rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          <div className="animate-fade-in">
            <div className="inline-block px-5 py-2 glass-card">
              <span className="text-silver text-xs sm:text-sm font-medium tracking-widest uppercase">{h.badge}</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient leading-tight animate-slide-up px-2">
            {h.headline1}<br />{h.headline2}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-silver/80 max-w-2xl mx-auto leading-relaxed animate-fade-in px-2" style={{ animationDelay: '0.2s' }}>
            {h.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 animate-slide-up px-2" style={{ animationDelay: '0.4s' }}>
            <a href="#booking" className="btn-primary w-full sm:w-auto min-w-[200px] text-center" aria-label={h.cta1Label}>{h.cta1}</a>
            <a href="#services" className="btn-secondary w-full sm:w-auto min-w-[200px] text-center" aria-label={h.cta2Label}>{h.cta2}</a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }} role="list" aria-label={h.statsAriaLabel}>
            <div className="text-center group" role="listitem">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient mb-1 group-hover:scale-110 transition-transform duration-300">{h.stat1Value}</div>
              <div className="text-silver/60 text-xs sm:text-sm">{h.stat1Label}</div>
            </div>
            <div className="text-center group border-x border-silver/10" role="listitem">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient mb-1 group-hover:scale-110 transition-transform duration-300">{h.stat2Value}</div>
              <div className="text-silver/60 text-xs sm:text-sm">{h.stat2Label}</div>
            </div>
            <div className="text-center group" role="listitem">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient mb-1 group-hover:scale-110 transition-transform duration-300">{h.stat3Value}</div>
              <div className="text-silver/60 text-xs sm:text-sm">{h.stat3Label}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
