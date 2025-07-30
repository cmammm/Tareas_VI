let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  background(0);
}

function draw() {
  // Fondo con transparencia para el rastro
  background(0, 40);

  // Tiempo y ciclo
  let t = millis() / 1000;
  let phase = (t % 4) / 4; // ciclo de 4 segundos

  // Velocidad más rápida
  let speed = lerp(0.2, 6.0, pow(phase, 3)); 
  angle += speed * (deltaTime / 1000);

  // Brillo
  let pulse = map(sin(t * 2), -1, 1, 0.4, 1);

  // Centrar el dibujo
  translate(width / 2, height / 2);
  rotate(angle);

  // Radio
  let d = min(width, height) * 0.7; // más pequeño y centrado

  // Dos arcos enfrentados
  drawGlowArc(-PI / 3, PI / 3, d, pulse);
  drawGlowArc((2 * PI) / 3, (4 * PI) / 3, d, pulse);
}

function drawGlowArc(a1, a2, diam, pulse) {
  noFill();
  blendMode(ADD);
  for (let i = 30; i > 0; i--) {
    let alpha = map(i, 30, 0, 0, 255) * pulse;
    stroke(255, alpha);
    strokeWeight(i * 4); // grosor del glow
    arc(0, 0, diam, diam, a1, a2);
  }
  blendMode(BLEND);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
