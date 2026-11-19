import { Reveal } from '../Motion';
import { Icon } from '../Icons';
import SectionHeading from './SectionHeading';

function ServiceCard({ group, index }) {
  return (
    <Reveal delay={0.04 * index} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-cream-50 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-ink/15 hover:shadow-card md:p-7">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brass/[.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-brass-light transition-transform duration-500 ease-out group-hover:rotate-[-5deg]">
            <Icon name={group.icon} className="h-[22px] w-[22px]" />
          </span>
          <span className="font-display text-[15px] tabular-nums text-ink/25">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="mt-5 font-display text-[24px] leading-tight tracking-tight text-ink">{group.title}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{group.summary}</p>

        <ul className="mt-6 space-y-3 border-t border-ink/8 pt-5">
          {group.items.map((item) => (
            <li key={item.title} className="flex items-baseline justify-between gap-4 text-[14px]">
              <span className="text-ink-600">{item.title}</span>
              <span className="whitespace-nowrap font-medium tabular-nums text-ink">{item.price}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contacts"
          className="mt-6 inline-flex items-center gap-2 self-start text-[13.5px] font-medium text-brass-dark transition-colors hover:text-ink"
        >
          Записаться
          <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </article>
    </Reveal>
  );
}

export default function Services({ services }) {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow={services.eyebrow} title={services.title} lead={services.lead} />
          <Reveal delay={0.1} className="shrink-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-brass/25 bg-brass/[.07] px-4 py-2.5 text-[12.5px] text-brass-dark">
              <Icon name="shieldCheck" className="h-4 w-4" />
              Цены — демо, уточняйте в клинике
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.groups.map((g, i) => (
            <ServiceCard key={g.slug} group={g} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-ink px-7 py-8 md:flex-row md:items-center md:px-10">
            <div>
              <p className="font-display text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight text-cream-50">
                Не уверены, какое лечение нужно?
              </p>
              <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-cream-200/65">
                Начните с консультации: врач осмотрит зубы, предложит план и назовёт стоимость до начала лечения.
              </p>
            </div>
            <a
              href={services.cta.href}
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-brass px-7 py-4 text-[15px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-light active:scale-[.98]"
            >
              {services.cta.label}
              <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
