import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";

export default function Login() {
  return (
    <View style={styles.login}>
      
      <View>
        <Text>Imagem principal</Text>
      </View>

      <View style={styles.formArea}>
        <Text style={styles.formArea.welcome}>Bem vindo</Text>
        <TextInput placeholder="Login" style={styles.formArea.inputArea} />
        <TextInput placeholder="Senha" style={styles.formArea.inputArea} />
      </View>

    </View>
  )
}