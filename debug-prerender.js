/* Отладочный скрипт: грузит собранный dist в puppeteer и снимает содержимое #app + ошибки консоли */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  const logs = [];
  page.on('console', (m) => logs.push(`[console.${m.type()}] ${m.text()}`));
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  page.on('requestfailed', (r) => logs.push(`[requestfailed] ${r.url()} :: ${r.failure()?.errorText}`));

  const url = 'http://localhost:4173/my-portfolio/';
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));

  const result = await page.evaluate(() => {
    const app = document.querySelector('#app');
    return {
      htmlLen: app ? app.innerHTML.length : -1,
      text: app ? (app.innerText || '').slice(0, 200) : 'NO #app',
      title: document.title,
    };
  });

  console.log('RESULT:', JSON.stringify(result, null, 2));
  console.log('\n--- LOGS ---');
  console.log(logs.join('\n'));

  await browser.close();
})();
