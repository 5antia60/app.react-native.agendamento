import { Text, View, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Login() {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

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
        
        <TextInput placeholder="e-mail" style={styles.formArea.inputArea} />

        <View style={styles.formArea.inputSenha} >
          <TextInput 
            placeholder="senha" style={styles.formArea.input} 
            value={input}
            onChangeText={ (texto) => setInput(texto) }
            secureTextEntry={hidePass}
          />
          <TouchableOpacity style={styles.formArea.icon} onPress={() => setHidePass(!hidePass)}>
            { hidePass ?
              <Ionicons name="eye" color="#fff" size={22} />
              :
              <Ionicons name="eye-off" color="#fff" size={22} />
            }
          </TouchableOpacity>
        </View>
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