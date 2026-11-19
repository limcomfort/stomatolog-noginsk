/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Clinical Luxe
        cream: {
          50: '#FCFAF5',
          100: '#F7F3EA',
          200: '#EFE8DA',
          300: '#E2D7C3',
        },
        ink: {
          DEFAULT: '#12211C', // глубокий графитово-зелёный
          800: '#1B322B',
          600: '#2C463D',
          400: '#5B6F67',
          300: '#849691',
        },
        brass: {
          DEFAULT: '#B08850',
          light: '#D9BE92',
          dark: '#8C6A3A',
        },
        sage: {
          100: '#E6ECE7',
          200: '#CBDACF',
        },
        danger: '#B4483C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6.2vw, 5.75rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-l': ['clamp(2.25rem, 4.4vw, 4rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'display-m': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
      },
      maxWidth: { container: '1240px' },
      borderRadius: { '4xl': '2rem', '5xl': '2.75rem' },
      boxShadow: {
        card: '0 1px 2px rgba(18,33,28,.04), 0 12px 40px -12px rgba(18,33,28,.10)',
        lift: '0 2px 4px rgba(18,33,28,.04), 0 24px 60px -20px rgba(18,33,28,.22)',
        ring: '0 0 0 1px rgba(18,33,28,.06)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(.22,1,.36,1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: { marquee: 'marquee 38s linear infinite' },
    },
  },
  plugins: [],
};
