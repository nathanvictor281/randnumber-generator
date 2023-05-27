// Range of numbers
const minNumber = 1;
const maxNumber = 18;
let randomNumber = null;
let generateButton;

// p5.js setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(64);
  textAlign(CENTER, CENTER);
  frameRate(1);

  generateButton = createButton('Generate Random Number');
  generateButton.addClass('generate-button');
  generateButton.position(width / 2 - generateButton.width / 2, height / 2 + 100);
  generateButton.mousePressed(generateRandomNumber);
}

// Generate a random number between min and max (inclusive)
function generateRandomNumber() {
  randomNumber = Math.floor(random(minNumber, maxNumber + 1));
}

// p5.js draw function
function draw() {
  // Create a cool gradient background
  setGradient(0, 0, width, height, color(60, 85, 170), color(16, 36, 109));

  if (randomNumber !== null) {
    // Create a pulsating effect for the text
    let size = map(sin(frameCount * 0.1), -1, 1, 48, 80);
    let colorR = map(sin(frameCount * 0.05), -1, 1, 0, 255);
    let colorG = map(cos(frameCount * 0.05), -1, 1, 0, 255);
    let colorB = map(sin(frameCount * 0.05), -1, 1, 0, 255);
    fill(colorR, colorG, colorB);
    textSize(size);

    // Display the modified text on the screen
    text("Mr. Gallant's Random Number Generator", width / 2, height / 2 - 100);
    text('Random Number: ' + randomNumber, width / 2, height / 2);
  }
}

// Resize canvas when the window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Helper function to create a gradient background
function setGradient(x, y, w, h, color1, color2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(color1, color2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}


