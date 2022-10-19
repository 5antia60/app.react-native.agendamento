import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import Home from "./pages/Home";
import Info from "./pages/Info";
import Historico from "./pages/Historico";
import Reuniao from './pages/Reuniao';

import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Button, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

function Routes() {
  return(
    <Tab.Navigator component={Home}
      initialRouteName="Home"
      screenOptions={{
        initialRouteName: 'Home',
        tabBarActiveTintColor: '#3B8952',
        tabBarInactiveTintColor: '#03484C',
        tabBarShowLabel: true,
        tabBarStyle: {
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
        }
      }}
    >
      
      <Tab.Screen 
        component={Info}
        name="Info"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused) {
              return <FontAwesome name='info-circle' size={size} color={color} />
            }

            return <FontAwesome name='info' size={size} color={color} />
          }
        }}
      />

      <Tab.Screen 
        component={Reuniao}
        
        name="Nova Reunião"
        options={{
          tabBarLabel: "",
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused) {
              return (  
                  <LinearGradient onPress={() => navigation.navigate('Home')} style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#3B8952', '#03484C']}>
                    <Entypo name="home" size={30} color='#FFF'/>
                  </LinearGradient>
              )
            } 

            return (
              <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#3B8952', '#03484C']}>
                <Entypo name="plus" size={30} color='#FFF'/>
              </LinearGradient>
            )
          }
        }}
      />

      <Tab.Screen 
        component={Home}
        name="Home" 
        
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused) {
              return <FontAwesome name='home' size={size} color={color} />
            }

            return <FontAwesome name='home' size={size} color={color} />
          }
        }}
      />

      <Tab.Screen 
        component={Historico}
        name="Reuniões antigas"
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused) {
              return <FontAwesome name='history' size={size} color={color} />
            }

            return <FontAwesome name='history' size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
	iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  }
});

// const Routes = createAppContainer(
//   createStackNavigator({
//     Login: Login,
//     Splash: Splash,
//   })
// );

export default Routes;