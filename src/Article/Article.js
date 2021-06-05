export const Article = (props) => {
  const plantElm = document.createElement('div');
  plantElm.classList.add('plant');

  const nameElm = document.createElement('h2');
  nameElm.textContent = props.name;
  nameElm.classList.add('name-plant');

  const imgPlant = document.createElement('img');
  imgPlant.classList.add('image-plant');
  imgPlant.src = props.src;

  const arrow = document.createElement('a');
  arrow.classList.add('link-to-plant');
  arrow.href = props.href;
  arrow.textContent = 'více';

  plantElm.appendChild(imgPlant);
  plantElm.appendChild(nameElm);
  plantElm.appendChild(arrow);

  return plantElm;
};
