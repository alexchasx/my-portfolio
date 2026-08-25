/**
 * Собственный пре-рендер-скрипт на Puppeteer 25 (запускается как postbuild).
 *
 * Что делает:
 *  1. Поднимает локальный статический сервер, который маппит URL-префикс
 *     /my-portfolio → папку dist (с SPA-fallback на index.html для роутов).
 *  2. Прогоняет каждый маршрут приложения через Puppeteer.
 *  3. Сохраняет полностью отрендеренный HTML каждой страницы в dist,
 *     чтобы итоговый билд содержал готовый статический HTML по всем маршрутам.
 *
 * Использование: node prerender.js   (или автоматически после `npm run build`)
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const puppeteer = require('puppeteer');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const BASE = '/my-portfolio';
const HOST = '127.0.0.1';
const PORT = 4173;

// Маршруты приложения (см. src/router/index.js)
const ROUTES = ['/', '/experience', '/portfolio', '/contacts'];

// Приоритеты страниц для sitemap
const SITEMAP_PRIORITY = {
  '/': '1.0',
  '/portfolio': '0.9',
  '/experience': '0.8',
  '/contacts': '0.7',
};
const SITE_BASE = 'https://alexchasx.github.io/my-portfolio';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
};

/**
 * Раздаёт файлы из DIST по URL с учётом базового префикса /my-portfolio.
 * Для «чистых» роутов (без расширения файла) работает SPA-fallback → index.html.
 */
function serve(req, res) {
  let urlPath;
  try {
    urlPath = decodeURIComponent(new URL(req.url, `http://${HOST}:${PORT}`).pathname);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
    return;
  }

  // Снимаем базовый префикс
  let rel = urlPath.startsWith(BASE) ? urlPath.slice(BASE.length) : urlPath;
  if (rel === '') rel = '/';
  if (!rel.startsWith('/')) rel = '/' + rel;

  // Не даём выйти за пределы DIST
  const safeRel = path.posix.normalize(rel).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(DIST, safeRel);

  let stat = safeStat(filePath);
  if (stat && stat.isDirectory()) {
    filePath = path.join(filePath, 'index.html');
    stat = safeStat(filePath);
  }

  // SPA-fallback: любые «виртуальные» пути отдаём как index.html,
  // чтобы Vue Router сам отрисовал нужную страницу.
  if (!stat || !stat.isFile()) {
    filePath = path.join(DIST, 'index.html');
    stat = safeStat(filePath);
  }

  if (!stat) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
    'Cache-Control': 'no-store',
  });
  fs.createReadStream(filePath).pipe(res);
}

function safeStat(p) {
  try {
    return fs.statSync(p);
  } catch {
    return null;
  }
}

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer(serve);
    server.on('error', reject);
    server.listen(PORT, HOST, () => resolve(server));
  });
}

function outputPathFor(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  const clean = route.replace(/^\/+|\/+$/g, '');
  return path.join(DIST, clean, 'index.html');
}

async function renderPage(browser, route) {
  const url = `http://${HOST}:${PORT}${BASE}${route}`;
  const page = await browser.newPage();
  const errors = []; // фатальные: прерывают рендер/сборку
  const warnings = []; // предупреждения: логируются, но не валят билд

  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => {
    if (m.type() === 'error') warnings.push(`console.error: ${m.text()}`);
  });
  page.on('requestfailed', (r) =>
    errors.push(`requestfailed: ${r.url()} :: ${r.failure()?.errorText || 'unknown'}`)
  );

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  } catch (e) {
    errors.push(`goto: ${e.message}`);
  }

  // Ждём, пока Vue реально смонтирует #app.
  await page
    .waitForFunction(
      () =>
        document.querySelector('#app') &&
        document.querySelector('#app').children.length > 0,
      { timeout: 30000 }
    )
    .catch(() => errors.push('timeout: #app is empty'));

  // Небольшая пауза, чтобы успели примениться шрифты/анимации.
  await new Promise((r) => setTimeout(r, 1200));

  const html = await page.evaluate(
    () => '<!DOCTYPE html>\n' + document.documentElement.outerHTML
  );

  const outFile = outputPathFor(route);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, 'utf8');

  const uniqueWarnings = [...new Set(warnings)];
  console.log(
    `[ok] ${route.padEnd(14)} -> ${path.relative(ROOT, outFile)}` +
      (uniqueWarnings.length ? `  (${uniqueWarnings.length} warning(s))` : '')
  );
  if (uniqueWarnings.length) {
    console.log('     ' + uniqueWarnings.join('\n     '));
  }

  await page.close();
  return errors.length ? 1 : 0;
}

/**
 * Генерирует sitemap.xml в dist с актуальной датой последнего изменения.
 */
function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map((route) => {
    const loc =
      route === '/' ? `${SITE_BASE}/` : `${SITE_BASE}${route.replace(/\/+$/, '')}/`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${SITEMAP_PRIORITY[route] || '0.5'}</priority>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  const outFile = path.join(DIST, 'sitemap.xml');
  fs.writeFileSync(outFile, xml, 'utf8');
  console.log(`[ok] sitemap          -> ${path.relative(ROOT, outFile)} (lastmod=${today})`);
}

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error('Папка ' + DIST + ' не найдена. Сначала выполните `npm run build`.');
    process.exit(1);
  }

  const server = await startServer();
  console.log(`Статический сервер: http://${HOST}:${PORT}${BASE}/ (DIST=${DIST})`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let failed = 0;
  try {
    for (const route of ROUTES) {
      failed += await renderPage(browser, route);
    }
    // Генерируем sitemap.xml с актуальными датами после рендера всех страниц
    writeSitemap();
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`\nГотово: обработано маршрутов ${ROUTES.length}, ошибок — ${failed}.`);
  if (failed) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
