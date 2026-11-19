import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';
import Button from './Button';

export default function Header({ org, nav }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [router.asPath]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500 ease-out ${
        scrolled ? 'bg-cream-50/85 shadow-[0_1px_0_rgba(18,33,28,.06)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-container items-center justify-between px-5 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-brass-light transition-transform duration-500 ease-out group-hover:rotate-[-6deg]">
            <Icon name="tooth" className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[19px] tracking-tight text-ink">{org.name}</span>
            <span className="mt-1 text-[10.5px] uppercase tracking-[0.22em] text-ink-400">Стоматология · {org.address.city}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-[14.5px] text-ink-600 transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={org.phone.href}
            className="text-[14.5px] font-medium tracking-tight text-ink transition-colors hover:text-brass-dark"
          >
            {org.phone.display}
          </a>
          <Button href="#contacts" variant="brass" className="!px-5 !py-2.5 !text-[14px]">
            Записаться
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={org.phone.href}
            aria-label={`Позвонить: ${org.phone.display}`}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/12 text-ink active:scale-95"
          >
            <Icon name="phone" className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/12 text-ink active:scale-95"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-ink/8 bg-cream-50/98 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-container flex-col gap-1 px-5 py-6" aria-label="Мобильная навигация">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-3.5 font-display text-2xl text-ink transition-colors hover:bg-ink/[.04]"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button href={org.phone.href} variant="primary" icon={<Icon name="phone" className="h-4 w-4" />}>
                  {org.phone.display}
                </Button>
                <Button href="#contacts" variant="outline">
                  Оставить заявку
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
