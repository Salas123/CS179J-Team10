import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from "react-native-elements";


export default function App() {
  return(
      //Need fragment tags in order to use different stylings
    <Fragment>
    <View style={styles.container}>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Smart Tripod App', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={styles.title}
        />
       <View style={styles.item1}>
           <Text style={{fontSize:20, color:"#fff"}}>Camera Area</Text>
       </View>
       <View style={styles.item2}>
           <Text style={{fontSize:20, color:"#fff"}}>Controls Area</Text>
       </View>
   </View>
    </Fragment>

);
}

const styles = StyleSheet.create({
 container: {
     flex:1,
     justifyContent:"center",
     backgroundColor:"#fff",
     alignItems:"stretch"
 },
 title: {
     fontSize:20,
     backgroundColor:"#029CAA",
     margin: 0,
     border: 0,
     position: "relative"

 },
 item1: {
     backgroundColor:"#89A6FB",
     flex:1,
     justifyContent: "center",
     alignItems: "center"
 },
 item2: {
     backgroundColor:"#f3e9d2",
     flex:1,
     justifyContent: "center",
     alignItems: "center"
 },

});
