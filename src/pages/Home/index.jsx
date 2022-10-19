import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform} from 'react-native';
import {Button} from 'react-native-web'
import Splash from '../Splash';

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.main}>

            {/* <View style={styles.top}>
                <Image style={styles.top.image}
                source={require('../../assets/FundoHome.svg')} 
                />
            </View> */}

            <ScrollView>
                <View style={styles.content}>
                    <Text>Conteúdo</Text>
                </View>


            </ScrollView>
        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  content:{
    alignSelf: 'center',
    flex:1,
    width: '98%',
    height: 120,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  }
});