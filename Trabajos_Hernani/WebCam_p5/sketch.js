let capture;
let canvas;

function setup() {
  canvas = createCanvas(450, 600);
  canvas.style('position', 'absolute');
  canvas.style('top', '50%');
  canvas.style('left', '50%');
  canvas.style('transform', 'translate(-50%, -50%)');
  capture = createCapture(VIDEO, {flipped:true});
  capture.size(450, 600);
  capture.hide();
}

function draw() {
  background(220);
  image(capture, 0, 0);
}
