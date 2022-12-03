import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from "./src/navigations/StackNavigator";
import DetailsReuniao from './src/screens/DetailsReuniao';
import Pessoas from './src/screens/Pessoas';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle={'light-content'} />
      
      <DetailsReuniao />
     
    </NavigationContainer>
  );
}
export default App;
