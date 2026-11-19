import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../Motion';
import { Icon } from '../Icons';
import SectionHeading from './SectionHeading';

export default function Gallery({ clinic }) {
  const photos = clinic.organization.photos || [];
  const [active, setActive] = useState(null);
  if (!photos.length) return null;

  const [lead, ...rest] = photos;

  return (
    <section id="gallery" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Фотографии" title="Клиника вживую" lead="Снимки с карточки организации: фасад, вход и вывеска с графиком работы." />
          <Reveal delay={0.1}>
            <a
              href={clinic.organization.social.yandex}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-brass-dark"
            >
              Все фото на Яндекс.Картах
              <Icon name="arrowUpRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {/* Крупное фото */}
          <Reveal className="md:col-span-7">
            <button
              type="button"
              onClick={() => setActive(0)}
              className="group relative block w-full overflow-hidden rounded-[1.75rem] ring-1 ring-ink/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              <img
                src={lead.src}
                srcSet={lead.srcSet}
                sizes="(max-width: 768px) 100vw, 58vw"
                alt={lead.alt}
                width={lead.width}
                height={lead.height}
                loading="lazy"
                decoding="async"
                className="aspect-[16/11] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-16">
                <span className="text-left font-display text-[19px] text-cream-50">{lead.caption}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cream-50/25 text-cream-50 transition-colors group-hover:bg-cream-50/10">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
                    <path d="M11 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM15 15l4 4M11 9v4M9 11h4" />
                  </svg>
                </span>
              </span>
            </button>
          </Reveal>

          {/* Сетка миниатюр */}
          <div className="grid gap-4 sm:grid-cols-3 md:col-span-5 md:grid-cols-1">
            {rest.slice(0, 2).map((p, i) => (
              <Reveal key={p.src} delay={0.06 * (i + 1)}>
                <button
                  type="button"
                  onClick={() => setActive(i + 1)}
                  className="group relative block w-full overflow-hidden rounded-[1.5rem] ring-1 ring-ink/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                >
                  <img
                    src={p.src}
                    srcSet={p.srcSet}
                    sizes="(max-width: 768px) 33vw, 34vw"
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-4 pt-12 text-left text-[13.5px] text-cream-50">
                    {p.caption}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Лайтбокс */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/92 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={photos[active]?.caption}
          >
            <motion.img
              key={active}
              src={photos[active].src}
              alt={photos[active].alt}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-lift"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Закрыть"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-cream-50/20 text-cream-50 transition-colors hover:bg-cream-50/10"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[13.5px] text-cream-200/70">
              {photos[active].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
