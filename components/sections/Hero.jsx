import { motion, useReducedMotion } from 'framer-motion';
import Button from '../Button';
import { Icon } from '../Icons';
import { CountUp } from '../Motion';

const ease = [0.22, 1, 0.36, 1];

function StarRating({ value = 4.25, label }) {
  return (
    <span className="inline-flex items-center gap-1" role="img" aria-label={`Рейтинг ${String(value).replace('.', ',')} из 5, ${label}`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block h-3.5 w-3.5 text-ink/15">
            <Icon name="star" className="absolute inset-0 h-3.5 w-3.5" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Icon name="star" className="h-3.5 w-3.5 text-brass" />
            </span>
          </span>
        );
      })}
    </span>
  );
}

function HeroArt({ org }) {
  const reduce = useReducedMotion();
  const photo = org.photos?.[0];
  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-ink shadow-lift sm:aspect-[5/6] lg:aspect-[4/4.4]">
        {/* реальное фото клиники */}
        {photo ? (
          <img
            src={photo.src}
            srcSet={photo.srcSet}
            sizes="(max-width: 1024px) 100vw, 45vw"
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            fetchpriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full scale-[1.02] object-cover"
          />
        ) : null}

        {/* тонировка под палитру + градиент для читаемости подписей */}
        <div aria-hidden className="absolute inset-0 bg-ink/35 mix-blend-multiply" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
        <div
          aria-hidden
          className="absolute inset-0 ring-1 ring-inset ring-cream-50/10"
          style={{ borderRadius: '2.25rem' }}
        />

        {/* карточка рейтинга */}
        <motion.div
          className="absolute left-4 top-4 rounded-2xl border border-cream-50/15 bg-ink/55 px-4 py-3 backdrop-blur-md sm:left-6 sm:top-6"
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl leading-none text-cream-50">4,25</span>
            <StarRating label="58 отзывов" />
          </div>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-cream-200/65">58 отзывов · Яндекс</p>
        </motion.div>

        {/* плашка «острая боль» */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-cream-50/12 bg-ink/75 px-4 py-3.5 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
        >
          <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass/20 text-brass-light">
            <span className="absolute inset-0 animate-ping rounded-full bg-brass/10 motion-reduce:hidden" />
            <Icon name="clock" className="h-4.5 w-4.5" />
          </span>
          <p className="text-[13.5px] leading-snug text-cream-200/90">
            <span className="text-cream-50">Острая боль?</span> Принимаем в день обращения
          </p>
        </motion.div>
      </div>

      <div aria-hidden className="absolute -left-5 -top-5 -z-10 h-32 w-32 rounded-full bg-sage-200/60 blur-2xl" />
      <div aria-hidden className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-brass/15 blur-3xl" />
    </div>
  );
}

export default function Hero({ org, reviews }) {
  const reduce = useReducedMotion();
  const item = {
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease },
  };

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-[104px] md:pb-24 md:pt-[128px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(70%_60%_at_15%_0%,#EFE8DA_0%,rgba(247,243,234,0)_70%)]"
      />
      <div className="mx-auto grid max-w-container items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <div>
          <motion.p {...item} transition={{ ...item.transition, delay: 0.05 }} className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-cream-50/70 px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-ink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            {org.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...item}
            transition={{ ...item.transition, delay: 0.12 }}
            className="mt-7 max-w-[16ch] font-display text-display-xl text-ink"
          >
            Улыбка на годы, а не&nbsp;
            <span className="relative inline-block italic text-brass-dark">
              до отпуска
              <svg
                aria-hidden
                viewBox="0 0 300 14"
                className="absolute -bottom-1 left-0 w-full text-brass/60"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 9c48-6 96-8 148-6 52 2 100 6 148 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.9, ease }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p {...item} transition={{ ...item.transition, delay: 0.2 }} className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-600 md:text-[18px]">
            {org.hero.subtitle}
          </motion.p>

          <motion.div {...item} transition={{ ...item.transition, delay: 0.28 }} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={org.hero.primaryCta.href} variant="primary" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
              {org.hero.primaryCta.label}
            </Button>
            <Button href={org.hero.secondaryCta.href} variant="outline">
              {org.hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.a
            {...item}
            transition={{ ...item.transition, delay: 0.36 }}
            href={org.phone.href}
            className="mt-8 inline-flex items-center gap-3 text-ink transition-colors hover:text-brass-dark"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/12">
              <Icon name="phone" className="h-[18px] w-[18px]" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl">{org.phone.display}</span>
              <span className="block text-[12.5px] text-ink-400">{org.hours.short}</span>
            </span>
          </motion.a>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease }}
        >
          <HeroArt org={org} />
        </motion.div>
      </div>

      {/* Полоса фактов */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease }}
        className="mx-auto mt-16 max-w-container px-5 md:mt-24 md:px-8"
      >
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/8 bg-ink/8 md:grid-cols-4">
          <div className="bg-cream-50 px-5 py-6 md:px-7 md:py-7">
            <dt className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Рейтинг</dt>
            <dd className="mt-2 flex items-baseline gap-2 font-display text-4xl text-ink">
              <CountUp to={reviews.summary.rating} decimals={2} />
              <span className="text-[15px] text-brass-dark">из 5</span>
            </dd>
          </div>
          <div className="bg-cream-50 px-5 py-6 md:px-7 md:py-7">
            <dt className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Отзывов</dt>
            <dd className="mt-2 font-display text-4xl text-ink">
              <CountUp to={reviews.summary.count} />
            </dd>
          </div>
          <div className="bg-cream-50 px-5 py-6 md:px-7 md:py-7">
            <dt className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Профиль</dt>
            <dd className="mt-2 text-[15.5px] leading-tight text-ink">
              Терапия и&nbsp;протезирование по&nbsp;данным Росздравнадзора
            </dd>
          </div>
          <div className="bg-cream-50 px-5 py-6 md:px-7 md:py-7">
            <dt className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Адрес</dt>
            <dd className="mt-2 text-[15.5px] leading-tight text-ink">
              Ногинск,<br />Юбилейная, 9
            </dd>
          </div>
        </dl>
      </motion.div>
    </section>
  );
}
