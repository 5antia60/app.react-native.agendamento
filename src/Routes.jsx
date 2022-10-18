import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Home from "./pages/Home";
import Info from "./pages/Info";
import Historico from "./pages/Historico";
import Login from './pages/Login/';
import Splash from "./pages/Splash";
import { TabBarIOSItem } from 'react-native';

const Tab = createBottomTabNavigator();

function Routes() {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        component={Home}
        name="Home"
      />

      <Tab.Screen 
        component={Info}
        name="Info"
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