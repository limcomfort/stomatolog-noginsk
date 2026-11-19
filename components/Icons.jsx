/* Свои SVG-иконки в стиле линейных наборов (Phosphor/Lucide). Без эмодзи. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

export const icons = {
  tooth: (p) => (
    <svg {...base} {...p}>
      <path d="M7.2 3.6c1.4-.7 2.4-.1 4.8-.1s3.4-.6 4.8.1c1.9.9 2.4 3 1.7 5.6-.5 1.7-.7 2.6-.8 4.2-.1 2.4-.3 5-1.6 6.4-.9 1-2 .4-2.3-1l-.7-3.4c-.2-1-.7-1.5-1.1-1.5s-.9.5-1.1 1.5l-.7 3.4c-.3 1.4-1.4 2-2.3 1-1.3-1.4-1.5-4-1.6-6.4-.1-1.6-.3-2.5-.8-4.2-.7-2.6-.2-4.7 1.7-5.6Z" />
    </svg>
  ),
  crown: (p) => (
    <svg {...base} {...p}>
      <path d="M3 8.5l3.6 2.4L12 5l5.4 5.9L21 8.5l-1.6 9.1a1.5 1.5 0 0 1-1.5 1.2H6.1a1.5 1.5 0 0 1-1.5-1.2L3 8.5Z" />
      <path d="M4.2 14.5h15.6" />
    </svg>
  ),
  scalpel: (p) => (
    <svg {...base} {...p}>
      <path d="M14 4.5l5.5 5.5-7 7H8.8v-3.7l5.2-8.8Z" />
      <path d="M8.8 17L4 21.8" />
      <path d="M6 16.5l1.5 1.5" />
    </svg>
  ),
  drop: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3.2s6 6.1 6 10.2a6 6 0 0 1-12 0C6 9.3 12 3.2 12 3.2Z" />
      <path d="M9.6 13.6a2.6 2.6 0 0 0 2.4 2.7" />
    </svg>
  ),
  shieldCheck: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3.2l7 2.6v5.4c0 4.4-3 7.6-7 9.6-4-2-7-5.2-7-9.6V5.8l7-2.6Z" />
      <path d="M8.9 12l2.2 2.2 4-4.2" />
    </svg>
  ),
  clock: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4V12l3 1.9" />
    </svg>
  ),
  handHeart: (p) => (
    <svg {...base} {...p}>
      <path d="M12.6 10.2l-.6.7-.6-.7a1.9 1.9 0 0 1 2.9-2.4l.3.3.3-.3a1.9 1.9 0 0 1 2.9 2.4l-2.6 2.8a.4.4 0 0 1-.6 0l-2-2.8Z" />
      <path d="M4 13.5h1.8v6H4z" />
      <path d="M5.8 19.5h8.1a2 2 0 0 0 1.6-.8l3.5-4.2" />
      <path d="M7.6 15.5l3.2 2h3" />
    </svg>
  ),
  sparkle: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3.4l1.7 4.8 4.8 1.7-4.8 1.7L12 16.4l-1.7-4.8L5.5 9.9l4.8-1.7L12 3.4Z" />
      <path d="M18.6 15.2l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  ),
  calendarCheck: (p) => (
    <svg {...base} {...p}>
      <rect x="3.6" y="5.4" width="16.8" height="15" rx="2.4" />
      <path d="M3.6 10h16.8M8 3.4v3.6M16 3.4v3.6" />
      <path d="M9 14.6l2.1 2.1 4-4.1" />
    </svg>
  ),
  layers: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3.4l8.4 4.4L12 12.2 3.6 7.8 12 3.4Z" />
      <path d="M3.6 12.2L12 16.6l8.4-4.4" />
      <path d="M3.6 16.4L12 20.8l8.4-4.4" />
    </svg>
  ),
  chat: (p) => (
    <svg {...base} {...p}>
      <path d="M20.4 11.6c0 4.1-3.8 7.4-8.4 7.4-1 0-2-.1-2.9-.4L4 20l1.1-3.4a7 7 0 0 1-1.5-4.4c0-4.1 3.8-7.4 8.4-7.4s8.4 3.3 8.4 6.8Z" />
      <path d="M8.8 11.6h.01M12 11.6h.01M15.2 11.6h.01" />
    </svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}>
      <path d="M8.2 3.8H5.4c-.9 0-1.6.8-1.5 1.7.5 7.9 6.7 14.1 14.6 14.6.9.1 1.7-.6 1.7-1.5v-2.8c0-.7-.5-1.3-1.2-1.4l-2.6-.5c-.6-.1-1.2.1-1.6.6l-.9 1.1a12.4 12.4 0 0 1-5.4-5.4l1.1-.9c.5-.4.7-1 .6-1.6l-.5-2.6c-.1-.7-.7-1.2-1.4-1.2Z" />
    </svg>
  ),
  arrowUpRight: (p) => (
    <svg {...base} {...p}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  ),
  arrowRight: (p) => (
    <svg {...base} {...p}>
      <path d="M4 12h15M13.5 6.5L20 12l-6.5 5.5" />
    </svg>
  ),
  menu: (p) => (
    <svg {...base} {...p}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  ),
  close: (p) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  star: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 3.6l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.9l6-.8L12 3.6Z" />
    </svg>
  ),
  quote: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M9.4 5.6c-3.3 1.5-5.4 4.3-5.4 8v4.8h6.3v-6.3H7.2c.1-2 1.2-3.6 3.2-4.5L9.4 5.6Zm9.4 0c-3.3 1.5-5.4 4.3-5.4 8v4.8h6.3v-6.3h-3.1c.1-2 1.2-3.6 3.2-4.5l-1-2Z" />
    </svg>
  ),
};

export function Icon({ name, className = 'h-5 w-5', ...rest }) {
  const C = icons[name] ?? icons.sparkle;
  return <C className={className} {...rest} />;
}
