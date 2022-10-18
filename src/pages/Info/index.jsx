import { StyleSheet, Text, View } from 'react-native';

export default function Info() {
  return (
    <View style={styles.container}>
      <Text>Página de Informações do Grupo Buscar</Text>
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