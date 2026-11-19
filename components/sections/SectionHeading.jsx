import { Reveal } from '../Motion';
import { Icon } from '../Icons';

export default function SectionHeading({ eyebrow, title, lead, align = 'left', className = '' }) {
  const centered = align === 'center';
  return (
    <Reveal className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow ? (
        <p className="flex items-center gap-3 text-[11.5px] uppercase tracking-[0.24em] text-brass-dark">
          <span className={`h-px w-8 bg-brass/60 ${centered ? 'hidden' : ''}`} aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-display text-display-l text-ink">{title}</h2>
      {lead ? <p className="mt-5 text-[16.5px] leading-relaxed text-ink-600">{lead}</p> : null}
    </Reveal>
  );
}

export function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-3.5 py-1.5 text-[12px] uppercase tracking-[0.16em] text-ink-400">
      {children}
    </span>
  );
}

export function IconBadge({ name, tone = 'light' }) {
  const tones = {
    light: 'border-ink/10 bg-cream-100 text-ink',
    brass: 'border-brass/25 bg-brass/10 text-brass-dark',
    dark: 'border-cream-50/10 bg-cream-50/5 text-brass-light',
  };
  return (
    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border ${tones[tone]}`}>
      <Icon name={name} className="h-[22px] w-[22px]" />
    </span>
  );
}
