import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from './src/navigations/StackNavigator';
import Pessoas from './src/screens/Pessoas';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import Detalhes from './src/screens/DetailsReuniao';
import BottomTabNavigator from "./src/navigations/TabNavigator";
import Reuniao from './src/screens/Reuniao';
import DetailsReuniao from './src/screens/DetailsReuniao';
import { AuthStackNavigator, MainStackNavigator } from "./src/navigations/StackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle={'light-content'} />
      
      <AuthStackNavigator />
     
    </NavigationContainer>
  );
}
export default App;
