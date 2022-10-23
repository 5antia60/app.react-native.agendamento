import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native' 
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable';
import fundoSusten from '../../assets/fundo_susten.webp'

export default function Welcome() {
  const navigation  = useNavigation()
  const image = { uri: "https://www.construtoraplaneta.com.br/wp-content/uploads/2022/01/fundo-sus-02.jpg" };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Animatable.Image  source={{uri:'https://www.construtoraplaneta.com.br/wp-content/themes/planeta/imagens/logo.svg'}} 
          style={styles.imageSecondary} resizeMode="contain"
        />
      <View style={styles.containerLogo}>
        {/* <Image source={{uri:'https://www.construtoraplaneta.com.br/wp-content/themes/planeta/imagens/logo.svg'}} 
            style = {{ width: "50%", height: "50%", backgroundColor: '#14750D' }} resizeMode='contain'
          /> */}
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo_design.svg')}
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
          <Text style={styles.buttonText}>Acessar</Text>
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
    marginBottom: '-1rem',
  },
  image: {
    flex: 1,
  },
  imageSecondary: {
    width: 100, 
    height: 100,
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
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: 'gray'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#14750D',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})