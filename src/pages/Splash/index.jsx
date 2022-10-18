import { Text, View, Image, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Logo from '../../assets/logo_design.png';
import styles from "./styles";

export default function Splash() {

  return (
    <View style={styles.main}>

      <View style={styles.top}>
        <Image style={styles.top.image}
        source={require('../../assets/logo_design.svg')} 
        />
      </View>

      <View style={styles.footer}>
        
        <Image style={styles.footer.image2}
        source={require('../../assets/construtora.svg')} />
      </View>
    </View>
    
  )
}
