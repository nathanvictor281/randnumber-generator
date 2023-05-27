// p5.js setup function
function setup() {
  noCanvas();

  const generateButton = select('#generateButton');
  generateButton.mousePressed(generateRandomNumber);
}

// Generate a random number
function generateRandomNumber() {
  const minNumber = parseInt(select('#minNumber').value());
  const maxNumber = parseInt(select('#maxNumber').value());

  const randomNumber = Math.floor(random(minNumber, maxNumber + 1));
  
  const numberDisplay = select('#numberDisplay');
  numberDisplay.html(randomNumber);
}


