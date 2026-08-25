Проанализировал текущее состояние SPA и подготовил план по улучшению SEO.

## Главная проблема: это клиентский SPA
Сайт — Vue SPA с hash-роутингом (`createWebHashHistory` в `src/router/index.js`). Браузер получает «пустой» `index.html` с одним `<div id="app"></div>` — весь контент рендерится JS. Google частично умеет исполнять JS, но другие поисковики и сниппеты соцсетей видят пустую страницу. Это ограничивает индексацию и ранжирование.

## Что можно сделать (по приоритету)

### 1. Рендеринг контента для поисковиков
- **Правильный путь**: перенести проект на **Nuxt** (SSR/SSG) или добавить **pre-rendering** (`vite-plugin-prerender`) — каждый маршрут будет отдаваться готовым HTML.
- **Быстрый компромисс**: оставить Vite, но добавить статичный вариант в `public/` + `<noscript>` с текстом.

### 2. Уникальные title и description для каждой страницы
Сейчас meta единые для всего сайта (`index.html`). Нужно подменять их при переходах — пакет `@unhead/vue` (официальный для Vue) или `vue-meta`:
```bash
npm install @unhead/vue
```
В каждом view: `useHead({ title, meta: [...] })`. Страницы: Главная, Опыт, Портфолио, Контакты.

### 3. Open Graph и Twitter Cards
Добавить meta для соцсетей (заголовок, описание, превью-картинка): `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:locale`, а также `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.

### 4. Structured Data (JSON-LD) — Schema.org Person
Добавить в `index.html` JSON-LD с вашими данными для rich-результатов:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "...",
  "jobTitle": "Frontend/Fullstack Developer",
  "url": "https://alexchasx.github.io/my-portfolio/",
  "sameAs": ["https://github.com/alexchasx", "telegram-url"]
}
</script>
```

### 5. Файлы в `public/` (сейчас там только favicon.ico)
- **`sitemap.xml`** — URL всех страниц (главная, `/experience`, `/portfolio`, `/contacts`).
- **`robots.txt`** — разрешить индексацию и указать sitemap.
- **`404.html`** — корректный ответ на битые URL.

### 6. Семантическая разметка и доступность
- Один `<h1>` на страницу, далее `<h2>`/`<h3>`.
- Семантические теги: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`.
- Обязательный `alt` у всех изображений, `aria-label` у иконок и кнопок без текста.

### 7. Canonical и переключение на history-роутер
- `<link rel="canonical" href="https://alexchasx.github.io/my-portfolio/">`.
- **Перейти с hash-роутинга на `createWebHistory` + `404.html`**: тогда у каждой страницы будет «чистый» URL вместо `/#/portfolio`, и разделы не будут склеиваться в одну страницу. На GitHub Pages для этого нужен `404.html` как SPA-fallback.

### 8. Производительность (косвенно влияет на SEO)
- `loading="lazy"` для картинок ниже первого экрана, `fetchpriority="high"` для главной.
- `preconnect`/`dns-prefetch` для внешних ресурсов.
- `preload` woff2-шрифтов.
- Code-splitting по маршрутам (lazy import views через `() => import(...)`).

### 9. Индексирование и аналитика
- **Google Search Console**: добавить мета `google-site-verification`, отправить `sitemap.xml`.
- **Яндекс.Вебмастер** (аудитория русскоязычная).
- По желанию — Яндекс.Метрика / GA.

## Быстрые шаги для реализации
1. Создать в `public/`: `sitemap.xml`, `robots.txt`, `404.html`.
2. Добавить JSON-LD `Person` и Open Graph в `index.html`.
3. Установить `@unhead/vue` и прописать уникальные title/description на каждой странице.
4. Проставить `alt` ко всем изображениям, поправить семантику заголовков.
5. Перевести роутер на `createWebHistory` + `404.html` (иначе отдельные страницы не индексируются).
6. Завести Search Console и отправить sitemap.

Могу сразу реализовать любой из пунктов — например, добавить `sitemap.xml`/`robots.txt`/`404.html`, JSON-LD, динамические meta через `@unhead/vue` или перевести роутер на history-режим.

=========

На всех страницах Puppeteer фиксирует предупреждение из браузера: `Error: <path> attribute d: Expected number…`. Это дефект разметки SVG (битый атрибут `d` у какого-то `<path>`), существующий независимо от пре-рендера. Я вынес его в `warning`, чтобы он не ломал сборку, но сам SVG стоит поправить.
