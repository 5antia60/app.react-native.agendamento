import Routes from './src/Routes';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Splash from './src/pages/Splash';
import Pessoa from './src/pages/Pessoa';

export default function App() {
  const Stack = createNativeStackNavigator();

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen option={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pessoa" component={Pessoa} />

      </Stack.Navigator>
    </NavigationContainer> 
  );
  
}
