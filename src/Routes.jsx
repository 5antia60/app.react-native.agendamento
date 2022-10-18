import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Login from './pages/Login/';
import Splash from "./pages/Splash";

const Routes = createAppContainer(
  createStackNavigator({
    Login: Login,
    Splash: Splash,
  })
);

export default Routes;