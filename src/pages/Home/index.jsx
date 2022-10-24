import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation  = useNavigation()

  const handleSignOut = () => {
    auth  
      .signOut()
      .then(() => {
        navigation.replace("SignIn")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Button title="Go to Splash" 
        onPress={
          () => navigation.navigate("Splash")//replace or navigate
        } />

        <Button title="Go to Pessoas" 
        onPress={
          () => navigation.navigate("Pessoa")//replace or navigate
        } />
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
})