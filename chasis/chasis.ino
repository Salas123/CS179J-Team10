//chasis declarations
const int A1A = 3;
const int A1B = 2;
const int B1A = 4;
const int B1B = 5;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(28800);
  chasisSetup();
}

void loop() {
  // put your main code here, to run repeatedly:
}

void serialEvent(){
  if(Serial.available() > 0){
    uint8_t temp = 0xff;
    temp = Serial.read();
    chasisSerial(temp);
  }
}

void chasisSetup(){
  pinMode(A1A, OUTPUT);
  pinMode(A1B, OUTPUT);
  pinMode(B1A, OUTPUT);
  pinMode(B1B, OUTPUT);
}

void chasisSerial(uint8_t temp){
  switch(temp){
    case 0x21:
      //Fowards
      digitalWrite(A1A, LOW);
      digitalWrite(A1B, HIGH);
      digitalWrite(B1A, HIGH);
      digitalWrite(B1B, LOW);
      break;

    case 0x22:
      //Back
      digitalWrite(A1A, HIGH);
      digitalWrite(A1B, LOW);
      digitalWrite(B1A, LOW);
      digitalWrite(B1B, HIGH);
      break;

    case 0x23:
      //Left
      digitalWrite(A1A, HIGH);
      digitalWrite(A1B, LOW);
      digitalWrite(B1A, HIGH);
      digitalWrite(B1B, LOW);
      break;

    case 0x24:
      //Right
      digitalWrite(A1A, LOW);
      digitalWrite(A1B, HIGH);
      digitalWrite(B1A, LOW);
      digitalWrite(B1B, HIGH);
      break;

    default:
      digitalWrite(A1A, LOW);
      digitalWrite(A1B, LOW);
      digitalWrite(B1A, LOW);
      digitalWrite(B1B, LOW);
      break;
  }
}

////Right
//  digitalWrite(A1A, LOW);
//  digitalWrite(A1B, HIGH);
//  digitalWrite(B1A, LOW);
//  digitalWrite(B1B, HIGH);
//  
//  delay(500);
//    //Left
//  digitalWrite(A1A, HIGH);
//  digitalWrite(A1B, LOW);
//  digitalWrite(B1A, HIGH);
//  digitalWrite(B1B, LOW);
//  
//  delay(500);
//  //Back
//  digitalWrite(A1A, HIGH);
//  digitalWrite(A1B, LOW);
//  digitalWrite(B1A, LOW);
//  digitalWrite(B1B, HIGH);
//  delay(500);
//  //Fowards
//  digitalWrite(A1A, LOW);
//  digitalWrite(A1B, HIGH);
//  digitalWrite(B1A, HIGH);
//  digitalWrite(B1B, LOW);
//  delay(500);
