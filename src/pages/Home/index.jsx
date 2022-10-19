import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform} from 'react-native';
import {Button, Image} from 'react-native-web';
const statusBarHeight = StatusBar.currentHeight;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.main}>

            <View style={styles.top}>
                <Image style={styles.top.image}
                source={require('../../assets/FundoHome.svg')} 
                />
            </View>

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
    backgroundColor: '#f1f1f1',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  content:{
    alignSelf: 'center',
    flex:1,
    width: '98%',
    height: 120,
    marginBottom: 100,
    marginTop: 2,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  top: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '16rem',
    marginTop: '-4rem',

    image: {
      width: '100%',
      height: '100%',
    },

    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: '22rem',
    // width: '100%',
    // image3: {
    //   width: '100%',
    //   height: '100%',
    //   marginBottom: '-1rem',
    // },
  },
});