import './sass/main.scss';
import eatCard from './template/eat-cards.hbs';
import menu from './menu.json';


const eatMenu = document.querySelector('.js-menu')

function createEatCards(menu) {
       return menu.map(eatCard).join('')
}

const cardsMarkup = createEatCards(menu);

eatMenu.insertAdjacentHTML('beforeend', cardsMarkup);
