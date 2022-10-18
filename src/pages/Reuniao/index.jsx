import { StyleSheet, Text, View } from 'react-native';

export default function Reuniao() {
  return (
    <View style={styles.container}>
      <Text>Página de Nova Reunião</Text>
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