/**
 * Утилиты для управления JSON-LD скриптами (structured data) в <head>.
 *
 * Добавленные здесь скрипты попадают в пре-рендеренный HTML, поэтому боты
 * видят их даже без выполнения JavaScript.
 */

/**
 * Создаёт или обновляет JSON-LD скрипт по уникальному id.
 * @param {string} id уникальный идентификатор (data-атрибут id)
 * @param {object} data объект structured data
 */
export function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Удаляет JSON-LD скрипт по id.
 * @param {string} id
 */
export function removeJsonLd(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}
