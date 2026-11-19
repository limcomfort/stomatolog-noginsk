import { useState } from 'react';
import { Reveal } from '../Motion';
import { Icon } from '../Icons';
import SectionHeading from './SectionHeading';

export default function Contacts({ contacts, org }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent(`Заявка с сайта: ${name || 'без имени'}`);
    const body = encodeURIComponent(`Имя: ${name}\nТелефон: ${phone}\n\n${message}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputCls =
    'w-full rounded-2xl border border-ink/12 bg-cream-50 px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-300 transition-all duration-300 focus:border-brass focus:outline-none focus:ring-4 focus:ring-brass/12';

  return (
    <section id="contacts" className="relative bg-cream-100/60 py-20 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <SectionHeading eyebrow={contacts.eyebrow} title={contacts.title} lead={contacts.lead} />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Контакты + карта */}
          <Reveal className="lg:col-span-7">
            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/8 bg-cream-50">
              <div className="grid gap-px bg-ink/8 sm:grid-cols-2">
                <a href={org.phone.href} className="group bg-cream-50 px-6 py-6 transition-colors hover:bg-cream-100/70">
                  <span className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-ink-400">
                    <Icon name="phone" className="h-4 w-4" /> Телефон
                  </span>
                  <span className="mt-2.5 block font-display text-[26px] leading-none text-ink transition-colors group-hover:text-brass-dark">
                    {org.phone.display}
                  </span>
                  {org.phone.second ? (
                    <span className="mt-2 block text-[14px] text-ink-600">{org.phone.second.display}</span>
                  ) : null}
                </a>
                <div className="bg-cream-50 px-6 py-6">
                  <span className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-ink-400">
                    <Icon name="clock" className="h-4 w-4" /> Часы работы
                  </span>
                  <dl className="mt-2.5 space-y-1 text-[14px]">
                    {org.hours.schedule.map((s) => (
                      <div key={s.days} className="flex items-baseline justify-between gap-3">
                        <dt className="text-ink-600">
                          {s.days}
                        </dt>
                        <dd className="tabular-nums text-ink">{s.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-6 py-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-ink-400">
                    <Icon name="pin" className="h-4 w-4" /> Адрес
                  </span>
                  <p className="mt-2.5 max-w-xs text-[15.5px] leading-snug text-ink">{org.address.full}</p>
                </div>
                <a
                  href={org.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-5 py-3 text-[14px] font-medium text-ink transition-all duration-300 hover:border-ink/35 hover:bg-ink/[.03] sm:self-auto"
                >
                  Открыть в Яндекс.Картах
                  <Icon name="arrowUpRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="min-h-[260px] flex-1 border-t border-ink/8">
                <iframe
                  title={`Карта: ${org.address.full}`}
                  src={org.address.embedUrl}
                  className="h-full min-h-[260px] w-full grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* Форма */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[2rem] bg-ink p-7 text-cream-200 md:p-8">
              <h3 className="font-display text-[26px] leading-tight text-cream-50">{contacts.form.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-cream-200/55">{contacts.form.note}</p>

              {sent ? (
                <div className="mt-8 flex flex-1 flex-col items-center justify-center rounded-3xl border border-brass/25 bg-brass/[.07] p-8 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brass/15 text-brass-light">
                    <Icon name="shieldCheck" className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-display text-2xl text-cream-50">Почти готово</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-cream-200/60">
                    Мы открыли ваш почтовый клиент с готовым письмом — отправьте его, и администратор перезвонит.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-[13.5px] text-brass-light underline underline-offset-4 hover:text-cream-50"
                  >
                    Заполнить снова
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 flex flex-1 flex-col gap-4">
                  <label className="block">
                    <span className="mb-2 block text-[12px] uppercase tracking-[0.14em] text-cream-200/50">{contacts.form.nameLabel}</span>
                    <input name="name" required autoComplete="name" className={inputCls} placeholder="Например, Анна" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[12px] uppercase tracking-[0.14em] text-cream-200/50">{contacts.form.phoneLabel}</span>
                    <input
                      name="phone"
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      pattern="[0-9+()\-\s]{7,}"
                      className={inputCls}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </label>
                  <label className="block flex-1">
                    <span className="mb-2 block text-[12px] uppercase tracking-[0.14em] text-cream-200/50">{contacts.form.messageLabel}</span>
                    <textarea name="message" rows={4} className={`${inputCls} h-full min-h-[96px] resize-none`} placeholder="Болит зуб справа снизу, хочу записаться на этой неделе" />
                  </label>

                  <button
                    type="submit"
                    className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-brass px-7 py-4 text-[15px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-light active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    {contacts.form.submitLabel}
                    <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-[11.5px] leading-relaxed text-cream-200/40">{contacts.form.consent}</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
