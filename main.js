window.onload = function() {
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
  colorTwo.style.backgroundColor = 'red';
  colorThree.style.backgroundColor = 'blue';
  colorFour.style.backgroundColor = 'green';
  colorBlack.className = 'color';
  colorTwo.className = 'color';
  colorThree.className = 'color';
  colorFour.className = 'color';
  divPalette.appendChild(colorBlack);
  divPalette.appendChild(colorTwo);
  divPalette.appendChild(colorFour);
  divPalette.appendChild(colorThree);
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

  body.appendChild(divPalette);

  const btnSortColors = document.createElement('button');
  btnSortColors.id = 'button-random-color';
  btnSortColors.innerText = 'Gerar cores aleatórias';
  const page25pixels = document.createElement('div');
  page25pixels.id = 'pixel-board';
  page25pixels.style.width = '25px';
  page25pixels.style.height = '25px';

  for (let i = 0; i < 5; i += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.width = '5px';
    pixel.height = '5px';
    pixel.style.backgroundColor = 'white';
    page25pixels.appendChild(pixel);
  }
  body.appendChild(page25pixels);
  body.appendChild(btnSortColors)


  // const sortColors = () => {
  //   const divColors = [colorTwo, colorThree, colorFour];
  //   let randomColors = [];
  //   for (let i = 0; i < 3; i += 1) {
  //     let index = Math.floor(Math.random() * divColors.length);
  //     randomColors.push(divColors[index]);
  //   }
  //   return randomColors;
  // }

  // const createColors = (elements, sortColors) => {
  //   let colors = sortColors(['green', 'blue', 'red', 'purple', 'pink', 'brown', 'grey']);
  //   for (let element of elements) {
  //     element.style.backgroundColor = colors[element];
  //     console.log(colors[element]);
  //   }
  // }


  // btnSortColors.addEventListener('click', createColors)
}
