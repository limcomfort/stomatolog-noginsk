import { Reveal } from '../Motion';
import { Icon } from '../Icons';
import SectionHeading from './SectionHeading';

function Stars({ value }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${value} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className={`h-3.5 w-3.5 ${i < value ? 'text-brass' : 'text-ink/15'}`} />
      ))}
    </span>
  );
}

const fmt = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Reviews({ reviews }) {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink py-20 text-cream-200 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-brass/[.08] blur-3xl"
      />
      <div className="relative mx-auto max-w-container px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-[11.5px] uppercase tracking-[0.24em] text-brass-light">
              <span className="h-px w-8 bg-brass/60" aria-hidden />
              {reviews.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-display-l text-cream-50">{reviews.title}</h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-cream-200/60">{reviews.lead}</p>
          </div>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-5 rounded-3xl border border-cream-50/10 bg-cream-50/[.04] px-6 py-5 backdrop-blur-sm">
              <div>
                <p className="font-display text-5xl leading-none text-cream-50">4,25</p>
                <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-cream-200/60">{reviews.summary.label}</p>
              </div>
              <div className="h-14 w-px bg-cream-50/10" aria-hidden />
              <div>
                <Stars value={5} />
                <p className="mt-2 text-[13px] text-cream-200/60">{reviews.summary.count} отзывов всего</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.items.map((r, i) => (
            <Reveal key={r.author} delay={0.06 * i} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-cream-50/10 bg-cream-50/[.03] p-7 transition-colors duration-500 hover:border-cream-50/20 hover:bg-cream-50/[.06]">
                <Icon name="quote" className="h-7 w-7 text-brass/50" />
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-cream-200/85">{r.text}</blockquote>
                <figcaption className="mt-7 flex items-center justify-between gap-4 border-t border-cream-50/10 pt-5">
                  <div>
                    <p className="text-[15px] font-medium text-cream-50">{r.author}</p>
                    <p className="text-[12px] text-cream-200/60">{r.role}</p>
                  </div>
                  <div className="text-right">
                    <Stars value={r.rating} />
                    <p className="mt-1.5 text-[11.5px] text-cream-200/60">{fmt.format(new Date(r.date))}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
