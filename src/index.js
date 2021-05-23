import './style.css';
import { Plant } from './Plant/Plant';

console.log('funguju!');

const menu = document.querySelector('.nav-btn');

menu.addEventListener('click', (event) => {
  const navigation = document.querySelector('#hamburger');
  navigation.classList.toggle('hamburger-opened');
  const iconCross = document.querySelector('.nav-btn');
  iconCross.classList.toggle('nav-btn--opened');
});

const overviewElm = document.querySelector('#');
overviewElm.appendChild(
  Plant({
    nazev: 'Máta',
  }),
);
