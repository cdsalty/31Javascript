// console.log('sanity-check');
// 1. Target Container
// const container = document.querySelector("#container");
const container = document.getElementById('container');

// 2. create variable to assign number of squares
const numOfSquares = 500;

// 5a. Create a list/array of different colors to choose from
const blockColors = [
  '#795eff',
  '#ffa45e',
  '008080',
  '#95ff5e',
  '#f86576',
  '#8366f4',
  '#e9967a',
  '#aba2bd'
];

// 3. Loop through the squares (i < numOfSquares)
for (let i = 0; i < numOfSquares; i++) {
  // 3a. create a reference variable, 'container,' and assign it to a new div. (each div will serve as a square)
  const square = document.createElement('div');
  // 3b. create a class and assign it to the variable 'square' created above. (primarily for styling purposes)
  square.classList.add('square');

  // 4. Create 2 event listeners called 'mouseover' and 'mouseout.' Place as soon as the variables are created.
  square.addEventListener('mouseover', () => {
    // 4a. assign a function called 'setColorToElement' and pass in the square variable created. (next, will define the setColorToElement function)
    setColorToElement(square);
  });

  square.addEventListener('mouseout', () => {
    // 4(b). assign a function that will remove the color set inside the element and pass in the square class
    removeColorFromElement(square);
  });

  // 3c. using the container variable we created first thing, now attach the new div class="square" to the current div container
  container.appendChild(square);
}

// 5. Outside of the function, I need to create a function for setColorToElement(element)
function setColorToElement(element) {
  const color = getRandomColor();
  // take the color randomly selected above and assign it to an element's background color
  element.style.background = color;
  element.style.boxShadow = `0 0 2 ${color}, 0 0 10px ${color}`;
}

// 6. Need to remove the color from the element
function removeColorFromElement(element) {
  element.style.background = '#f0fabd';
  element.style.boxShadow = `0 0 2 ${color}, 0 0 10px ${color}`;
}

// 5c. create a function to GET a RANDOM color
function getRandomColor() {
  // return one, the index value of the randomly creeated colors,
  return blockColors[Math.floor(Math.random() * colors.length)];
}
