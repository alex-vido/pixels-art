// window.onload = () => {
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
  colorBlack.classList.add('selected');
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
  body.appendChild(btnClearPixels)
  body.appendChild(btnSortColors);

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

  const changeSizePixels = () => {
    numberOfPixels = input.value;
    const pixels = document.getElementsByClassName('pixel');
    if (numberOfPixels === '') {
      alert("Board inválido!")
    } else {
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
  }
}

    btnChangeSizePixels.addEventListener('click', changeSizePixels);
    division.appendChild(input);
    division.appendChild(btnChangeSizePixels);
    body.appendChild(pagePixels);


  body.appendChild(pagePixels);

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
// };

  // const division = document.createElement('div');
  // division.style.marginBottom = '1rem';
  // body.appendChild(division);
  // const input = document.createElement('input');
  // input.minLength = 1;
  // input.id = 'board-size';
  // const btnChangeSizePixels = document.createElement('button');
  // btnChangeSizePixels.id = 'generate-board';
  // btnChangeSizePixels.innerText = 'VQV';

  // const changeSizePixels = () => {
  //   numberOfPixels = input.value;
  //   if (numberOfPixels === '') {
  //     alert("Board inválido!")
  //   } else {
  //     numberOfPixelsMult = numberOfPixels * pixelSize;
  //     pagePixels.style.width = numberOfPixelsMult + 'px';
  //     pagePixels.style.height = numberOfPixelsMult + 'px';
  //     const lines = document.getElementsByClassName('line');
  //     for (let i = lines.length - 1; i >= 0; i -= 1) {
  //       pagePixels.removeChild(lines[i]);
  //     }
  //     body.removeChild(pagePixels);

  //     for (let i = 0; i < numberOfPixels; i += 1) {
  //       const line= document.createElement('div');
  //       for (let j = 0; j < numberOfPixels; j += 1) {
  //         const pixel = document.createElement('div');
  //         pixel.className = 'pixel';
  //         pixel.style.width = '40px';
  //         pixel.style.height = '40px';
  //         pixel.style.backgroundColor = 'white';
  //         pixel.style.border = border;
  //         pixel.addEventListener('click', changeColor);
  //         line.appendChild(pixel);
  //       }
  //       pagePixels.appendChild(line);
  //     }
  //     body.appendChild(pagePixels);
  //   }
  // }

  //   btnChangeSizePixels.addEventListener('click', changeSizePixels);
  //   division.appendChild(input);
  //   division.appendChild(btnChangeSizePixels);
  //   body.appendChild(pagePixels);
