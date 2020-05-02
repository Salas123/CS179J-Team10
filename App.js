import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button, ButtonGroup, ThemeProvider, Header } from "react-native-elements";

export default function App() {

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
        <Button id="down-button"
            icon={
              <Icon
                raised
                reverse
                name="arrow-down"
                type='font-awesome'
                size={40}
                color='#000'
                onPress={moveDown}
              />
            }
            />
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
   backgroundColor:"#89A6FB",
   flex:1,
   justifyContent: "center",
   alignItems: "center",
  },
  controls: {
   backgroundColor:"#f3e9d2",
   flex:1,
   alignItems: "center",
 },
});
