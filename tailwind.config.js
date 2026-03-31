/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5bbfd',
          400: '#8196fb',
          500: '#6272f5',
          600: '#4f52ea',
          700: '#4240cf',
          800: '#3636a7',
          900: '#303284',
        },
        accent: {
          yellow: '#fbbf24',
          green:  '#34d399',
          red:    '#f87171',
          purple: '#a78bfa',
          cyan:   '#22d3ee',
        },
        dark: {
          900: '#0a0a0f',
          800: '#111118',
          700: '#1a1a26',
          600: '#22223a',
          500: '#2d2d4a',
        },
      },
      animation: {
        'fade-in':      'fadeIn 0.4s ease-out',
        'slide-up':     'slideUp 0.4s cubic-bezier(0.16,1,0.3,1)',
        'slide-in-right': 'slideInRight 0.35s cubic-bezier(0.16,1,0.3,1)',
        'pulse-slow':   'pulse 3s ease-in-out infinite',
        'glow':         'glow 2s ease-in-out infinite alternate',
        'float':        'float 3s ease-in-out infinite',
        'price-pop':    'pricePop 0.5s cubic-bezier(0.34,1.56,0.64,1)',
      },
      keyframes: {
        fadeIn:       { from: { opacity: '0' },                   to: { opacity: '1' } },
        slideUp:      { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { from: { opacity: '0', transform: 'translateX(30px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        glow:         { from: { boxShadow: '0 0 5px rgba(98,114,245,0.3)' }, to: { boxShadow: '0 0 20px rgba(98,114,245,0.7), 0 0 40px rgba(98,114,245,0.3)' } },
        float:        { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        pricePop:     { '0%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.12)' }, '100%': { transform: 'scale(1)' } },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
};
