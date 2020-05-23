const int A1A = 3;
const int A1B = 2;
const int B1A = 4;
const int B1B = 5;


void setup() {
  // put your setup code here, to run once:
  pinMode(A1A, OUTPUT);
  pinMode(A1B, OUTPUT);
  pinMode(B1A, OUTPUT);
  pinMode(B1B, OUTPUT);
  
}

void loop() {
  // put your main code here, to run repeatedly:
  //Right
digitalWrite(A1A, LOW);
digitalWrite(A1B, HIGH);
digitalWrite(B1A, LOW);
digitalWrite(B1B, HIGH);

delay(500);
  //Left
digitalWrite(A1A, HIGH);
digitalWrite(A1B, LOW);
digitalWrite(B1A, HIGH);
digitalWrite(B1B, LOW);

delay(500);
//Back
digitalWrite(A1A, HIGH);
digitalWrite(A1B, LOW);
digitalWrite(B1A, LOW);
digitalWrite(B1B, HIGH);
delay(500);
//Fowards
digitalWrite(A1A, LOW);
digitalWrite(A1B, HIGH);
digitalWrite(B1A, HIGH);
digitalWrite(B1B, LOW);
delay(500);

}
