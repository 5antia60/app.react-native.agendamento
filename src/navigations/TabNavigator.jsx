import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ headerShown: false }} component={MainStackNavigator} />
      <Tab.Screen name="Contact" options={{ headerShown: false }} component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;