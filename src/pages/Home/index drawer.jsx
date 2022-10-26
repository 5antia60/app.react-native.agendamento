import { StyleSheet, Text, View, Image, Button, ImageBackground, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native'
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import Profile from '../../../src/assets/profile.png';
// import { Animated } from 'react-native-web';
const Home = () => {
  const image = { uri: "https://www.construtoraplaneta.com.br/wp-content/uploads/2022/01/fundo-sus-02.jpg" };

  const navigation  = useNavigation()

  const [currentTabDrawer, setCurrentTabDrawer] = useState("Home")

  const [showMenu, setShowMenu] = useState(false)
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;


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
      {/* <ImageBackground source={image} style={styles.image}> */}

      {
        // Drawer
      }
      <View style={{justifyContent:'flex-start', padding: 20, marginBottom: 70}}>
        <Image 
          source={Profile} 
          style={styles.profilePhoto} 
          resizeMode="contain"
        >
        </Image>

        <Text style={styles.nameText} >Danilo Ataide</Text>

        <TouchableOpacity>
          <Text style={styles.textButtonViewProfile}>Ver Perfil</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
              //Tab Bar Buttons Drawer
          }
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Home", 'home')}
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Pesquisar", 'search')}
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Configurações", 'cog')}
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Info", 'info-circle')}
        </View>
          {tabButtonDrawer(currentTabDrawer, setCurrentTabDrawer, "Sair", 'sign-out')}
        <View>

        </View>
      </View>
      {/* </ImageBackground> */}

      {
        // View Home
      }
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: '#f3f3f3',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,        // paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0, 
        transform: [
          { scale: scaleValue},
          { translateX: offsetValue }
        ],
      }}>
        {
          // Menu Button Drawer (bars or navicon)
        }
        <Animated.View style={{
          transform: [
            { translateY: closeButtonOffset }
          ]
        }}>
          <TouchableOpacity 
            style={styles.buttonMenu}
            onPress={() => {

              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : '1',
                duration: 300,
                useNativeDriver: true
              }).start()

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true
              }).start()

              // Animated.timing(closeButtonOffset, {
              //   toValue: !showMenu ? -30 : 0,
              //   duration: 300,
              //   useNativeDriver: true
              // }).start()

              setShowMenu(!setShowMenu);
            }}>
            {showMenu ? 
              <FontAwesome name='close' size={25} style={{ color: '#14750D'}}/> 
            : 
              <FontAwesome name='bars' size={25} style={{ color: '#14750D'}}/>
            }
            
          </TouchableOpacity>

          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>
            {currentTabDrawer}
          </Text>

          <Image source={image} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 20
            
          }}></Image>

        <Button title="Go to Splash" 
        onPress={
          () => navigation.navigate("Splash")//replace or navigate
        } />

        <Button title="Go to Pessoas" 
        onPress={
          () => navigation.navigate("Pessoa")//replace or navigate
        } />

        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>

        </Animated.View>

        {/* <Button title="Go to Splash" 
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
            </TouchableOpacity> */}


            <View style={styles.tabBarButtons}>

            </View>

      </Animated.View>

      
    </View>
  )
}

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
    backgroundColor: '#14750D',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  containerHome: {
    flexGrow: 1,
    backgroundColor: '#f3f3f3',
    position: 'absolute',
    paddingHorizontal: 15,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    flex: 1,
  },
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 30
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20
  },  
  textButtonViewProfile: {
    marginTop: 6,
    color: '#fff'
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
  buttonMenu: {
    // paddingLeft: 20,
    marginTop: 28,
    tintColor: 'black',
    paddingVertical: 8
  }
});

export default Home;