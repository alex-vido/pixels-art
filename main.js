window.onload = () => {
  const body = document.querySelector('body');
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

  divPalette.style.display = 'flex';
  divPalette.style.height = '100px';
  divPalette.style.width = '400px';
  colorBlack.style.height = '100px';
  colorBlack.style.width = '100px';
  colorTwo.style.height = '100px';
  colorTwo.style.width = '100px';
  colorThree.style.height = '100px';
  colorThree.style.width = '100px';
  colorFour.style.height = '100px';
  colorFour.style.width = '100px';
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
  }

  const createColors = () => {
    const randomColors = sortColors();
    const randedColors = []
    for (let i = 0; i < divColors.length; i += 1) {
      divColors[i].style.backgroundColor = randomColors[i];
      randedColors.push(randomColors[i]);
      localStorage.setItem('backgroundColor', JSON.stringify(randedColors));
      console.log( localStorage.setItem('colorPalette', JSON.stringify(randedColors)));
    }
  };

  btnSortColors.addEventListener('click', createColors);

  const page25pixels = document.createElement('div');
  page25pixels.id = 'pixel-board';
  page25pixels.style.display = 'flex';
  page25pixels.style.width = '210px';
  page25pixels.style.height = '210px';
  page25pixels.style.flexWrap = 'wrap';

  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.backgroundColor = 'white';
    pixel.style.border = border;
    page25pixels.appendChild(pixel);
  }
  body.appendChild(page25pixels);
  body.appendChild(btnSortColors);

  const getBackgroundColor = JSON.parse(localStorage.getItem('colorPalette'));

  for (let i = 0; i < divColors.length; i += 1) {
    if (getBackgroundColor) {
      divColors[i].style.backgroundColor = getBackgroundColor [i];
    }
  }
};
