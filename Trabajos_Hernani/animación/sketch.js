let numHorizLines = 40;
let numVertLines = 40;
let baseSpacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(1);
  noFill();
}

function draw() {
  background(0, 0, 255); // azul glitch

  translate(width / 2, height / 2); // origen en la línea del horizonte (centro vertical)

  // === LÍNEAS HORIZONTALES EN PERSPECTIVA ===
  let yVals = []; // guardamos las posiciones Y para reutilizar
  let y = 0;
  for (let i = 1; i < numHorizLines; i++) {
    y += baseSpacing * pow(1.1, i); // separación creciente
    if (y > height / 2) break;
    yVals.push(y);
    line(-width / 2, y, width / 2, y); // línea horizontal de lado a lado
  }

  // === LÍNEAS VERTICALES DESDE EL HORIZONTE ===
  for (let i = 0; i <= numVertLines; i++) {
    let xNorm = map(i, 0, numVertLines, -1, 1); // va de -1 a 1
    let xBottom = xNorm * (width / 2); // posición en la base

    // dibuja una línea desde el horizonte (0,0) hasta el fondo en xBottom
    line(0, 0, xBottom, height / 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
