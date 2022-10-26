import * as React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native' 
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import Logo from '../../../src/assets/logoApp.png';
import LogoPlaneta from '../../../src/assets/logoPlaneta.png';

export default function Welcome() {
  const navigation  = useNavigation()

  const image = { uri: "https://www.construtoraplaneta.com.br/wp-content/uploads/2022/01/fundo-sus-02.jpg" };
  // const LogoPlaneta = { uri: "https://www.construtoraplaneta.com.br/wp-content/themes/planeta/imagens/logo.svg" };
  // const Logo = require('../../assets/logo_design.svg')
  
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Animatable.Image  source={LogoPlaneta} 
          style={styles.imageSecondary} resizeMode="contain"
        />
      <View style={styles.containerLogo}>
        {/* <Image source={{uri:'https://www.construtoraplaneta.com.br/wp-content/themes/planeta/imagens/logo.svg'}} 
            style = {{ width: "50%", height: "50%", backgroundColor: '#14750D' }} resizeMode='contain'
          /> */}
        <Animatable.Image
          animation="flipInY"
          source={Logo}
          style = {{ width: "50%", height: "50%", backgroundColor: 'transparent' }} resizeMode='contain'
        />
      </View>

          
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>
          Organize e gerencie suas reuniões de trabalho!
        </Text>
        <Text style={styles.text}>
          Faça o login para começar
        </Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>
            Acessar
          </Text>
          <FontAwesome style={styles.buttonIcon} name="chevron-right" size={16}/>
        </TouchableOpacity>
      </Animatable.View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14750D',
    marginBottom: '0rem',
  },
  image: {
    flex: 1,
  },
  imageSecondary: {
    width: 120, 
    height: 120,
    backgroundColor: 'transparent', 
    marginLeft: 25,
  },
  containerLogo: {
    flex: 2,
    backgroundColor: 'transparent',
    opacity: '1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    fontSize: 18,
    color: 'gray'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#14750D',
    height: 50,
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%', 
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: '15%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    paddingEnd: 5
  },
  buttonIcon: {
    color: "#fff",
    paddingStart: 5,
    alignSelf: 'center'
  }
})