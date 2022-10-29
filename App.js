import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigations/TabNavigator';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import { AuthStackNavigator } from './src/navigations/StackNavigator';
import { MainStackNavigator } from './src/navigations/StackNavigator';

import Routes from './src/routes';

// export default function App() {
//   return (
//     <NavigationContainer independent={true}>
//       <StatusBar backgroundColor={'transparent'} barStyle={'light-content'} />
//         {/* <Routes /> */}
//         <MainStackNavigator /> 
//     </NavigationContainer> 
//   );
// }

 const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle={'light-content'} />
        <AuthStackNavigator />
      {/* <MainStackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}
export default App;
