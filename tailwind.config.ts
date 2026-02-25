import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0F1419',
          light: '#1A1F2E',
          dark: '#080A0D',
        },
        dusk: {
          DEFAULT: '#1E2A38',
          light: '#2D3E50',
          dark: '#141D28',
        },
        silver: {
          DEFAULT: '#C5CFD6',
          light: '#E8ECEF',
          dark: '#96A3AD',
        },
        platinum: {
          DEFAULT: '#B4BCC4',
          light: '#D4D9DD',
          dark: '#8A959D',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(197, 207, 214, 0.2)',
        'glow-lg': '0 0 40px rgba(197, 207, 214, 0.3)',
        'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(197, 207, 214, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(197, 207, 214, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
