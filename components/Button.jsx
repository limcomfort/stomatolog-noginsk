import Link from 'next/link';

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 active:scale-[.98] motion-reduce:transition-none';

const variants = {
  primary:
    'bg-ink text-cream-50 px-7 py-4 text-[15px] shadow-[0_1px_0_rgba(255,255,255,.12)_inset,0_10px_28px_-12px_rgba(18,33,28,.55)] hover:bg-ink-800 hover:shadow-[0_1px_0_rgba(255,255,255,.16)_inset,0_16px_36px_-12px_rgba(18,33,28,.6)] hover:-translate-y-0.5',
  brass:
    'bg-brass text-ink px-7 py-4 text-[15px] shadow-[0_1px_0_rgba(255,255,255,.28)_inset,0_10px_28px_-14px_rgba(140,106,58,.7)] hover:bg-brass-light hover:-translate-y-0.5',
  outline:
    'border border-ink/15 bg-transparent text-ink px-7 py-4 text-[15px] hover:border-ink/40 hover:bg-ink/[.03] hover:-translate-y-0.5',
  light:
    'bg-cream-50 text-ink px-7 py-4 text-[15px] shadow-card hover:bg-white hover:-translate-y-0.5',
  ghost: 'text-ink px-4 py-2 text-[14px] hover:bg-ink/[.04]',
};

export default function Button({ href = '#', variant = 'primary', className = '', children, icon, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">{icon}</span> : null}
    </>
  );

  if (href.startsWith('#')) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
