/**
 * Динамическое управление SEO-метатегами для SPA.
 *
 * При переходе между маршрутами Vue Router не перезагружает страницу,
 * поэтому статические теги из index.html (title, description, canonical, OG)
 * остаются прежними. Этот модуль обновляет их по метаданным маршрута
 * (router.meta.title / router.meta.description) и корректному абсолютному URL.
 */

const BASE_URL = 'https://alexchasx.github.io/my-portfolio';

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
 * Возвращает абсолютный канонический URL для текущего маршрута.
 * Корневому пути соответствует https://…/my-portfolio/ , остальным — с суффиксом.
 * @param {import('vue-router').RouteLocationNormalized} to
 * @returns {string}
 */
function canonicalUrl(to) {
  const p = to.path;
  if (!p || p === '/') return `${BASE_URL}/`;
  return `${BASE_URL}${p.replace(/\/+$/, '')}/`;
}

/**
 * Устанавливает title, description, canonical и Open Graph теги.
 * @param {import('vue-router').RouteLocationNormalized} to
 * @param {string} defaultTitle
 * @param {string} defaultDescription
 */
export function applySeoMeta(to, defaultTitle, defaultDescription) {
  const title = to.meta.title || defaultTitle;
  const description = to.meta.description || defaultDescription;
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
}
