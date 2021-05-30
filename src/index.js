import './style.css';
import { Plant } from './Plant/Plant';
import { Article } from './Article/Article';

const menu = document.querySelector('.nav-btn');

menu.addEventListener('click', (event) => {
  const open = document.querySelector('#hamburger');
  open.classList.toggle('hamburger-opened');
  const close = document.querySelector('.nav-btn');
  close.classList.toggle('nav-btn--opened');
  const topStripe = document.querySelector('#navigation');
  topStripe.classList.toggle('stripe-opened');
  const arrowDown = document.querySelector('.arrow-down');
  arrowDown.classList.toggle('arrow-down--hidden');
});

const btnPrint = document.querySelector('#btn-print');
if (btnPrint) {
  btnPrint.addEventListener('click', (event) => {
    window.print();
  });
}

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

const listPlant = {
  mint: {
    name: 'Máta klasnatá',
    latinName: 'Mentha spicata',
    src: './img/mint-table.jpg',
    flowering: [june, july, august, september],
    href: 'Plants/mint.html',
  },
  mandevila: {
    name: 'Mandevila Sanderova',
    latinName: 'Mandevilla sanderi',
    src: './img/mandevila.jpg',
    flowering: [may, june, july, august, september],
    href: '',
  },
  potosovec: {
    name: 'Potosovec zlatý',
    latinName: 'Epipremnum aureum',
    src: './img/pothos-unsplash.jpg',
    flowering: [],
    href: '',
  },
  sunflower: {
    name: 'Slunečnice roční',
    latinName: 'Helianthus annuus',
    src: './img/sunflower.jpg',
    flowering: [july, august],
    href: '',
  },
};

const overviewElm = document.querySelector('#overview');
const library = document.querySelector('#overview');
if (library) {
  overviewElm.appendChild(Plant(listPlant.mint));
  overviewElm.appendChild(Plant(listPlant.mandevila));
  overviewElm.appendChild(Plant(listPlant.potosovec));
  overviewElm.appendChild(Plant(listPlant.sunflower));
}

// Filtrování
const lists = [
  { name: 'mint', type: 'bylinky', poison: 'false' },
  { name: 'mandevila', type: 'venkovky', poison: 'true' },
  { name: 'potosovec', type: 'pokojovky', poison: 'true' },
  { name: 'sunflower', type: 'venkovky', poison: 'false' },
];

const button = document.querySelector('.button-filter');
button.addEventListener('click', function () {
  const deleteAll = document.querySelectorAll('.plant');
  deleteAll.forEach((plant) => {
    plant.remove();
  });
  const type = document.getElementById('type');
  const poison = document.getElementById('poison');
  const valueType = type.value;
  const valuePoison = poison.value;

  const result = lists.filter((list) => list.type === valueType);
  const resultTwo = result.filter((list) => list.poison === valuePoison);
  const jmena = resultTwo;
  jmena.forEach((jmeno) => {
    const overviewElm = document.querySelector('#overview');
    const library = document.querySelector('#overview');
    let name = jmeno.name;

    if (library) {
      overviewElm.appendChild(Plant(listPlant[name]));
    }
  });
});

// Články
const aphids = Article({
  name: 'Jak se zbavit mšic',
  src: './img/aphids.jpg',
  href: 'Articles/aphids.html',
});

const articleElm = document.querySelector('#blog');
const blog = document.querySelector('#blog');
if (blog) {
  articleElm.appendChild(aphids);
}
