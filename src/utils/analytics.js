/**
 * Интеграция веб-аналитики (Яндекс.Метрика + Google Analytics 4).
 *
 * Счётчики подключаются ТОЛЬКО если заданы соответствующие переменные окружения,
 * поэтому в продакшене без настроек ничего не загружается (не замедляет сайт):
 *   VITE_YM_ID  — номер счётчика Яндекс.Метрики (например: 12345678)
 *   VITE_GA_ID  — идентификатор Google Analytics 4 (например: G-XXXXXXXXXX)
 *
 * Для отключения аналитики в пре-рендере (Node-окружение) предусмотрена проверка
 * typeof window, чтобы скрипт безопасно импортировался.
 */

const YM_ID = import.meta.env.VITE_YM_ID;
const GA_ID = import.meta.env.VITE_GA_ID;

let enabled = false;

/**
 * Инициализирует счётчики аналитики (вызывается один раз после монтирования приложения).
 */
export function initAnalytics() {
  if (typeof window === 'undefined' || enabled) return;
  enabled = true;

  if (YM_ID) {
    loadYandexMetrika(YM_ID);
  }

  if (GA_ID) {
    loadGoogleAnalytics(GA_ID);
  }
}

/**
 * Отправляет событие просмотра страницы (Pageview / hit) для всех активных счётчиков.
 * Вызывается в router.afterEach при каждой навигации.
 * @param {import('vue-router').RouteLocationNormalized} to
 */
export function trackPageView(to) {
  if (typeof window === 'undefined') return;

  const location = `${window.location.origin}${window.location.pathname}${window.location.search}`;

  if (window.ym && YM_ID) {
    window.ym(YM_ID, 'hit', location);
  }

  if (window.gtag && GA_ID) {
    window.gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_title: to.meta.title || document.title,
    });
  }
}

/**
 * Загружает Яндекс.Метрику по официальному сниппету.
 * @param {string|number} id номер счётчика
 */
function loadYandexMetrika(id) {
  // Определяем буфер ДО загрузки скрипта, чтобы ранние события (hit) не терялись
  window.ym =
    window.ym ||
    function (...args) {
      (window.ym.a = window.ym.a || []).push(args);
    };

  window.ym(id, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://mc.yandex.ru/metrika/tag.js';
  document.head.appendChild(script);
}

/**
 * Загружает Google Analytics 4 по официальному сниппету.
 * @param {string} id идентификатор GA4
 */
function loadGoogleAnalytics(id) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}
