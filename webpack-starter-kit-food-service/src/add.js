// Реализуй функционал изменения темы при нажатии (событие change) на
// чекбокс input.js-switch-input в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы.
// Для хранения активной темы используй localStorage.
// Если при загрузке страницы тема темная, не забудь поставить свойство
// checked у чекбокса input.js-switch-input в true, чтобы ползунок сдвинулся
//  в правильное положение.
// Для удобства хранения списка тем используй такое перечисление Theme.
// import itemMenu from './menu.json';
// ==================
// обьект тем меню
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// обьект активизации тегов в html
const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input'),
  label: document.querySelector('.switch'),
};
// переменная currentTheme, значение которой берем из localStorage,
// текущее состояние темы меню(или светлая или темная)
let currentTheme = localStorage.getItem('currentTheme');
// устанавливаем начальное состояние темы меню
// если нет темы меню, то ...
//присваиваем начальную тему LIGHT
// записываем текущее начальное значение LIGHT в localStorage
// присваиваем текущую тему как класс, тегу body
// устанавливаем  позицию маркера input. при перезагрузки маркер
// будет в позиции нужной темы
if (!currentTheme) {
  refs.body.classList.add(Theme.LIGHT);
  localStorage.setItem('currentTheme', Theme.LIGHT);
} else {
  refs.body.classList.add(currentTheme);
  if (currentTheme !== Theme.LIGHT) refs.input.checked = true;
}
// функция перезаписи темы меню в память
// при клике на input

const inputClick = el => {
  el.preventDefault();
  refs.body.classList.remove(currentTheme);

  const newTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  currentTheme = newTheme;

  localStorage.setItem('currentTheme', currentTheme);

  refs.body.classList.add(currentTheme);
};

refs.label.addEventListener('change', inputClick); // вешаем функцию на слушатель событий
