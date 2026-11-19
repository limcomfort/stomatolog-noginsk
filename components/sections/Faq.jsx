import { useState } from 'react';
import { Reveal } from '../Motion';
import { Icon } from '../Icons';
import SectionHeading from './SectionHeading';

const FAQ_JSON = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});

export default function Faq({ faq }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON(faq.items)) }} />
      <div className="mx-auto grid max-w-container gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
          <Reveal delay={0.1}>
            <p className="mt-6 text-[14.5px] leading-relaxed text-ink-600">
              Не нашли ответ? Позвоните — администратор уточнит всё по телефону.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-ink/8 border-y border-ink/8">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className={`font-display text-[clamp(1.1rem,1.7vw,1.45rem)] leading-snug tracking-tight transition-colors duration-300 ${isOpen ? 'text-brass-dark' : 'text-ink group-hover:text-brass-dark'}`}>
                        {item.q}
                      </span>
                      <span className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-out ${isOpen ? 'rotate-45 border-brass/40 bg-brass/10 text-brass-dark' : 'border-ink/12 text-ink-400 group-hover:border-ink/25'}`}>
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pr-12 text-[15px] leading-relaxed text-ink-600">{item.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
