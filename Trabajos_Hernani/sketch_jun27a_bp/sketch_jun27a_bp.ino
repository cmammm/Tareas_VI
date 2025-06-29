void setup() {
  Serial.begin(9600);
  pinMode(2, INPUT); // O INPUT_PULLUP si no usas resistencia
}

void loop() {
  int boton = digitalRead(2);      // 0 o 1
  int perilla = analogRead(A0);    // 0 a 1023

  Serial.print(boton);
  Serial.print(" ");
  Serial.println(perilla);         // Línea como: 1,654

  delay(200);
}

