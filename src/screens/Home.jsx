import React from "react";
import Constants from 'expo-constants';
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Feather, AntDesign,  } from '@expo/vector-icons';
import Logo from '../../src/assets/logoApp.png';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';

const Home = ({ navigation }) => {
  const [reunioes, setReunioes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Reuniao"));
    onSnapshot(q, (querySnapshot) => {
      const result = [];
      querySnapshot.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
      setReunioes(result);
    });
  }, []);

  function Item({ item }) {
    return (
      // <View style={styles.listItem}>
      //   <Text style={styles.titleList}>{item.name}</Text>
      // </View>
      <View style={styles.reuniaoList}>
        <View style={styles.reuniao}>
          <View style={styles.divisao}>
            <View style={styles.detailsReuniao}>
              <Text style={styles.data}>{item.data}</Text>
              <View style={styles.detailsHoras}>
                <Feather name="clock" size={16} color="#03484C"></Feather>
                <Text style={styles.horas}>
                  {
                    item.horario != '' ? item.horario : "A decidir"
                  }
                </Text>
              </View>
            </View>

            <Text style={styles.assunto}>Assunto: {item.assunto}</Text>
            <Text style={styles.participantes}>{item.convidados.length} Participantes</Text>
            <View style={styles.detailsStatus}>
              {
                item.status_confirmado == 1 
                ?
                <>
                <AntDesign name="checkcircle" size={12} color="green"></AntDesign>
                <Text style={styles.status}>Confirmada</Text>
                </>
                : 
                <>
                <AntDesign name="exclamationcircle" size={12} color="#ffd400"></AntDesign>
                <Text style={styles.status}>Aguardando</Text>
                </>
              }

              
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
        <Image style = {{ width: '40%', height: 40, backgroundColor: 'transparent' }} resizeMode='center' source={Logo}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.descriptionHoras}>Horas de reuniões na semana</Text>
        <Text style={styles.contentHoras}>--:--:-- horas</Text>
        <Text style={styles.title}>Minhas reuniões</Text>
      </View>
      {/* <Text>This is the home screen</Text>
      <Button
        title="Sign Out"
        onPress={handleSignOut}
        style={{ color: 'black'}}
      />   */}
      <FlatList style={styles.flatList}
        data={reunioes}
        renderItem={({ item }) => Item({item})}
        keyExtractor={(item, index) => String(item?.item || index)}
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
    marginBottom: 0,
  },
  reuniaoList: {
    marginBottom: 15,
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
    fontSize: 18,
    fontWeight: 'normal',
    color: '#03484C',//03484C
  },
  contentHoras: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#03484C',//14750D
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    color: '#14750D',
    fontWeight: 'bold'
  }
});

export default Home;
