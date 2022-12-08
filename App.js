import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from "./src/navigations/StackNavigator";
import DetailsReuniao from './src/screens/DetailsReuniao';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle={'light-content'} />
      
      <AuthStackNavigator />
     
    </NavigationContainer>
  );
}
export default App;
