import { Reveal } from '../Motion';
import { Icon } from '../Icons';
import SectionHeading, { IconBadge } from './SectionHeading';
import { CountUp } from '../Motion';

export default function About({ about, org }) {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-container gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-3xl border border-ink/8 bg-cream-100/70 p-6 md:p-7">
              <p className="font-display text-[22px] leading-snug text-ink">Ногинск, Юбилейная 9</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                Клиника в центре города — рядом с кафе «Визит», несколько минут от основных улиц Ногинска.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/8 pt-5">
                <div>
                  <p className="font-display text-3xl text-ink">
                    <CountUp to={4.25} decimals={2} />
                  </p>
                  <p className="mt-1 text-[12.5px] text-ink-400">рейтинг · Яндекс</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-ink">
                    <CountUp to={58} />
                  </p>
                  <p className="mt-1 text-[12.5px] text-ink-400">отзыва пациентов</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-display text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.3] tracking-tight text-ink">{about.lead}</p>
          </Reveal>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.06 * (i + 1)}>
                <p className="text-[16px] leading-relaxed text-ink-600">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink/8 bg-ink/8 sm:grid-cols-2">
            {about.principles.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i} className="group bg-cream-50 p-6 transition-colors duration-300 hover:bg-cream-100/60">
                <div className="flex items-start gap-4">
                  <IconBadge name={p.icon} />
                  <div>
                    <h3 className="font-display text-[19px] tracking-tight text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-600">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <a
              href={org.hours.emergencyNote ? '#contacts' : '#contacts'}
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-brass-dark"
            >
              <Icon name="calendarCheck" className="h-4 w-4" />
              {org.hours.emergencyNote}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
