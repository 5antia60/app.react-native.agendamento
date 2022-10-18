import { StyleSheet, Text, View } from 'react-native';

export default function Historico() {
  return (
    <View style={styles.container}>
      <Text>Pagina do Histórico de Reuniões</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
});