import Routes from './src/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer, OrderPlacementStack } from '@react-navigation/native'
import Login from './src/pages/Login';

export default function App() {
  return (
      <NavigationContainer independent={true}>
        <Login />
        {/* <Routes /> */}
      </NavigationContainer>    
  );
}
