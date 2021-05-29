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
  name: 'Máta klasnatá',
  latinName: 'Mentha spicata',
  src: './img/moroccan-mint.jpg',
  flowering: [june, july, august, september],
  href: 'Plants/mint.html',
});

const mandevila = Plant({
  name: 'Mandevila Sanderova',
  latinName: 'Mandevilla sanderi',
  src: './img/mandevila.jpg',
  flowering: [may, june, july, august, september],
});

const potosovec = Plant({
  name: 'Potosovec zlatý',
  latinName: 'Epipremnum aureum',
  src: './img/potosovec.jpg',
  flowering: [],
});

const overviewElm = document.querySelector('#overview');
const library = document.querySelector('#overview');
if (library) {
  overviewElm.appendChild(mint);
  overviewElm.appendChild(mandevila);
  overviewElm.appendChild(potosovec);
}
