import * as React from 'react';
import { View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../../../firebase'

import SignIn from "../SignIn";
import Home from '../Home';
import Pessoa from '../Pessoa';
import Reuniao from '../Reuniao';
import Info from '../Info';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation}) {

  const HomeStack = createNativeStackNavigator();

  const handleSignOut = ({navigation}) => {
    auth  
      .signOut()
      .then(() => {
        navigation.replace('SignIn')
      })
      .catch(error => alert(error.message))
  }

  
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen options={{ headerShown: false }} name="SignIn" component={handleSignOut} />
        <HomeStack.Screen name="Reuniao" component={Reuniao} />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
            useLegacyImplementation 
            initialRouteName="HomeStackScreen"
            screenOptions={
                ({ navigation }) => ({ 
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
                          <FontAwesome name='bars' onPress={() => navigation.openDrawer()} size={25} style={{ color: 'black'}}/>
                        ),
       })}
      >
        <Drawer.Screen options={{ headerShown: false }} name="HomeStackScreen" component={HomeStackScreen} />
        <Drawer.Screen name="Pessoa" component={Pessoa} />
        <Drawer.Screen name="Info" component={Info} />
        {/* <Drawer.Screen name="SignIn" component={handleSignOut} />  */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
