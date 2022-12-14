import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, StyleSheet } from 'react-native';

import { MainStackNavigator, ContactStackNavigator, PessoaStackNavigator } from "./StackNavigator";
import Reuniao from "../screens/Reuniao";
import Historico from "../screens/Historico";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      initialRouteName: 'Home',
      tabBarActiveTintColor: '#3B8952',
      tabBarInactiveTintColor: '#03484C',
      tabBarShowLabel: true,
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderTopWidth: 0,

        bottom: 0,
        left: 10,
        right: 10,
        borderRadius: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: 50,

        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 30,

        elevation: 0,
      }
    }}
    >
      <Tab.Screen name="Home" 
        component={MainStackNavigator} 
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused) {
              return <FontAwesome name='home' size={size} color={color} />
            }

            return <FontAwesome name='home' size={size} color={color} />
          }
        }}  
      />
      <Tab.Screen 
        component={Reuniao}
        name="Nova Reunião"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused) {
              return (  
                  <LinearGradient onPress={() => navigation.navigate('Home')} style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#3B8952', '#03484C']}>
                    <Entypo name="home" size={30} color='#FFF'/>
                  </LinearGradient>
              )
            } 

            return (
              <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#3B8952', '#03484C']}>
                <Entypo name="plus" size={30} color='#FFF'/>
              </LinearGradient>
            )
          }
        }}
      />

      <Tab.Screen 
        component={PessoaStackNavigator}
        name="Pessoas"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused) {
              return <FontAwesome name='group' size={size} color={color} />
            }

            return <FontAwesome name='group' size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
	iconTabRound: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  }
});

export default BottomTabNavigator;