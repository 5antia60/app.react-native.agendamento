import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Home from "./pages/Home";
import Info from "./pages/Info";
import Historico from "./pages/Historico";
import Login from './pages/Login/';
import Splash from "./pages/Splash";
import { TabBarIOSItem } from 'react-native';
import Icon from 'react-native-vector-icons';

import { Entypo } from '@expo/vector-icons'; 
 
const Tab = createBottomTabNavigator();

function Routes() {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          borderTopWidth: 0,

          bottom: 0,
          left: 0,
          right: 0,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
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
              return <Entypo name='info' size={size} color={color} />
            }

            return <Entypo name='info' size={size} color={color} />
          }
        }}
      />

      <Tab.Screen 
        component={Home}
        name="Home" 
      />

      <Tab.Screen 
        component={Home}
        name="Home" 
      />

      <Tab.Screen 
        component={Historico}
        name="Historico"
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