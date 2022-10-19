import Routes from './src/Routes';

import { NavigationContainer, OrderPlacementStack } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>

      <Routes />
      {/* <OrderPlacementStack.Navigator initialRouteName={'Home'}>
        <OrderPlacementStack.Screen name="Home" component={Home} />
      </OrderPlacementStack.Navigator> */}
    </NavigationContainer>
  );
}
