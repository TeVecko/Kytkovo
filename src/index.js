import './style.css';
import { Plant } from './Plant/Plant';
import { Article } from './Article/Article';

// Hamburger menu
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

// Tisk plánovače
const btnPrint = document.querySelector('#btn-print');
if (btnPrint) {
  btnPrint.addEventListener('click', (event) => {
    window.print();
  });
}

// Měsíce k právě kvete
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

// Přehled rostlin
const listPlant = {
  aglaonema: {
    name: 'Aglaonema čínská',
    latinName: 'Aglaonema commutatum',
    src: './img/aglaonema.jpg',
    flowering: [],
    href: 'Plants/aglaonema.html/#view-plant',
  },
  aloeVera: {
    name: 'Aloe pravá',
    latinName: 'Aloe vera',
    src: './img/aloe-vera.jpg',
    flowering: [july, august],
    href: 'Plants/aloe-vera.html/#view-plant',
  },
  basil: {
    name: 'Bazalka pravá',
    latinName: 'Ocimum basilicum',
    src: './img/basil.jpg',
    flowering: [june, july, august, september],
    href: 'Plants/basil.html/#view-plant',
  },
  cyclamen: {
    name: 'Brambořík',
    latinName: 'Cyclamen sp.',
    src: './img/cyclamen.jpg',
    flowering: [march, april],
    href: 'Plants/cyclamen.html/#view-plant',
  },
  hyacinth: {
    name: 'Hyacint východní',
    latinName: '	Hyacinthus orientalis',
    src: './img/hyacinth.jpg',
    flowering: [april, may],
    href: 'Plants/hyacinth.html/#view-plant',
  },
  ivy: {
    name: 'Břečťan obecný',
    latinName: 'Hedera helix',
    src: './img/ivy.jpg',
    flowering: [september, october],
    href: 'Plants/ivy.html/#view-plant',
  },
  garlic: {
    name: 'Česnek medvědí',
    latinName: 'Allium ursinum',
    src: './img/garlic.jpg',
    flowering: [may, june],
    href: 'Plants/garlic.html/#view-plant',
  },
  echeveria: {
    name: 'Echeverie',
    latinName: 'Echeveria derenbergii',
    src: './img/echeveria.jpg',
    flowering: [april, may, june, july],
    href: 'Plants/echeveria.html/#view-plant',
  },
  fuchsia: {
    name: 'Fuchsie',
    latinName: 'Fuchsia sp.',
    src: './img/fuchsia.jpg',
    flowering: [may, june, july, august, september],
    href: 'Plants/fuchsia.html/#view-plant',
  },
  chamaecereus: {
    name: 'Chamécereus',
    latinName: 'Chamaecereus silvestri',
    src: './img/chamaecereus.jpg',
    flowering: [july, august],
    href: 'Plants/chamaecereus.html/#view-plant',
  },
  jasmine: {
    name: 'Jasmín mnohokvětý',
    latinName: 'Jasminum polyanthum',
    src: './img/jasmine.jpg',
    flowering: [april, may, june],
    href: 'Plants/jasmine.html/#view-plant',
  },
  kalatea: {
    name: 'Kalatea',
    latinName: 'Calathea makoyana',
    src: './img/kalatea.jpg',
    flowering: [],
    href: 'Plants/kalatea.html/#view-plant',
  },
  lavender: {
    name: 'Levandule lékařská',
    latinName: 'Lavandula angustifolia',
    src: './img/lavender.jpg',
    flowering: [july, august],
    href: 'Plants/lavender.html/#view-plant',
  },
  lotus: {
    name: 'Lotos indický',
    latinName: 'Nelumbo nucifera',
    src: './img/lotus.jpg',
    flowering: [],
    href: 'Plants/lotus.html/#view-plant',
  },
  maranta: {
    name: 'Maranta běložilná',
    latinName: 'Maranta leuconeura erythroneura',
    src: './img/maranta.jpg',
    flowering: [],
    href: 'Plants/maranta.html/#view-plant',
  },
  foxglove: {
    name: 'Náprstník červený',
    latinName: 'Digitalis purpurea',
    src: './img/foxglove.jpg',
    flowering: [june, july, august],
    href: 'Plants/foxglove.html/#view-plant',
  },
  melissa: {
    name: 'Meduňka lékařská',
    latinName: 'Melissa officinalis',
    src: './img/melissa.jpg',
    flowering: [june, july, august],
    href: 'Plants/melissa.html/#view-plant',
  },
  mint: {
    name: 'Máta klasnatá',
    latinName: 'Mentha spicata',
    src: './img/mint-table.jpg',
    flowering: [june, july, august, september],
    href: 'Plants/mint.html/#view-plant',
  },
  mandevila: {
    name: 'Mandevila Sanderova',
    latinName: 'Mandevilla sanderi',
    src: './img/mandevila.jpg',
    flowering: [may, june, july, august, september],
    href: 'Plants/mandevila.html/#view-plant',
  },
  monstera: {
    name: 'Monstera',
    latinName: 'Monstera deliciosa',
    src: './img/monstera.jpg',
    flowering: [],
    href: 'Plants/monstera.html/#view-plant',
  },
  allium: {
    name: 'Pažitka pobřežní',
    latinName: 'Allium schoenoprasum',
    src: './img/allium.jpg',
    flowering: [june, july],
    href: 'Plants/allium.html/#view-plant',
  },
  potosovec: {
    name: 'Potosovec zlatý',
    latinName: 'Epipremnum aureum',
    src: './img/pothos-unsplash.jpg',
    flowering: [],
    href: 'Plants/potosovec.html/#view-plant',
  },
  euphorbia: {
    name: 'Pryšec nádherný',
    latinName: 'Euphorbia pulcherrima',
    src: './img/euphorbia.jpg',
    flowering: [december, january],
    href: 'Plants/euphorbia.html/#view-plant',
  },
  stapelia: {
    name: 'Smrdutka',
    latinName: 'Stapelia gigantea',
    src: './img/stapelia.jpg',
    flowering: [june, july, august],
    href: 'Plants/stapelia.html/#view-plant',
  },
  sunflower: {
    name: 'Slunečnice roční',
    latinName: 'Helianthus annuus',
    src: './img/sunflower.jpg',
    flowering: [july, august],
    href: 'Plants/sunflower.html/#view-plant',
  },
  hoya: {
    name: 'Voskovka',
    latinName: 'Hoya bella',
    src: './img/hoya.jpg',
    flowering: [april, may, june, july],
    href: 'Plants/hoya.html/#view-plant',
  },
  campanula: {
    name: 'Zvonek karpatský',
    latinName: 'Campanula carpatica',
    src: './img/campanula.jpg',
    flowering: [june, july],
    href: 'Plants/campanula.html/#view-plant',
  },
};

const overviewElm = document.querySelector('#overview');
const library = document.querySelector('#overview');
if (library) {
  overviewElm.appendChild(Plant(listPlant.aglaonema));
  overviewElm.appendChild(Plant(listPlant.aloeVera));
  overviewElm.appendChild(Plant(listPlant.basil));
  overviewElm.appendChild(Plant(listPlant.cyclamen));
  overviewElm.appendChild(Plant(listPlant.ivy));
  overviewElm.appendChild(Plant(listPlant.garlic));
  overviewElm.appendChild(Plant(listPlant.echeveria));
  overviewElm.appendChild(Plant(listPlant.fuchsia));
  overviewElm.appendChild(Plant(listPlant.hyacinth));
  overviewElm.appendChild(Plant(listPlant.chamaecereus));
  overviewElm.appendChild(Plant(listPlant.jasmine));
  overviewElm.appendChild(Plant(listPlant.kalatea));
  overviewElm.appendChild(Plant(listPlant.lavender));
  overviewElm.appendChild(Plant(listPlant.lotus));
  overviewElm.appendChild(Plant(listPlant.mandevila));
  overviewElm.appendChild(Plant(listPlant.maranta));
  overviewElm.appendChild(Plant(listPlant.mint));
  overviewElm.appendChild(Plant(listPlant.melissa));
  overviewElm.appendChild(Plant(listPlant.monstera));
  overviewElm.appendChild(Plant(listPlant.foxglove));
  overviewElm.appendChild(Plant(listPlant.allium));
  overviewElm.appendChild(Plant(listPlant.potosovec));
  overviewElm.appendChild(Plant(listPlant.euphorbia));
  overviewElm.appendChild(Plant(listPlant.sunflower));
  overviewElm.appendChild(Plant(listPlant.stapelia));
  overviewElm.appendChild(Plant(listPlant.hoya));
  overviewElm.appendChild(Plant(listPlant.campanula));
}

// Filtrování rostlin
const lists = [
  {
    name: 'aglaonema',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'stín',
    water: 'střední',
    poison: 'true',
  },
  {
    name: 'aloeVera',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'plné slunce',
    water: 'střední',
    poison: 'true',
  },
  {
    name: 'basil',
    type: 'bylinky',
    difficult: 'false',
    sun: 'polostín',
    water: 'vyšší',
    poison: 'false',
  },
  {
    name: 'cyclamen',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'polostín',
    water: 'střední',
    poison: 'true',
  },
  {
    name: 'hyacinth',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'plné slunce',
    water: 'střední',
    poison: 'true',
  },
  {
    name: 'ivy',
    type: 'venkovky',
    difficult: 'false',
    sun: 'stín',
    water: 'vyšší',
    poison: 'true',
  },
  {
    name: 'garlic',
    type: 'bylinky',
    difficult: 'false',
    sun: 'polostín',
    water: 'vyšší',
    poison: 'false',
  },
  {
    name: 'jasmine',
    type: 'venkovky',
    difficult: 'true',
    sun: 'plné slunce',
    water: 'vyšší',
    poison: 'false',
  },
  {
    name: 'echeveria',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'plné slunce',
    water: 'nižší',
    poison: 'false',
  },
  {
    name: 'fuchsia',
    type: 'venkovky',
    difficult: 'false',
    sun: 'polostín',
    water: 'střední',
    poison: 'false',
  },
  {
    name: 'chamaecereus',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'plné slunce',
    water: 'nižší',
    poison: 'true',
  },
  {
    name: 'kalatea',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'polostín',
    water: 'vyšší',
    poison: 'false',
  },
  {
    name: 'lavender',
    type: 'bylinky',
    difficult: 'false',
    sun: 'plné slunce',
    water: 'střední',
    poison: 'false',
  },
  {
    name: 'lotus',
    type: 'venkovky',
    difficult: 'true',
    sun: 'plné slunce',
    water: 'vyšší',
    poison: 'false',
  },
  {
    name: 'maranta',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'polostín',
    water: 'vyšší',
    poison: 'false',
  },
  {
    name: 'melissa',
    type: 'bylinky',
    difficult: 'false',
    sun: 'plné slunce',
    water: 'vyšší',
    poison: 'false',
  },
  {
    name: 'mint',
    type: 'bylinky',
    difficult: 'false',
    sun: 'polostín',
    water: 'vyšší',
    poison: 'false',
  },
  {
    name: 'mandevila',
    type: 'venkovky',
    difficult: 'false',
    sun: 'polostín',
    water: 'střední',
    poison: 'true',
  },
  {
    name: 'monstera',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'polostín',
    water: 'střední',
    poison: 'true',
  },
  {
    name: 'foxglove',
    type: 'bylinky',
    difficult: 'false',
    sun: 'plné slunce',
    water: 'vyšší',
    poison: 'true',
  },
  {
    name: 'allium',
    type: 'bylinky',
    difficult: 'false',
    sun: 'polostín',
    water: 'střední',
    poison: 'false',
  },
  {
    name: 'potosovec',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'polostín',
    water: 'střední',
    poison: 'true',
  },
  {
    name: 'euphorbia',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'polostín',
    water: 'nižší',
    poison: 'true',
  },
  {
    name: 'sunflower',
    type: 'venkovky',
    difficult: 'true',
    sun: 'plné slunce',
    water: 'vyšší',
    poison: 'false',
  },
  {
    name: 'stapelia',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'stín',
    water: 'střední',
    poison: 'true',
  },
  {
    name: 'hoya',
    type: 'pokojovky',
    difficult: 'false',
    sun: 'plné slunce',
    water: 'střední',
    poison: 'false',
  },
  {
    name: 'campanula',
    type: 'venkovky',
    difficult: 'false',
    sun: 'plné slunce',
    water: 'střední',
    poison: 'false',
  },
];

const button = document.querySelector('.button-filter');
if (button) {
  button.addEventListener('click', function () {
    const deleteAll = document.querySelectorAll('.plant');
    deleteAll.forEach((plant) => {
      plant.remove();
    });
    const type = document.getElementById('type');
    const difficulty = document.getElementById('difficulty');
    const sun = document.getElementById('sun');
    const water = document.getElementById('water');
    const poison = document.getElementById('poison');
    const valueType = type.value;
    const valueDifficulty = difficulty.value;
    const valueSun = sun.value;
    const valueWater = water.value;
    const valuePoison = poison.value;

    const resultType = lists.filter((list) => list.type === valueType);
    const resultDifficulty = resultType.filter(
      (list) => list.difficult === valueDifficulty,
    );

    const resultSun = resultDifficulty.filter((list) => list.sun === valueSun);
    const resultWater = resultSun.filter((list) => list.water === valueWater);
    const resultPoison = resultWater.filter(
      (list) => list.poison === valuePoison,
    );
    const jmena = resultPoison;
    jmena.forEach((jmeno) => {
      const overviewElm = document.querySelector('#overview');
      const library = document.querySelector('#overview');
      let name = jmeno.name;

      if (library) {
        overviewElm.appendChild(Plant(listPlant[name]));
      }
    });
  });
}

// Články
const toxicityArticle = Article({
  name: 'Toxicita pokojovek a domácí mazlíčci',
  src: './img/blog-cat.jpg',
  href: 'Articles/toxicity-article.html#view-article',
});

const monsteraArticle = Article({
  name: 'Co potřebujete vědět o monsteře',
  src: './img/blog-monstera.jpg',
  href: 'Articles/monstera-article.html#view-article',
});

const shadowArticle = Article({
  name: 'Kterým pokojovkám nevadí stín?',
  src: './img/blog-snake-plant.jpg',
  href: 'Articles/shadow-article.html#view-article',
});

const articleElm = document.querySelector('#blog');
const blog = document.querySelector('#blog');
if (blog) {
  articleElm.appendChild(toxicityArticle);
  articleElm.appendChild(monsteraArticle);
  articleElm.appendChild(shadowArticle);
}
