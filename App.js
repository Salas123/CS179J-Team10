import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button, ButtonGroup, ThemeProvider, Header } from "react-native-elements";

export default function App() {
  var flashStatus = false;

  function openMenu() {
    console.log('This will open up the menu.');
    alert('This will open up the menu.');
  }

  function bluetoothConnection() {
    console.log('This will check for the bluetooth connection.');
    alert('This will check for the bluetooth connection.');
  }

  function moveUp() {
    console.log('Camera will move upwards.');
    alert('Camera will move upwards.');
  }

  function moveLeft() {
    console.log('Camera will move to the left.');
    alert('Camera will move to the left.');
  }

  function moveRight() {
    console.log('Camera will move to the right.');
    alert('Camera will move to the right.');
  }

  function moveDown() {
    console.log('Camera will move downwards.');
    alert('Camera will move downwards.');
  }

  function takePicture() {
    console.log('Camera will snap picture.');
    alert('Camera will snap picture.');
  }

  function flash() {
    if (flashStatus) {
      console.log('Flash will turn off.');
      alert('Flash will turn off.');
      flashStatus=false;
    }
    else {
      console.log('Flash will turn on.');
      alert('Flash will turn on.');
      flashStatus=true;
    }
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent=<Icon
          raised
          reverse
          name='bars'
          type='font-awesome'
          color='#000'
          onPress={openMenu} />
        centerComponent={{ text: 'Smart Tripod Camera', style: { fontSize:24, color: '#fff', fontWeight: 'bold' } }}
        rightComponent=<Icon
          raised
          reverse
          name='bluetooth'
          type='font-awesome'
          color='#000'
          onPress={bluetoothConnection}/>
        containerStyle={styles.title}
      />
      <View style={styles.camera}>
         <Text style={{fontSize:20, color:"#000"}}>Camera Area</Text>
      </View>
      <View style={styles.controls}>
        <View>
          <Button id="up-button"
            icon={
              <Icon
                raised
                reverse
                name="arrow-up"
                type='font-awesome'
                size={40}
                color='#000'
                onPress={moveUp}
              />
            }
            />
        </View>
        <View style={styles.fixToText}>
          <Button id="left-button"
              icon={
                <Icon
                  raised
                  reverse
                  name="arrow-left"
                  type='font-awesome'
                  size={40}
                  color='#000'
                  onPress={moveLeft}
                />
              }
              />
          <Button id="right-button"
            icon={
              <Icon
                raised
                reverse
                name="arrow-right"
                type='font-awesome'
                size={40}
                color='#000'
                onPress={moveRight}
              />
            }
            />
        </View>
        <View style={styles.fixToText}>
        <Button id="camera-button"
          icon={
            <Icon
              raised
              reverse
              name="camera"
              type='font-awesome'
              size={40}
              color='#32CD32'
              onPress={takePicture}
            />
          }
          />
          <Button id="down-button"
              icon={
                <Icon
                  raised
                  reverse
                  name="arrow-down"
                  type='font-awesome'
                  size={40}
                  onPress={moveDown}
                />
              }
              />
          <Button id="flash-button"
            icon={
              <Icon
                raised
                reverse
                name="bolt"
                type='font-awesome'
                size={40}
                color='#B22222'
                onPress={flash}
              />
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
    borderBottomColor: 'black',
  },
  title: {
   flex:0.15,
   backgroundColor:"#000",
   position: "relative",
   borderBottomColor: 'black',
  },
  camera: {
   backgroundColor:"#f3e9d2",
   flex:1,
   justifyContent: "center",
   alignItems: "center",
  },
  controls: {
   backgroundColor:"rgb(32, 137, 220)",
   flex:1,
   alignItems: "center",
 },
  fixToText: {
    backgroundColor:"rgb(32, 137, 220)",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
