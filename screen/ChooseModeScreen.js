import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import image from '../assets/lipa.png'
import vector from '../assets/Vector.png'
const ChooseModeScreen = ({navigation}) => {
  return (
    <View style={styles.container}> 
       <ImageBackground source={image}  style={styles.image}>
       <View style={styles.containerImage}>
       <Image source={vector}/>
        </View>
        <View style={{flex : 2}}></View>
       <View style={styles.Mode}>
       <Text style={styles.ModeText}>Choose Mode</Text>
       <View style={styles.chooseMode}> 
     <View style={{marginRight :30,marginTop : 30 }}><Text>anjay</Text></View>
     <View  style={{marginLeft :30,marginTop : 30 }}><Text>anjay</Text></View>
       </View>
       </View>
       </ImageBackground>
    </View>
  )
}

export default ChooseModeScreen

const styles = StyleSheet.create({
    container : {
   flex : 1
    },
    image :{
        flex : 1
    },
    containerImage : {
        flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      },
      Mode : {
        flex : 3
      },
      ModeText : {
        fontWeight : '800',
        fontSize :22,
        fontFamily : 'Roboto',
        textAlign :'center',
        color: '#DADADA'
      },
      chooseMode : {
        display :  'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 40

        

      }
})