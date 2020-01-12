// 1. create a Target Container
// const container = document.querySelector("#container");
const container = document.getElementById('container');

// 2. create variable to assign number of squares
const numOfSquares = 500;

const blockColors = [
  '#ffa45e',
  '008080',
  '#95ff5e',
  '#f86576',
  '#8366f4',
  '#e9967a',
  '#aba2bd',
  '#60221f',
  '#fcfcfc',
  'yellow'
];

// 3. Loop through the squares (i < numOfSquares)
for (let i = 0; i < numOfSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColorToElement(square);
  });

  square.addEventListener('mouseout', () => {
    removeColorFromElement(square);
  });
  container.appendChild(square);
}

// Functionality
function setColorToElement(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromElement(element) {
  element.style.background = '#f0fabd';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return blockColors[Math.floor(Math.random() * blockColors.length)];
}
