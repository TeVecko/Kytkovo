export const Plant = (props) => {
  const dnes = dayjs();

  const soucasnyMesic = new Date(dnes);
  const month = soucasnyMesic.getMonth();

  const plantElm = document.createElement('div');
  plantElm.classList.add('plant');

  const nameElm = document.createElement('h2');
  nameElm.textContent = props.name;
  nameElm.classList.add('name-plant');

  const latinNameElm = document.createElement('h2');
  latinNameElm.textContent = props.latinName;

  const imgPlant = document.createElement('img');
  imgPlant.classList.add('image-plant');
  imgPlant.src = props.src;

  const imgFlowering = document.createElement('img');
  imgFlowering.classList.add('image-flowering');
  imgFlowering.src = 'img/blossom-icon-edited.svg';
  imgFlowering.title = 'právě kvete';
  const flowering = props.flowering;
  for (let i = 0; i < flowering.length; i++) {
    const floweringI = flowering[i];
    console.log(floweringI);
    if (month === floweringI) {
      imgFlowering.className += ' visible';
      console.log(true);
    } else {
      console.log(false);
    }
  }

  const arrow = document.createElement('a');
  arrow.classList.add('link-to-plant');
  arrow.href = props.href;
  arrow.textContent = 'více';

  plantElm.appendChild(imgPlant);
  plantElm.appendChild(nameElm);
  //plantElm.appendChild(latinNameElm);
  plantElm.appendChild(imgFlowering);
  plantElm.appendChild(arrow);

  return plantElm;
};
