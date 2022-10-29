import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reuniao from '../Reuniao'
import Routes from '../../routes'
import { NavigationActions } from 'react-navigation'
import { color } from 'react-native-reanimated'
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import Profile from '../../../src/assets/profile.png';
// const Tab = createBottomTabNavigator();
//{navigation}
const Home = ({ HomeStack, navigation }) => {
  // const navigation  = useNavigation()

  const [currentTabDrawer, setCurrentTabDrawer] = useState("Home")

  const handleSignOut = () => {
    auth  
      .signOut()
      .then(() => {
        navigation.navigate(
          'HomeStackScreen', {
            screen: 'DrawerNavigator',
            params: {
              screen: 'Welcome',
              params: {
                screen: 'SignIn',
              },
            },
          }
        );
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

      <Text style={{color:'black'}}>Email: {auth.currentUser?.email}</Text>
      {/* <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity> */}

      {/* <View style={styles.tabBarButtons}>
          {
              //Tab Bar Buttons Drawer
          }
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Home", 'home')}
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Pesquisar", 'search')}
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Configurações", 'cog')}
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Info", 'info-circle')}
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Sair", 'sign-out')}
      </View> */}
    </View>
  )
}

export default Home


const tabButtonDrawer = (currentTabDrawer, setCurrentTabDrawer, title, icon) => {
  return (
    <TouchableOpacity onPress={() => {
      // title == "Sair" ? handleSignOut : setCurrentTabDrawer(title)
      if( title == "Sair"){
        handleSignOut
      } else {
        setCurrentTabDrawer(title)
      }
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTabDrawer == title ? 'white' : 'transparent',
        paddingLeft: 15,
        paddingRight: 50,
        borderRadius: 10,
        marginTop: 15
      }}>
        <FontAwesome name={icon} size={25} 
          style={{ color: currentTabDrawer == title ? '#14750D' : 'white' }}
        />

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          alignSelf: 'center',
          color: currentTabDrawer == title ? '#14750D' : 'white'
        }}>{title}
        </Text>  
      </View>
    </TouchableOpacity>
  );
}

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
    height: 70,

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