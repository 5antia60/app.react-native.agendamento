import { KeyboardAvoidingView, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { auth } from '../../../firebase'
// import { useNavigation } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/native'
import fundoSusten from '../../assets/fundo_susten.webp'

const Login = () => {
  const [email, setEmail ] = useState('danilosataide@gmail.com')
  const [password, setPassword] = useState('')

  const navigation  = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.replace("Home")//replace or navigate
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registrado com: ', user.email);
    })
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logado com: ', user.email);
      })
      .catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <ImageBackground source={fundoSusten} resizeMode="cover" style={styles.image}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        >
        </TextInput>
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        >
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Registrar</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>

    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  buttonContainer: {
    width: '80%',
    marginTop: 40
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16
  }

})