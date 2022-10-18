import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { name as appName } from "./app.json";
import Home from './src/pages/Home';

AppRegistry.registerComponent(appName, () => Routes);

export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
