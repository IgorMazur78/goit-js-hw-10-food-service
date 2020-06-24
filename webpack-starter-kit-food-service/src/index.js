import item from './menu.json';
import templateMenu from './templates.hbs';
import './styles.css';
import './add.js';
// обьект активизации тега в html
const refs = {
  jsmenu: document.querySelector('.js-menu'),
};
// создание разметки меню используя import файлов
createMenu(item);
function createMenu(item) {
  const foodTemplate = item.map(items => templateMenu(items)).join('');
  refs.jsmenu.insertAdjacentHTML('beforeend', foodTemplate);
}
