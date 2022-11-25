import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./src/navigations/TabNavigator";
import Reuniao from './src/screens/Reuniao';
import { MainStackNavigator } from "./src/navigations/StackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <Reuniao/>
      {/*
      <BottomTabNavigator />
      <MainStackNavigator />
      <DrawerNavigator />
      */}
    </NavigationContainer>
  );
}
export default App;
