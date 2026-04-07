'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLang } from '@/i18n/LangContext';
import { switchLocalePath } from '@/i18n/config';

export default function LangSwitcher() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (targetLang: 'de' | 'en') => {
    if (targetLang === lang) {
      return;
    }

    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    setLang(targetLang);
    router.push(`${switchLocalePath(pathname, targetLang)}${hash}`);
  };

  return (
    <div
      className="flex items-center gap-0.5 glass-card rounded-lg p-1"
      role="group"
      aria-label="Language switcher"
    >
      <button
        onClick={() => handleSwitch('de')}
        className={`relative px-3 py-1.5 rounded-md text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
          lang === 'de'
            ? 'bg-gradient-to-br from-silver/30 to-platinum/20 text-silver shadow-glow'
            : 'text-silver/40 hover:text-silver/70'
        }`}
        aria-pressed={lang === 'de'}
        aria-label="Deutsch"
      >
        DE
      </button>
      <span className="w-px h-3 bg-silver/20" aria-hidden="true" />
      <button
        onClick={() => handleSwitch('en')}
        className={`relative px-3 py-1.5 rounded-md text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
          lang === 'en'
            ? 'bg-gradient-to-br from-silver/30 to-platinum/20 text-silver shadow-glow'
            : 'text-silver/40 hover:text-silver/70'
        }`}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
