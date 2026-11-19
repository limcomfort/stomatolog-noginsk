# Клиника «Стоматолог» — Ногинск · лендинг на Next.js (SSG)

Сайт-визитка по данным карточки организации на Яндекс.Картах: https://yandex.ru/maps/-/CXWeAHMo

## Источники данных

| Что | Откуда | Статус |
| --- | --- | --- |
| Название, адрес, телефон | Карточка на Яндекс.Картах | факт |
| Рейтинг 4,25, 58 отзывов, 3 отзыва | Карточка | факт |
| Виды услуг (терапия, протезирование) | Реестр Росздравнадзора в карточке | факт |
| График: Пн–Пт 9–19, Сб 9–17, Вс выходной | Вывеска на двери (фото с карты) | факт |
| Второй телефон +7 (49651) 4-33-25 | Вывеска на двери | факт |
| Юр. лицо: ООО «Стоматолог» | Вывеска на двери | факт |
| 4 фото (фасад, вход, вывеска) | Галерея карточки | факт |
| Прайс, состав врачей | — | **демо, заменить** |

## Стек

- **Next.js 14, Pages Router** — `getStaticProps` отдаёт готовый HTML на этапе сборки (● SSG).
- **Framer Motion** — появление блоков, hover, счётчики, лайтбокс. Уважает `prefers-reduced-motion`.
- **Tailwind CSS** — дизайн-токены в `tailwind.config.mjs`.
- **Иконки — собственные SVG** (`components/Icons.jsx`). Эмодзи не используются.
- Шрифты: **Playfair Display** + **Manrope**.
- Фото: WebP 2 размера через `srcset` (9,4 МБ → 580 КБ).

## Запуск

```bash
npm install
npm run dev
npm run build
npm run start
```

> Windows/PowerShell: если `npm.ps1` заблокирован — вызывайте `npm.cmd` или `node node_modules/next/dist/bin/next build`.

Статический экспорт: раскомментируйте `output: 'export'` в `next.config.mjs`.

## Структура

```
data/clinic.json           весь контент (схема под CMS)
lib/content.js             getClinic() + buildSchema() (JSON-LD Dentist)
pages/index.jsx            лендинг + getStaticProps
pages/404.jsx              кастомная 404
pages/_document.jsx        lang="ru"
components/sections/       Hero, About, Services, Advantages, Doctors,
                           Reviews, Gallery, Faq, Contacts
components/Icons.jsx       SVG-иконки
components/Motion.jsx      Reveal (scroll) + CountUp
public/photos/             WebP-фото клиники (2 размера каждое)
docs/moodboard.md          мудборд с 5 реальными референсами
```

## Секции

Hero (фото фасада, рейтинг) → О клинике → Услуги → Преимущества → Врачи → Отзывы → **Фотографии** → FAQ → Контакты (карта + форма).

## Результаты проверки

Lighthouse, mobile, throttled (`npx lighthouse`, Chrome headless):

| Категория | Скор |
| --- | --- |
| Performance | **96–99** |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |

FCP 0,9 с · LCP 2,6 с · TBT 20 мс · CLS 0. First Load JS 132 КБ. Long tasks в trace: 0.

## SEO

- title, description, canonical, Open Graph / Twitter.
- JSON-LD `Dentist`: адрес, телефоны, график, рейтинг, отзывы, каталог услуг.
- JSON-LD `FAQPage`.
- `lang="ru"`, skip-link, landmarks, `aria-expanded`, роль `img` у звёзд рейтинга.

## Что заменить перед публикацией

| Поле | Где | Действие |
| --- | --- | --- |
| `services.groups[].items[].price` | `data/clinic.json` | Реальный прайс |
| `doctors.items` | там же | Реальные имена, специализации, фото |
| `contacts.form` | `Contacts.jsx` | Подключить endpoint вместо `mailto:` |
| Домен | `pages/index.jsx`, `lib/content.js` | Заменить `stomatolog-noginsk.ru` |
| Фото | `public/photos` | По возможности — интерьеры и кабинеты |

## Правовая плашка

В футере: «ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА» — требование для рекламы медицинских услуг.
