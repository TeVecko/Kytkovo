import './style.css';

console.log('funguju!');

const menu = document.querySelector('.nav-btn');

menu.addEventListener('click', (event) => {
  const navigation = document.querySelector('#hamburger');
  navigation.classList.toggle('hamburger-opened');
  const iconCross = document.querySelector('.nav-btn');
  iconCross.classList.toggle('nav-btn--opened');
});
