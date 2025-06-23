let imgQ, imgW, imgE, imgR, imgT, imgY, imgU, imgI, imgO, imgP;
let imagenActual = null;
let frase1 = "me gustan mucho, no importa el lugar o la hora"
let frase2 = "es que me da mucha flojera"
let frase3 = "a veces una se puede dar ciertos lujos"
let frase4 = "espero a que se me haga tarde para apurarme"
let frase5 = "tambien me gustan muchos, más los de bistec que vende mi vecina"
let frase6 = "y esto me representa como persona"
let frase7 = "yoyoyo"
let frase8 ="yo lo amo, yo lo quiero, lo amo, lo quiero"
let fraseActual = null;

function preload() {
  imgQ = loadImage('assets/q.jpg');
  imgW = loadImage('assets/w.jpg');
  imgE = loadImage('assets/e.jpg');
  imgR = loadImage('assets/r.jpg');
  imgT = loadImage('assets/t.jpg');
  imgY = loadImage('assets/y.jpg');
  imgU = loadImage('assets/yi.jpg');
  imgI = loadImage('assets/i.jpg');
  imgO = loadImage('assets/o.jpg');
  imgP = loadImage('assets/p.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  text("Mi día a día con estas letras: Q W E R T Y U I O P", width / 2 - 540, height / 2);
}

function draw() {
  if (imagenActual) {
    image(imagenActual, 0, 0, width, height);
  }
  if (fraseActual){
    text(fraseActual, width / 2, height - 150);
  }
}

function keyPressed() {
  background(255);

  if (key === 'q') {
    fraseActual = frase1;
    imagenActual = imgQ;
  }
  
  if (key === 'w') {
    imagenActual = imgW;
    fraseActual = frase2;
  }
  
  if (key === 'e') {
    imagenActual = imgE;
    fraseActual = frase3;
  }
  
  if (key === 'r') {
    imagenActual = imgR;
    fraseActual = frase4;
  }

  if (key === 't') {
    imagenActual = imgT;
    fraseActual = frase5;
  }

  if (key === 'y') {
    imagenActual = imgY;
    fraseActual = frase6;
  }

  if (key === 'u') {
    imagenActual = imgU;
    fraseActual = frase7;
  }

  if (key === 'i') {
    imagenActual = imgI;
    fraseActual = frase8;
  }

  if (key === 'o') {
    imagenActual = imgO;
  }
  
  if (key === 'p') {
    imagenActual = imgP;
  }
}
