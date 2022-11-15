import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import Vector from '../assets/Vector.png'
const SplashScreen = ({navigation}) => {
 useEffect(()=>{
  setTimeout(()=>{
 navigation.push('started')
  },1000)
},[])
  return <View style={styles.containerSplash}>
    <Image source={Vector}/>
  </View>;
};

export default SplashScreen;

const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#070707",
  },
});
