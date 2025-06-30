let spacing = 40;
let gridDepth = 2000; // Qué tan lejos llega la cuadrícula

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noFill();
}

function draw() {
  background(0);
  stroke(0, 0, 255);
  strokeWeight(1.5);

  // Centra la cuadrícula y la rota para simular perspectiva
  rotateX(PI / 3);
  translate(-width / 2, 0, 0); // Ajusta para cubrir toda la pantalla desde la mitad hacia abajo

  // Líneas horizontales (profundidad)
  for (let z = 0; z < gridDepth; z += spacing) {
    line(0, z, width, z);
  }

  // Líneas verticales (paralelas)
  for (let x = 0; x <= width; x += spacing) {
    line(x, 0, x, gridDepth);
  }
}
