import React from "react";
import Constants from 'expo-constants';
import { View, Button, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from '@expo/vector-icons';
import Logo from '../../src/assets/logoApp.png';

const Home = ({ navigation }) => {
  state = {
    data:[
      {
        "name": "Miyah Myles",
        "email": "miyah.myles@gmail.com",
        "position": "Data Entry Clerk",
        "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
    },
    {
        "name": "June Cha",
        "email": "june.cha@gmail.com",
        "position": "Sales Manager",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
    },
    {
        "name": "Iida Niskanen",
        "email": "iida.niskanen@gmail.com",
        "position": "Sales Manager",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
    },
    {
        "name": "Renee Sims",
        "email": "renee.sims@gmail.com",
        "position": "Medical Assistant",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
    },
    {
        "name": "Jonathan Nu\u00f1ez",
        "email": "jonathan.nu\u00f1ez@gmail.com",
        "position": "Clerical",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
    },
    {
        "name": "Sasha Ho",
        "email": "sasha.ho@gmail.com",
        "position": "Administrative Assistant",
        "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
    },
    ]
  }

  function Item({ item }) {
    return (
      // <View style={styles.listItem}>
      //   <Text style={styles.titleList}>{item.name}</Text>
      // </View>
      <View style={styles.reuniaoList}>
        <View style={styles.reuniao}>
          <View style={styles.divisao}>
            <View style={styles.detailsReuniao}>
              <Text style={styles.data}>Dia 30 de outubro de 2022</Text>
              <View style={styles.detailsHoras}>
                <Feather name="clock" size={16} color="#03484C"></Feather>
                <Text style={styles.horas}>15:00</Text>
              </View>
            </View>

            <Text style={styles.assunto}>Líderes do Grupo B</Text>
            <Text style={styles.participantes}>11 Participantes</Text>
            <View style={styles.detailsStatus}>
              <FontAwesome name="circle" size={12} color="green"></FontAwesome>
              <Text style={styles.status}>Confirmado</Text>
            </View>
          </View>
      
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => {}}
          >
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#03484C"></Feather>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style = {{ width: '50%', height: 50, backgroundColor: 'transparent' }} resizeMode='center' source={Logo}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.descriptionHoras}>Horas de reuniões na semana</Text>
        <Text style={styles.contentHoras}>12:50:00 horas</Text>
        <Text style={styles.title}>Minhas reuniões</Text>
      </View>
      {/* <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      />
      <Button
        title="Sign Out"
        onPress={handleSignOut}
        style={{ color: 'black'}}
      />   */}
      <FlatList style={styles.flatList}
        data={state.data}
        renderItem={({ item }) => Item({item})}
        keyExtractor={item => String(item.item)}
      />
      <Text style={styles.titleTotal}>
        Total de <Text style={styles.titleTotalBold}>0 reuniões</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    marginBottom: 100,
    justifyContent: "center",
    alignItems: "flex-start",
    // textAlign: "center",
  },
  flatList: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 5,
  },
  reuniaoList: {
    marginTop: 15,
    // height: 120,
  },
  reuniao: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
  },  
  divisao: {
    borderBottomWidth: 2,
    borderBottomColor: '#e5e5e5',
    marginBottom: 20
  },
  detailsReuniao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  data: {
    fontSize: 15,
    color: '#03484C',
    fontWeight: 'bold'
  }, 
  horas: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#03484C',
    fontWeight: 'bold'
  },  
  detailsHoras: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },  
  assunto: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5,
    fontSize: 15,
    color: "gray",
    fontWeight: 'bold'
  },  
  participantes: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: "gray"
  },
  detailsStatus: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  status: {
    paddingLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: "gray"
  },  
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  detailsButtonText: {
    color: '#03484C',
    fontSize: 15,
    fontWeight: 'bold'
  },  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 5,
  },
  titleTotal: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
  titleTotalBold: {
    fontWeight: 'bold'
  },
  descriptionHoras: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'normal',
    color: '#14750D',//03484C
  },
  contentHoras: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#14750D',//14750D
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    color: '#14750D',
    fontWeight: 'bold'
  }
});

export default Home;