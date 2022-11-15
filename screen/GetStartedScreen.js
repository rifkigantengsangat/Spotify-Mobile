import { StyleSheet, Text, View,ImageBackground, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import image from '../assets/billie.png'
import vector from '../assets/Vector.png'
const GetStartedScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerImage}>
       <Image source={vector}/>
        </View>
        <View style={styles.kosong}></View>
        <View style={styles.containerText}>
        <View style = {styles.containerTextBig}>
         <Text style= {styles.textEnjoy}>Enjoy Listening To Music</Text>
        </View>
        <View style = {styles.containerTextMedium}>
         <Text style= {styles.textLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.push('mode')} style={styles.button}>
  <Text style={{textAlign : 'center', fontSize : 20 , fontFamily :'Roboto',color:'#F6F6F6', fontWeight : '800'}}>Get Started</Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
    </View>
  )
}

export default GetStartedScreen

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    image: {
        flex: 1,
       
      },
      containerImage : {
        flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      },
      kosong : {
        flex : 3
      },
      containerText : {
        flex : 3,
        marginTop :10

      },
      containerTextBig : {
        marginTop : 10
      },
      textEnjoy : {
        color : '#DADADA',
        textAlign : 'center',
        fontWeight : '800',
        fontFamily : 'Roboto',
        fontSize : 25
      },
      containerTextMedium : {
        marginTop : 20,
        width : '65%',
        marginRight : 'auto',
        marginLeft : 'auto'
      },
      textLorem : {
        color : '#797979',
        textAlign : 'center',
        fontWeight : '400',
        fontFamily : 'Roboto',
        fontSize : 14
      },
      button : {
        marginTop : 40,
        width : '85%',
        marginLeft : 'auto',
        marginRight : 'auto',
        padding : 26,
        borderRadius : 30,
        backgroundColor : '#42C83C'
              }
})