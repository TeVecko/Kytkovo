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

const january = 0;
const february = 1;
const march = 2;
const april = 3;
const may = 4;
const june = 5;
const july = 6;
const august = 7;
const september = 8;
const october = 9;
const november = 10;
const december = 11;

const mint = Plant({
  name: 'Máta',
  latinName: 'Mentha',
  src: './img/moroccan-mint.jpg',
  flowering: [april, june, may],
});

const overviewElm = document.querySelector('#overview');
overviewElm.appendChild(mint);
