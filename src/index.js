import './sass/main.scss';
import templateEatCard from './template/template-eat-card.hbs';
import menu from './menu.json';

const eatMenu = document.querySelector('.js-menu');
const swich = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('.body');

function createEatCards(menu) {
  return menu.map(templateEatCard).join('');
}

const cardsMarkup = createEatCards(menu);

eatMenu.insertAdjacentHTML('beforeend', cardsMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

swich.addEventListener('change', onChangeTheme);

function onChangeTheme(event) {
  if (event.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }
  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

document.body.classList.add(localStorage.getItem('theme') === null
  ? Theme.LIGHT
  : localStorage.getItem('theme')
);

swich.checked = localStorage.getItem('theme') === Theme.DARK;