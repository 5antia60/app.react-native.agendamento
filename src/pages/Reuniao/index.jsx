import { StyleSheet, Text, View, Button } from 'react-native';

export default function Reuniao({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Página de Nova Reunião</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});