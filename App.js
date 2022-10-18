import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { name as appName } from "./app.json";
import Home from './src/pages/Home';
import Routes from './src/Routes';

import { NavigationContainer } from '@react-navigation/native'

AppRegistry.registerComponent(appName, () => Routes);

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
