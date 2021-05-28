import './style.css';
import { Plant } from './Plant/Plant';

console.log('funguju!');

const menu = document.querySelector('.nav-btn');

menu.addEventListener('click', (event) => {
  const open = document.querySelector('#hamburger');
  open.classList.toggle('hamburger-opened');
  const close = document.querySelector('.nav-btn');
  close.classList.toggle('nav-btn--opened');
  const topStripe = document.querySelector('#navigation');
  topStripe.classList.toggle('stripe-opened');
});

const overviewElm = document.querySelector('#');
overviewElm.appendChild(
  Plant({
    nazev: 'Máta',
  }),
);
