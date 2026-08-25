/**
 * Динамическое управление SEO-метатегами для SPA.
 *
 * При переходе между маршрутами Vue Router не перезагружает страницу,
 * поэтому статические теги из index.html (title, description, canonical, OG)
 * остаются прежними. Этот модуль обновляет их по метаданным маршрута
 * (router.meta.title / router.meta.description и др.) и корректному
 * абсолютному URL. Поскольку пре-рендер захватывает DOM после монтирования,
 * все изменения попадают в итоговый статический HTML для ботов.
 */

import { BASE_URL } from './seo-data';
import { upsertJsonLd, removeJsonLd } from './jsonld';

const DEFAULT_OG_IMAGE = `${BASE_URL}/og-preview.webp`;
const DEFAULT_OG_IMAGE_ALT =
  'Портфолио Fullstack-разработчика Александра Часовникова';

/**
 * Находит или создаёт meta-тег по селектору.
 * @param {string} selector CSS-селектор существующего тега
 * @param {string} name имя атрибута-идентификатора ('name' | 'property')
 * @param {string} value значение идентификатора
 * @returns {HTMLElement}
 */
function ensureMeta(selector, name, value) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(name, value);
    document.head.appendChild(tag);
  }
  return tag;
}

/**
 * Возвращает абсолютный канонический URL для переданного пути.
 * Корневому пути соответствует https://…/my-portfolio/ , остальным — с суффиксом.
 * @param {string} path путь маршрута
 * @returns {string}
 */
export function absoluteUrl(path) {
  if (!path || path === '/') return `${BASE_URL}/`;
  return `${BASE_URL}${String(path).replace(/\/+$/, '')}/`;
}

/**
 * Возвращает абсолютный канонический URL для текущего маршрута.
 * @param {import('vue-router').RouteLocationNormalized} to
 * @returns {string}
 */
function canonicalUrl(to) {
  return absoluteUrl(to.path);
}

/**
 * Обновляет Open Graph / Twitter изображения страницы.
 * @param {string} image абсолютный URL изображения
 * @param {string} alt альтернативный текст
 */
function setOgImage(image, alt) {
  ensureMeta('meta[property="og:image"]', 'property', 'og:image').setAttribute(
    'content',
    image
  );
  ensureMeta(
    'meta[property="og:image:type"]',
    'property',
    'og:image:type'
  ).setAttribute('content', 'image/webp');
  ensureMeta(
    'meta[property="og:image:width"]',
    'property',
    'og:image:width'
  ).setAttribute('content', '1200');
  ensureMeta(
    'meta[property="og:image:height"]',
    'property',
    'og:image:height'
  ).setAttribute('content', '630');
  ensureMeta(
    'meta[property="og:image:alt"]',
    'property',
    'og:image:alt'
  ).setAttribute('content', alt);
  ensureMeta('meta[name="twitter:image"]', 'name', 'twitter:image').setAttribute(
    'content',
    image
  );
  ensureMeta(
    'meta[name="twitter:image:alt"]',
    'name',
    'twitter:image:alt'
  ).setAttribute('content', alt);
}

/**
 * Обновляет/удаляет JSON-LD BreadcrumbList для текущего маршрута.
 * @param {import('vue-router').RouteLocationNormalized} to
 */
function setBreadcrumb(to) {
  const items = to.meta.breadcrumb;
  if (Array.isArray(items) && items.length > 1) {
    upsertJsonLd('breadcrumb-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  } else {
    removeJsonLd('breadcrumb-jsonld');
  }
}

/**
 * Устанавливает title, description, canonical, Open Graph, Twitter и JSON-LD.
 * @param {import('vue-router').RouteLocationNormalized} to
 * @param {string} defaultTitle
 * @param {string} defaultDescription
 */
export function applySeoMeta(to, defaultTitle, defaultDescription) {
  const title = to.meta.title || defaultTitle;
  const description = to.meta.description || defaultDescription;
  const ogImage = to.meta.ogImage || DEFAULT_OG_IMAGE;
  const ogImageAlt = to.meta.ogImageAlt || DEFAULT_OG_IMAGE_ALT;
  const url = canonicalUrl(to);

  document.title = title;

  // description
  ensureMeta('meta[name="description"]', 'name', 'description').setAttribute(
    'content',
    description
  );

  // canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);

  // Open Graph
  ensureMeta('meta[property="og:title"]', 'property', 'og:title').setAttribute(
    'content',
    title
  );
  ensureMeta(
    'meta[property="og:description"]',
    'property',
    'og:description'
  ).setAttribute('content', description);
  ensureMeta('meta[property="og:url"]', 'property', 'og:url').setAttribute(
    'content',
    url
  );

  // Twitter Card дублирует OG-заголовок/описание
  ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title').setAttribute(
    'content',
    title
  );
  ensureMeta(
    'meta[name="twitter:description"]',
    'name',
    'twitter:description'
  ).setAttribute('content', description);

  // Open Graph / Twitter изображение
  setOgImage(ogImage, ogImageAlt);

  // Structured data: хлебные крошки
  setBreadcrumb(to);
}
