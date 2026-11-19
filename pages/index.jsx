import Head from 'next/head';
import { getClinic, buildSchema } from '@/lib/content';
import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Advantages from '@/components/sections/Advantages';
import Doctors from '@/components/sections/Doctors';
import Reviews from '@/components/sections/Reviews';
import Gallery from '@/components/sections/Gallery';
import Faq from '@/components/sections/Faq';
import Contacts from '@/components/sections/Contacts';

export default function Home({ clinic, schema }) {
  const { organization: org, meta } = clinic;
  const title = `${org.name} — стоматология в Ногинске, Юбилейная 9`;
  const description = `${org.description} Телефон: ${org.phone.display}.`;

  return (
    <Layout clinic={clinic}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://stomatolog-noginsk.ru/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={org.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Hero org={org} reviews={clinic.reviews} />
      <About about={clinic.about} org={org} />
      <Services services={clinic.services} />
      <Advantages advantages={clinic.advantages} />
      <Doctors doctors={clinic.doctors} />
      <Reviews reviews={clinic.reviews} />
      <Gallery clinic={clinic} />
      <Faq faq={clinic.faq} />
      <Contacts contacts={clinic.contacts} org={org} />
    </Layout>
  );
}

/**
 * SSG: данные «вшиваются» в HTML на этапе сборки.
 * Контент читается из lib/content (сейчас JSON, позже — Headless CMS).
 * revalidate позволяет редкие ISR-пересборки; для чистого SSG можно убрать.
 */
export async function getStaticProps() {
  const clinic = getClinic();
  return {
    props: { clinic, schema: buildSchema(clinic) },
    revalidate: 3600,
  };
}
