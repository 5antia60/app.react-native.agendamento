import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from "./src/navigations/StackNavigator";
import { AuthStackNavigator, MainStackNavigator } from './src/navigations/StackNavigator';
import Home from './src/screens/Home';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle={'light-content'} />
      
      <Home />
     
    </NavigationContainer>
  );
}
export default App;
