export const Plant = (props) => {
  const plantElm = document.createElement('div');
  plantElm.classList.add('plant');

  const nadpisElm = document.createElement('h2');
  nadpisElm.textContent = props.nazev;

  const imgPlant = document.createElement('img');
  imgPlant.classList.add('image-plant');
  imgPlant.src = 'src/img/moroccan-mint.jpg';

  const arrow = document.createElement('button');
  arrow.textContent = 'Zobrazit';

  plantElm.appendChild(nadpisElm);
  plantElm.appendChild(imgPlant);
  plantElm.appendChild(arrow);

  return plantElm;
};
