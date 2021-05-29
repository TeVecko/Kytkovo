export const Article = (props) => {
  const plantElm = document.createElement('div');
  plantElm.classList.add('plant');

  const nameElm = document.createElement('h2');
  nameElm.textContent = props.name;

  const imgPlant = document.createElement('img');
  imgPlant.classList.add('image-plant');
  imgPlant.src = props.src;

  const arrow = document.createElement('a');
  arrow.classList.add('arrow');
  arrow.href = props.href;
  arrow.textContent = 'šipka';

  plantElm.appendChild(nameElm);
  plantElm.appendChild(imgPlant);
  plantElm.appendChild(arrow);

  return plantElm;
};
