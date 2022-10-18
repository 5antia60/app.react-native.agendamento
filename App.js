import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { name as appName } from "./app.json";
import Login from './src/pages/Login';
import Splash from './src/pages/Splash';
import Routes from './src/Routes';

AppRegistry.registerComponent(appName, () => Routes);

export default function App() {
  return (
    <View style={styles.container}>
      <Splash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
