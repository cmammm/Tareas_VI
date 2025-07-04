let capture;
let canvas;
let sideImage;

function preload() {
  sideImage = loadImage('assets/frase.jpg');
}

function setup() {
  canvas = createCanvas(900, 600);
  canvas.style('position', 'absolute');
  canvas.style('top', '50%');
  canvas.style('left', '50%');
  canvas.style('transform', 'translate(-50%, -50%)');
  
  capture = createCapture(VIDEO, {flipped:true});
  capture.size(450, 600);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, 450, 600);
  image(sideImage, 470, 100, 360, 400);
}
