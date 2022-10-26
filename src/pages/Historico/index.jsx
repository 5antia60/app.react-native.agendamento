import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Historico({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Pagina do Histórico de Reuniões</Text>
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