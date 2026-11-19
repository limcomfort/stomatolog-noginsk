import { Reveal } from '../Motion';
import SectionHeading, { SectionLabel } from './SectionHeading';

function Avatar({ initials, index }) {
  const tones = ['bg-ink text-brass-light', 'bg-sage-200 text-ink-800', 'bg-brass/15 text-brass-dark'];
  return (
    <div className={`relative grid h-full w-full place-items-center ${tones[index % tones.length]}`}>
      <svg className="absolute inset-0 h-full w-full opacity-[.07]" viewBox="0 0 200 240" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx="160" cy="200" r={40 + i * 34} fill="none" stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>
      <span className="font-display text-[64px] leading-none tracking-tight">{initials}</span>
    </div>
  );
}

export default function Doctors({ doctors }) {
  return (
    <section id="doctors" className="relative bg-cream-100/60 py-20 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow={doctors.eyebrow} title={doctors.title} lead={doctors.lead} />
          <Reveal delay={0.1} className="shrink-0">
            <SectionLabel>Демо-состав · подтвердите в клинике</SectionLabel>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {doctors.items.map((d, i) => (
            <Reveal key={`${d.name}-${i}`} delay={0.05 * i} className="h-full">
              <article className="group h-full overflow-hidden rounded-3xl border border-ink/8 bg-cream-50 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-card">
                <div className="aspect-[5/4] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]">
                    <Avatar initials={d.initials} index={i} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-[24px] leading-tight text-ink">{d.name}</h3>
                    <span className="rounded-full border border-ink/10 px-2.5 py-1 text-[10.5px] uppercase tracking-[0.14em] text-ink-400">
                      {d.credentials}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[14px] text-ink-600">{d.role}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {d.focus.map((f) => (
                      <li key={f} className="rounded-full bg-sage-100 px-3 py-1 text-[12px] text-ink-800">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-ink/8 pt-4 text-[13px] leading-relaxed text-ink-400">{d.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
