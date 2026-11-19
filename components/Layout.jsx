import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ clinic, children }) {
  const { organization, nav, meta } = clinic;
  return (
    <div className="grain relative min-h-screen bg-cream-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream-50"
      >
        Перейти к содержимому
      </a>
      <Header org={organization} nav={nav} />
      <main id="main">{children}</main>
      <Footer org={organization} nav={nav} source={meta.source} />
    </div>
  );
}
