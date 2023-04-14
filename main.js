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
  divPalette.style.height = '200px';
  divPalette.style.width = '200px';
  colorBlack.style.height = '100px';
  colorBlack.style.width = '100px';
  colorTwo.style.height = '100px';
  colorTwo.style.width = '100px';
  colorThree.style.height = '100px';
  colorThree.style.width = '100px';
  colorFour.style.height = '100px';
  colorFour.style.width = '100px';
  colorBlack.style.border = 'black 1px solid'
  colorTwo.style.border = 'black 1px solid'
  colorThree.style.border = 'black 1px solid'
  colorFour.style.border = 'black 1px solid'

  const divColors = [colorTwo, colorThree, colorFour];
  const colors = ['green', 'blue', 'red', 'purple', 'pink', 'brown', 'grey']

  const sortColors = (arr) => {
    let randomColors = [];
    for (let i = 0; i < 3; i += 1) {
      random = Math.floor(Math.random() * arr.length);
    }
    randomColors.push(arr[random]);
    return randomColors;
  }

  const createColors = (elements, sortColors) => {
    for (let element of elements) {
      element.style.backgroundColor
    }
  }
  body.appendChild(divPalette);
}
