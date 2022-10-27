import React, { useEffect } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from '../../firebase';

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import DrawerNavigator from '../pages/DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator 
            screenOptions={{
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerStyle:{
                    backgroundColor: '#14750D'
                }
            }}
            initialRouteName="Welcome">
            <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
            <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
            <Stack.Screen options={{ headerShown: false }} name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      );
}
