/**
 * Единая точка чтения контента.
 * Сейчас источник — JSON в репозитории. Чтобы перейти на Headless CMS,
 * достаточно заменить тело getClinic() на fetch к CMS — остальной код не меняется.
 */

import clinic from '@/data/clinic.json';

export function getClinic() {
  return clinic;
}

/** Собирает JSON-LD для SEO из тех же данных. */
export function buildSchema(clinic) {
  const { organization: org, reviews } = clinic;
  const [street, city] = [org.address.street, org.address.city];
  const postal = org.address.postalCode;

  const dayMap = { 'Пн': 'Monday', 'Вт': 'Tuesday', 'Ср': 'Wednesday', 'Чт': 'Thursday', 'Пт': 'Friday', 'Сб': 'Saturday', 'Вс': 'Sunday' };

  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: org.name,
    description: org.description,
    telephone: org.phone.display,
    url: 'https://stomatolog-noginsk.ru',
    address: {
      '@type': 'PostalAddress',
      streetAddress: street,
      addressLocality: city,
      addressRegion: org.address.region,
      postalCode: postal,
      addressCountry: 'RU',
    },
    openingHoursSpecification: org.hours.schedule
      .filter((s) => !/выходной/i.test(s.time))
      .map((s) => {
        const [from, to] = s.time.split('—').map((t) => t.trim());
        return { '@type': 'OpeningHoursSpecification', dayOfWeek: [dayMap[s.days.split(' ')[0]]], opens: from, closes: to };
      }),
    aggregateRating: reviews.summary
      ? {
          '@type': 'AggregateRating',
          ratingValue: reviews.summary.rating,
          reviewCount: reviews.summary.count,
          bestRating: 5,
        }
      : undefined,
    review: reviews.items.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.date,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги',
      itemListElement: clinic.services.groups.flatMap((g) =>
        g.items.map((i) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: i.title, category: g.title },
        }))
      ),
    },
  };
}
