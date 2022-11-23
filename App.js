import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from './src/navigations/StackNavigator';
import Pessoas from './src/screens/Pessoas';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import Reuniao from './src/screens/Reuniao';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle={'light-content'} />
        <Reuniao />
      {/* <MainStackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}
export default App;
