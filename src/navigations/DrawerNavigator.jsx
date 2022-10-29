import * as React from 'react';
import { View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import CustomDrawer from '../components/CustomDrawer';

import { PessoaStackNavigator } from './StackNavigator';
import Info from '../screens/Info';
import Config from '../screens/Config';

import TabNavigator from "./TabNavigator";
import Historico from '../screens/Historico';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const image = { uri: "https://www.construtoraplaneta.com.br/wp-content/uploads/2022/01/fundo-sus-02.jpg" };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation 
      initialRouteName="Home"
      screenOptions={
          () => ({ 
            drawerInactiveTintColor: '#fff',
            drawerInactiveBackgroundColor: 'transparent',
            drawerActiveTintColor: '#14750D',
            drawerActiveBackgroundColor: '#fff',
            drawerLabelStyle: {
              marginLeft: 0,
            },
            drawerPosition: 'left',
            headerRight: () => (
                <View>
                </View>
            ),

            headerLeft: () => (
              // <Button
              //   onPress={() => navigation.openDrawer()}
              //   title="Menu"
              // />
              <FontAwesome name='bars' onPress={() => navigation.openDrawer()} size={18} style={{ color: 'black'}}/>
            ),
      })}
    >
        <Drawer.Screen options={{ 
          headerShown: false,
          drawerIcon: ({color, size, focused}) => {
            return <FontAwesome name='home' size={18} style={{ color: '#14750D'}}/>
          } 
        }} name="Home" component={TabNavigator} />
        
        <Drawer.Screen options={{ 
          headerShown: false,
          drawerIcon: ({color, size, focused}) => {
            return <FontAwesome name='group' size={18} style={{ color: '#fff'}}/>
          } 
        }} name="Pessoas" component={PessoaStackNavigator} />

        <Drawer.Screen options={{ 
          headerShown: false,
          drawerIcon: ({color, size, focused}) => {
            return <FontAwesome name='group' size={18} style={{ color: '#fff'}}/>
          } 
        }} name="Histórico de reuniões" component={Historico} />

        <Drawer.Screen options={{ 
          headerShown: false,
          drawerIcon: ({color, size, focused}) => {
            return <FontAwesome name='cog' size={18} style={{ color: '#fff'}}/>
          } 
        }} name="Configurações" component={Config} />

        <Drawer.Screen options={{ 
          headerShown: false,

          drawerIcon: ({color, size, focused}) => {
            return <FontAwesome name='info-circle' size={18} style={{ color: '#fff'}}/>
          } 
        }} name="Info" component={Info} />
        {/* <Drawer.Screen name="SignIn" component={handleSignOut} />  */}

       {/* <Drawer.Screen name="Home" options={{ headerShown: false }} component={TabNavigator} /> */}
       {/* <Drawer.Screen name="Pessoas" options={{ headerShown: false }} component={PessoaStackNavigator} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;