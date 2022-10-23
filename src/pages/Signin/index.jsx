import React from 'react'
import { View, Text, StyleSheet , TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import LogoPlaneta from '../../assets/logoPlaneta.png';

export default function SignIn() {
  const image = { uri: "https://www.construtoraplaneta.com.br/wp-content/uploads/2022/01/fundo-sus-02.jpg" };
  const navigation  = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Image  source={LogoPlaneta} 
          style={styles.imageSecondary} resizeMode="contain"
        />
        <Text style={styles.message}>Bem vindo(a)!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        {/* <Text style={styles.title}>E-mail</Text> */}
        <TextInput 
          placeholder="E-mail"
          style={styles.input}
        />

        {/* <Text style={styles.title}>Senha</Text> */}
        
        <View
          style={styles.inputSenha}
        >
          <TextInput 
            placeholder="Senha"
            style={styles.inputSenhaText}
          />
          <IconButton style={styles.icon} icon={props => <FontAwesome name="eye" {...props} size={16}/>} />
          {/* <FontAwesome style={styles.icon} name="chevron-right" size={16}/> */}
        </View>


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>Cadastre-se</Text>
        </TouchableOpacity>
        
      </Animatable.View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14750D', //#228b1b
  },
  image: {
    flex: 1
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: 25,
    paddingStart: 40,
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingStart: 40,
    paddingEnd: 40,
    paddingTop: 28,
  },
  title: {
    fontSize: 18,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 0,
    height: 50,
    color: 'black',//#3B8952
    fontWeight: 'normal',
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  inputSenha: {
    borderBottomWidth: 0,
    height: 50,
    color: 'black',//#3B8952
    fontWeight: 'normal',
    marginBottom: 12,
    backgroundColor: '#f3f3f3',
    paddingStart: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputSenhaText: {
    fontSize: 16,
    width: '85%',
  },
  icon: {
    width: '15%',
    paddingHorizontal: 15
  },
  button: {
    backgroundColor: '#14750D',
    width: '100%',
    height: 50,
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: { 
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
    fontSize: 16
  },
  imageSecondary: {
    width: 140, 
    height: 140,
    backgroundColor: 'transparent', 
  },
})
