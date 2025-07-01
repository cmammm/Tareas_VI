let spacing = 50;
let gridDepth = 800;
let speed = 2;
let zOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0, 0, 110); // Fondo azul

  zOffset += speed;

  rotateX(PI / 2.3);
  translate(-width / 2, 0, 0);

  // Suelo gris (rectángulo)
  push();
  //fill(5,5,255); // Gris medio
  noStroke();
  rect(0, 0, width, gridDepth);
  pop();

  // Dibuja las líneas de la cuadrícula encima
  stroke(137,137,137); // Líneas negras
  strokeWeight(1.5);
  noFill();

  // Líneas horizontales
  for (let z = 0; z < gridDepth; z += spacing) {
    let zPos = (z + zOffset) % gridDepth;
    line(0, zPos, width, zPos);
  }

  // Líneas verticales
  for (let x = 0; x <= width; x += spacing) {
    line(x, 0, x, gridDepth);
  }
}
