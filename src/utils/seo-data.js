/**
 * Единый источник SEO-метаданных для всех маршрутов приложения.
 *
 * Используется роутером (для router.meta) и модулем seo.js (для динамического
 * обновления тегов при SPA-навигации). Поскольку пре-рендер захватывает DOM
 * после монтирования SPA, эти значения попадают и в итоговый статический HTML
 * (title, description, canonical, Open Graph, BreadcrumbList).
 */

export const BASE_URL = 'https://alexchasx.github.io/my-portfolio';

export const DEFAULT_TITLE = 'Портфолио | Fullstack-developer';
export const DEFAULT_DESCRIPTION =
  'Портфолио Fullstack-разработчика - VueJS | Laravel';

const OG_IMAGE = `${BASE_URL}/og-preview.webp`;

const HOME = { name: 'Главная', path: '/' };

/**
 * Метаданные по маршрутам. Ключ — путь маршрута.
 * breadcrumb — хлебные крошки для JSON-LD (BreadcrumbList).
 */
export const routesMeta = {
  '/': {
    title: 'Портфолио Fullstack-разработчика | Александр Часовников',
    description:
      'Личное портфолио Fullstack-разработчика. Вёрстка, JavaScript, VueJS, Laravel, PHP. Примеры проектов, опыт и контакты.',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Портфолио Fullstack-разработчика Александра Часовникова',
    breadcrumb: [HOME],
  },
  '/experience': {
    title: 'Опыт и навыки | Александр Часовников',
    description:
      'Опыт работы и профессиональные навыки Fullstack-разработчика: HTML, CSS, JavaScript, VueJS, PHP, Laravel, PostgreSQL, MySQL.',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Опыт и навыки Fullstack-разработчика Александра Часовникова',
    breadcrumb: [HOME, { name: 'Опыт и навыки', path: '/experience' }],
  },
  '/portfolio': {
    title: 'Портфолио проектов | Александр Часовников',
    description:
      'Примеры реализованных проектов: адаптивная вёрстка, JavaScript-приложения, проекты на VueJS, Laravel и PHP. Реализованные кейсы разработчика.',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Проекты Fullstack-разработчика Александра Часовникова',
    breadcrumb: [HOME, { name: 'Портфолио', path: '/portfolio' }],
  },
  '/contacts': {
    title: 'Контакты | Александр Часовников',
    description:
      'Связаться с Fullstack-разработчиком Александром Часовниковым: email, Telegram, GitHub и другие контакты для сотрудничества.',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Контакты Fullstack-разработчика Александра Часовникова',
    breadcrumb: [HOME, { name: 'Контакты', path: '/contacts' }],
  },
};
