import { Icon } from './Icons';

export default function Footer({ org, nav, source }) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-cream-200">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-brass/10 blur-3xl"
      />
      <div className="mx-auto max-w-container px-5 pb-10 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cream-50/12 bg-cream-50/5 text-brass-light">
                <Icon name="tooth" className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-2xl text-cream-50">{org.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-cream-200/65">{org.category}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream-200/70">{org.tagline}. {org.address.full}.</p>
            <a
              href={org.social.yandex}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[14px] text-brass-light transition-colors hover:text-cream-50"
            >
              Карточка на Яндекс.Картах
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-cream-200/60">Разделы</p>
            <ul className="mt-5 space-y-3">
              {nav.map((i) => (
                <li key={i.href}>
                  <a href={i.href} className="text-[15px] text-cream-200/75 transition-colors hover:text-cream-50">
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-cream-200/60">Контакты</p>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li>
                <a href={org.phone.href} className="font-display text-2xl text-cream-50 transition-colors hover:text-brass-light">
                  {org.phone.display}
                </a>
              </li>
              <li className="text-cream-200/70">{org.address.full}</li>
              <li className="text-cream-200/70">{org.hours.short}</li>
              {org.phone.second ? (
                <li>
                  <a href={org.phone.second.href} className="text-cream-200/70 transition-colors hover:text-cream-50">
                    {org.phone.second.display}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream-50/10 pt-6 text-[12.5px] text-cream-200/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {org.legalName}. ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА.
          </p>
          <p>
            Данные организации:{' '}
            <a href={source} target="_blank" rel="noopener noreferrer" className="underline decoration-cream-200/40 underline-offset-2 hover:text-cream-50">
              Яндекс.Карты
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
