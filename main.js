// window.onload = () => {
const body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.flexDirection = 'column'
body.style.backgroundImage = 'url(./paissagem.jpg)'
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'center';
body.style.height = 'calc(100vh - 1rem)'
body.style.color = 'rgb(253, 244, 245)'
const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';
body.appendChild(title);
const divPalette = document.createElement('div');
divPalette.id = 'color-palette';
const colorBlack = document.createElement('div');
const colorTwo = document.createElement('div');
const colorThree = document.createElement('div');
const colorFour = document.createElement('div');
colorBlack.style.backgroundColor = 'black';
colorTwo.style.backgroundColor = 'pink';
colorThree.style.backgroundColor = 'green';
colorFour.style.backgroundColor = 'yellow';
colorBlack.className = 'color';
colorTwo.className = 'color';
colorThree.className = 'color';
colorFour.className = 'color';
colorBlack.classList.add('selected');
divPalette.style.display = 'flex';
divPalette.style.height = '50px';
divPalette.style.width = '200px';
colorBlack.style.height = '50px';
colorBlack.style.width = '200px';
colorTwo.style.height = '50px';
colorTwo.style.width = '200px';
colorThree.style.height = '50px';
colorThree.style.width = '200px';
colorFour.style.height = '50px';
colorFour.style.width = '200px';
const border = 'black 1px solid';
colorBlack.style.border = border;
colorTwo.style.border = border;
colorThree.style.border = border;
colorFour.style.border = border;
divPalette.appendChild(colorBlack);
divPalette.appendChild(colorTwo);
divPalette.appendChild(colorFour);
divPalette.appendChild(colorThree);
body.appendChild(divPalette);
let elementSelected = document.querySelector('.selected');
let colorSelected = elementSelected.style.backgroundColor;

const btnSortColors = document.createElement('button');
btnSortColors.id = 'button-random-color';
btnSortColors.innerText = 'Cores aleatórias';

const divColors = [colorTwo, colorThree, colorFour];

const sortColors = () => {
  const randomColors = [];
  const colors = ['green', 'blue', 'red', 'purple', 'pink', 'brown', 'grey'];
  for (let i = 0; i < divColors.length; i += 1) {
    const index = Math.floor(Math.random() * colors.length);
    randomColors.push(colors[index]);
    colors.splice(index, 1);
  }
  return randomColors;
};

const createColors = () => {
  const randomColors = sortColors();
  const randedColors = [];
  for (let i = 0; i < divColors.length; i += 1) {
    divColors[i].style.backgroundColor = randomColors[i];
    randedColors.push(randomColors[i]);
    localStorage.setItem('colorPalette', JSON.stringify(randedColors));
  }
};

btnSortColors.addEventListener('click', createColors);

const pagePixels = document.createElement('div');
pagePixels.id = 'pixel-board';
pagePixels.style.display = 'grid';
pagePixels.style.gridTemplateColumns = 'repeat(5, 41px)';
pagePixels.style.gridTemplateRows = 'repeat(5, 41px)';

const changeColor = (e) => {
  e.target.style.backgroundColor = colorSelected;
  const pixels = document.getElementsByClassName('pixel')
  const backgroundColorPixels = []
  for (let i = 0; i < pixels.length; i += 1) {
    backgroundColorPixels.push(pixels[i].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(backgroundColorPixels));
  return backgroundColorPixels;
};

for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.width = '40px';
  pixel.style.height = '40px';
  pixel.style.backgroundColor = 'white';
  pixel.style.border = border;
  pagePixels.appendChild(pixel);
  pixel.addEventListener('click', changeColor);
  };

const btnClearPixels = document.createElement('button');
btnClearPixels.id = 'clear-board';
btnClearPixels.innerText = 'Limpar';
const divBtn = document.createElement('div');
divBtn.style.margin = '1rem 0';
body.appendChild(divBtn)
divBtn.appendChild(btnClearPixels)
divBtn.appendChild(btnSortColors);

const division = document.createElement('div');
division.style.marginBottom = '1rem';
body.appendChild(division);
const input = document.createElement('input');
input.type = 'number';
input.min = '1';
input.id = 'board-size';
const btnChangeSizePixels = document.createElement('button');
btnChangeSizePixels.id = 'generate-board';
btnChangeSizePixels.innerText = 'VQV';

let numberOfPixels;

const limiter = () => {
  numberOfPixels;
  if (input.value === '') {
    alert("Board inválido!")
  } else if (input.value < 5) {
    numberOfPixels = 5;
  } else if (input.value > 50) {
    numberOfPixels = 50;
  } else {
    numberOfPixels = input.value;
  }
  localStorage.setItem('boardSize', numberOfPixels);
  input.value = '';
  return numberOfPixels;
}

const changeSizePixels = () => {
  numberOfPixels = limiter();
  const pixels = document.getElementsByClassName('pixel');
  pagePixels.style.gridTemplateColumns = `repeat(${numberOfPixels}, 41px)`;
  pagePixels.style.gridTemplateRows = `repeat(${numberOfPixels}, 41px)`;

  for (let i = pixels.length - 1; i >= 0; i -= 1) {
    pagePixels.removeChild(pixels[i]);
  }
  body.removeChild(pagePixels);

  for (let i = 0; i < numberOfPixels * numberOfPixels; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.backgroundColor = 'white';
    pixel.style.border = border;
    pixel.addEventListener('click', changeColor);
    pagePixels.appendChild(pixel);
  }
body.appendChild(pagePixels);
};

btnChangeSizePixels.addEventListener('click', changeSizePixels);
division.appendChild(input);
division.appendChild(btnChangeSizePixels);
body.appendChild(pagePixels);

body.appendChild(pagePixels);

const btns = document.getElementsByTagName('button');
for (let i = 0; i < btns.length; i += 1) {
  btns[i].style.backgroundColor = 'rgb(253, 244, 245)';
  btns[i].style.color = 'rgb(45, 39, 39)';
  btns[i].style.border = 'none';
  btns[i].style.borderRadius = '15px';
  btns[i].style.margin = '0 2px';
  btns[i].style.padding = '0.3rem 0.5rem';
}

const getBackgroundColor = JSON.parse(localStorage.getItem('colorPalette'));

for (let i = 0; i < divColors.length; i += 1) {
  if (getBackgroundColor) {
    divColors[i].style.backgroundColor = getBackgroundColor[i];
  }
}
const elements = [colorBlack, colorTwo, colorThree, colorFour];

const getBackgroundColorPixels = JSON.parse(localStorage.getItem('pixelBoard'));
const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  if(getBackgroundColorPixels) {
    pixels[i].style.backgroundColor = getBackgroundColorPixels[i];
  }
}

const getBoardSize = localStorage.getItem('boardSize');
if(getBoardSize) {
  input.value = getBoardSize;
  changeSizePixels();
}

const elSelected = (e) => {
  elementSelected.classList.remove('selected');
  e.target.classList.add('selected');
  elementSelected = e.target;
  colorSelected = e.target.style.backgroundColor;
};

for (let i = 0; i < elements.length; i += 1) {
  elements[i].addEventListener('click', elSelected);
}

const clearPixels = () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

btnClearPixels.addEventListener('click', clearPixels);
