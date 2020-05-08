#include <Servo.h>

Servo servo1; // first servo will control left/right movement
Servo servo2; // second servo will control up/down movement

int s1_angle = 90;  // servo1 will start at 90 degrees
int s2_angle = 90;  // servo2 will start at 90 degrees
int angleStep = 5;  // each servo will only move at 5 degrees per quarter-second

const int LEFTPIN = 3;   // pin 3 is connected to left button
const int RIGHTPIN = 4;  // pin 4 is connected to right button
const int UPPIN = 5;   // pin 5 is connected to up button
const int DOWNPIN = 6;  // pin 6 is connected to down button

void setup() {
  servo1.attach(9);   // attaches the servo on pin 9 to the servo object: LEFT AND RIGHT
  servo2.attach(10);   // attaches the servo on pin 10 to the servo object :UP AND DOWN
  pinMode(LEFTPIN, INPUT_PULLUP);  // assign pin 3 as input for Left button
  pinMode(RIGHTPIN, INPUT_PULLUP); // assing pin 4 as input for right button
  pinMode(UPPIN, INPUT_PULLUP);  // assign pin 5 as input for up button
  pinMode(DOWNPIN, INPUT_PULLUP); // assing pin 6 as input for button button
  servo1.write(s1_angle);  // send servo1 to the middle at 90 degrees
  servo2.write(s2_angle);  // send servo2 to the middle at 90 degrees
}

void loop() {
  // ================ WHILE LOOP FOR SERVO1 =====================
  if (digitalRead(RIGHTPIN) == HIGH) {
    if (s1_angle > 0 && s1_angle <= 180) {
      s1_angle = s1_angle - angleStep;
      if (s1_angle < 0) {
        s1_angle = 0;
      }
      else {
        servo1.write(s1_angle); // move the servo to desired angle
        Serial.print("Moved to: ");
        Serial.print(s1_angle);   // print the angle
        Serial.println(" degree");
      }
    }
    delay(250); // waits for the servo to get there
  }

  if (digitalRead(LEFTPIN) == HIGH) {
    if (s1_angle >= 0 && s1_angle < 180) {
      s1_angle = s1_angle + angleStep;
      if (s1_angle > 180) {
        s1_angle = 180;
      }
      else {
        servo1.write(s1_angle); // move the servo to desired angle
        Serial.print("Moved to: ");
        Serial.print(s1_angle);   // print the angle
        Serial.println(" degree");
      }
    }
    delay(250); // waits for the servo to get there
  }

  // ================ WHILE LOOP FOR SERVO2 =====================
  if (digitalRead(UPPIN) == HIGH) {
    if (s2_angle > 90 && s2_angle <= 180) {
      s2_angle = s2_angle - angleStep;
      if (s2_angle < 90) {
        s2_angle = 90;
      }
      else {
        servo2.write(s2_angle); // move the servo to desired angle
        Serial.print("Moved to: ");
        Serial.print(s2_angle);   // print the angle
        Serial.println(" degree");
      }
    }
    delay(250); // waits for the servo to get there
  }

  if (digitalRead(DOWNPIN) == HIGH) {
    if (s2_angle >= 90 && s2_angle < 180) {
      s2_angle = s2_angle + angleStep;
      if (s1_angle > 180) {
        s2_angle = 180;
      }
      else {
        servo2.write(s2_angle); // move the servo to desired angle
        Serial.print("Moved to: ");
        Serial.print(s2_angle);   // print the angle
        Serial.println(" degree");
      }
    }
    delay(250); // waits for the servo to get there
  }
}