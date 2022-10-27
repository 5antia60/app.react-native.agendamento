import * as React from 'react';
import { ImageBackground } from 'react-native';
import { View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../../../firebase'
import { IconButton } from '@react-native-material/core';
import SignIn from "../SignIn";
import Home from '../Home';
import Pessoa from '../Pessoa';
import Reuniao from '../Reuniao';
import Info from '../Info';
import CustomDrawer from '../Componentes/CustomDrawer';

const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();

export default function DrawerNavigator() {
  const navigation  = useNavigation()
  const image = { uri: "https://www.construtoraplaneta.com.br/wp-content/uploads/2022/01/fundo-sus-02.jpg" };

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        {/* <HomeStack.Screen options={{ headerShown: false }} name="SignIn" component={handleSignOut} /> */}
        <HomeStack.Screen name="Reuniao" component={Reuniao} />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
            drawerContent={props => <CustomDrawer {...props} />}
            useLegacyImplementation 
            initialRouteName="HomeStackScreen"
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
        }} name="Home" component={HomeStackScreen} />
        <Drawer.Screen options={{ 
          headerShown: false,
          drawerIcon: ({color, size, focused}) => {
            return <FontAwesome name='group' size={18} style={{ color: '#fff'}}/>
          } 
        }} name="Pessoas" component={Pessoa} />

        <Drawer.Screen options={{ 
          headerShown: false,
          drawerIcon: ({color, size, focused}) => {
            return <FontAwesome name='cog' size={18} style={{ color: '#fff'}}/>
          } 
        }} name="Configurações" component={Pessoa} />

        <Drawer.Screen options={{ 
          headerShown: false,
          drawerIcon: ({color, size, focused}) => {
            return <FontAwesome name='info-circle' size={18} style={{ color: '#fff'}}/>
          } 
        }} name="Info" component={Info} />
        {/* <Drawer.Screen name="SignIn" component={handleSignOut} />  */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
