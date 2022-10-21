import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform} from 'react-native';
import {Button, Image} from 'react-native-web';
const statusBarHeight = StatusBar.currentHeight;

export default function Home2({navigation}) {
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
                    <Text>dasdasd</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text>
                    <Text>Conteúdo</Text><Text>Conteúdo</Text>
                    
                    {/* <Button title="Go to Info" onPress={() => navigation.navigate('Historico')} /> */}
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
    
    maxWidth: '375px',
    maxHeight: '262px',
    height: '16rem',
    marginTop: '-4rem',
    backgroundColor: 'red',

    image: {
      maxWidth: '100%',
      width: '100%',
      height: '100%',
    }
  },
  content:{
    alignSelf: 'center',
    flex:1,
    width: '98%',
    height: 120,
    marginBottom: 140,
    marginTop: 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
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
});