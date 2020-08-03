//import {StatusBar} from 'expo-status-bar';
//Continuar em Prática: Style - Parte 02
import{StyleSheet, View, Text} from "react-native";  
import React from "react";

function App()
{
  return(
/**    <View style={styles.viewStyle} >
      <Text></Text>
      <Text></Text>
      <Text>Primeiro - Open-UP App.js to start working on your app!</Text>

      <Text style={styles.textStyle}>Studio Zaneti (43)99920-1893</Text>

      </View>*/
      <>
      <View style={styles.parent}>
      <View style={styles.v1}>
        <Text style={styles.text1}>STUDIO ZANETI</Text>
        <Text style={styles.text2}>Eterninzando Seus Melhores Momentos</Text>
        <Text style={styles.text1}>@studiozanetioficial</Text>
      </View>
      <View style={styles.v2}>
        <Text style={styles.text1}>STUDIO ZANETI</Text>
        <Text style={styles.text2}>Eterninzando Seus Melhores Momentos</Text>
        <Text style={styles.text1}>@studiozanetioficial</Text>
      </View>
      </View>
      </>
  )
}

export default App;

const styles = StyleSheet.create({
/**  viewStyle:{
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  },
  textStyle:{
    backgroundColor:"yellow",
    margin:5,
    borderWidth:5,
    borderColor:"green"
  }
   
  parent2:{
    flex:1,
    backgroundColor:"brown"

  },*/

   parent:{
     margin:5,
    flex:1,
    /**flexDirection:"row",*/

  },
  text1:{
    backgroundColor: "yellow",
  },
  v1:{
    flex:1,
    justifyContent:"space-around",
    alignItems: "flex-end",
    /*flexDirection:"row",*/
    flexDirection:"row",
    marginTop:20,
    backgroundColor:"#cc3987"
  },
  v2:{
    justifyContent:"space-around",
    backgroundColor: "blue",
    alignItems:"flex-end",
    flex:1
  }
})

