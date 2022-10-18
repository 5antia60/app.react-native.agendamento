import { Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";

export default function Login() {

  function login() {
    // alert('You clicked me!');
  }

  return (
    <View style={styles.login}>
      
      <View style={styles.design_logo}>
        <Text>Imagem principal</Text>
        <Text>dasdsa</Text>
      </View>

      <View style={styles.formArea}>
        <Text style={styles.formArea.welcome}>Bem vindo</Text>
        <TextInput placeholder="Login" style={styles.formArea.inputArea} />
        <TextInput placeholder="Senha" style={styles.formArea.inputArea} />
      </View>

      <View style={styles.botoes}>
        <Button
          title="Login" 
          style={styles.botoes.login} 
          onClick={login()}
        />

        <Button
          title="Cadastre-se" 
          style={styles.botoes.cadastrar} 
          onClick={login()}
        />
      </View>

    </View>
  )
}