import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reuniao from '../Reuniao'
import Routes from '../../routes'
import { NavigationActions } from 'react-navigation'

//{navigation}
const Home = () => {
  const navigation  = useNavigation()

  const handleSignOut = () => {
    auth  
      .signOut()
      .then(() => {
        navigation.back()
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
        <Button title="Go to Reuniao" 
        onPress={
          () => navigation.navigate('Reuniao')//replace or navigate
        } />

        <Button
          title="Sign Out"
          onPress={handleSignOut}
          style={{ color: 'black'}}
        />  

      <Text>Email: {auth.currentUser?.email}</Text>
      {/* <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity> */}

      <View style={styles.tabBarButtons}>

      </View>
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
  tabBarButtons: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopWidth: 0,

    bottom: 0,
    left: 10,
    right: 10,
    borderRadius: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 60,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,

    elevation: 0,
  },
})