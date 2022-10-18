import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import Home from "./pages/Home";
import Info from "./pages/Info";
import Historico from "./pages/Historico";
import Reuniao from './pages/Reuniao';

import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
 
const Tab = createBottomTabNavigator();

function Routes() {
  return(
    <Tab.Navigator
      screenOptions={{
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
          headerShown: true,
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
          headerShown: false,
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

// const Routes = createAppContainer(
//   createStackNavigator({
//     Login: Login,
//     Splash: Splash,
//   })
// );

export default Routes;