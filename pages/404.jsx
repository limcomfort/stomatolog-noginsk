import Head from 'next/head';
import Link from 'next/link';
import { Icon } from '@/components/Icons';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Страница не найдена — Стоматолог, Ногинск</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="grid min-h-screen place-items-center px-6">
        <div className="max-w-md text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-ink text-brass-light">
            <Icon name="tooth" className="h-7 w-7" />
          </span>
          <p className="mt-6 font-display text-display-m text-ink">404</p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink-600">
            Такой страницы нет. Вернитесь на главную — там услуги, врачи и запись на приём.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[15px] font-medium text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-800"
          >
            На главную
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
