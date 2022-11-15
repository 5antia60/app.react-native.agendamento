import React from "react";
import { NavigationContainer, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from "../../firebase";

import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import DrawerNavigator from "./DrawerNavigator";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Pessoas from "../screens/Pessoas";
import Reuniao from "../screens/Reuniao";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerBackTitle: "Back",
  headerTintColor: '#fff',
  headerBackTitleVisible: false,
  headerStyle:{
      backgroundColor: '#14750D'
  }
};

const handleSignOut = ({navigation}) => {
  auth  
    .signOut()
    .then(() => {
      navigation.navigate('SignIn')
    })
    .catch(error => alert(error.message))
}

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
      <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
      <Stack.Screen options={{ headerShown: false }} name="DrawerNavigator" component={DrawerNavigator} />

    </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={{ headerShown: false }} name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

const PessoaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={{ headerShown: false }} name="Pessoas" component={Pessoas} />
    </Stack.Navigator>
  );
}

const ReuniaoStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={{ headerShown: false }} name="Reuniao" component={Reuniao} />
    </Stack.Navigator>
  );
}


export { handleSignOut, MainStackNavigator, ContactStackNavigator, AuthStackNavigator, PessoaStackNavigator, ReuniaoStackNavigator };