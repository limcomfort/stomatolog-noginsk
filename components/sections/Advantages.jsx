import { Reveal } from '../Motion';
import { Icon } from '../Icons';
import SectionHeading from './SectionHeading';

export default function Advantages({ advantages }) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <SectionHeading eyebrow={advantages.eyebrow} title={advantages.title} />

        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.items.map((a, i) => (
            <Reveal key={a.title} delay={0.05 * i} className="group relative bg-cream-50 p-7 transition-colors duration-500 hover:bg-cream-100/70">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brass/25 bg-brass/[.07] text-brass-dark transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                <Icon name={a.icon} className="h-[22px] w-[22px]" />
              </span>
              <h3 className="mt-5 font-display text-[21px] leading-tight tracking-tight text-ink">{a.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{a.text}</p>
              <span
                aria-hidden
                className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-brass/50 transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
