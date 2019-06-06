int input[4];

float resistance[4];

float temp[4];

int B = 3975;

void setup() {
  Serial.begin(9600);
}

void loop() {
  //Read Analog Input Data
  for (int i = 0; i < 4; i++) {
      input[i] = analogRead(i);  
  }

  //Transform Analog Signal
  for (int i = 0; i < 4; i++) {
      resistance[i] = (float)(1023-input[i])*10000/input[i];
      temp[i] = 1 / (log(resistance[i]/10000)/B+1/298.15)-273.15;
  }
  
  //delay(0.001);

  //Load Results
  for (int i=0; i < 4; i++) {
        Serial.print("Temp" + String(i+1) + ",");
        Serial.println(temp[i]);
  }
}
