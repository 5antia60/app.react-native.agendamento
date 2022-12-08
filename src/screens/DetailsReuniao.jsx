import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { SafeAreaView, Button,Pressable,ScrollView, VirtualizedList, Text, View, TextInput, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { IconButton } from '@react-native-material/core';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome,Entypo, Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { db } from '../../firebase';
import { database } from '../../firebase';
import { deleteDoc, query, collection, onSnapshot, doc, getDoc, setDoc, addDoc } from 'firebase/firestore';

const DetailsReuniao = ({ route, navigation }) => {
  const { id, otherParam } = route.params;
  const [pessoas, setPessoas] = useState([]);
  const myDoc = collection(db, "Pessoa");
  const [text, onChangeText] = React.useState("");

  const [reuniao, setReuniao] = useState([]);
  const [formReuniao, setFormReuniao] = useState({
    assunto: '',
    duracao: '',
    data: '',
    horario: '',
    link: '',
    status_confirmado: '',
    convidados: [],
    horarios: []
  });

  function navigateBack() {
    navigation.goBack()
  }

  useEffect(async () => {
    const myDoc = doc(db, "Reuniao", "GtxRqUdwzKMjmE8R5K6Q")

    await getDoc(myDoc)
      // Handling Promises
      .then((snapshot) => {
        // MARK: Success
        if (snapshot.exists) {
          setReuniao(snapshot.data())
        }
        else {
          alert("No Doc Found")
        }
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    // const q = query(collection(db, "Reuniao", "2vK4TKgyCf44oMta49d7"));
    // onSnapshot(q, (querySnapshot) => {
    //   const result = [];
    //   querySnapshot.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
    //   setReuniao(result);
    // });
  }, []);

  function sendWhatsapp(id){
    var cel;
    var link;
    var mes;
    pessoas.forEach(function(pessoa) {
      if(pessoa.id == id){
        console.log(pessoa)
        cel = pessoa.celular
        mes = 'Olá '+pessoa.nome+'! Escolha um horário para a reunião: '+link
      }
    });
    Linking.openURL(`whatsapp://send?phone=+55${cel}&text=${mes}`)
  }

  function Item({ item }) {
    return (
      // <View style={styles.listItem}>
      //   <Text style={styles.titleList}>{item.name}</Text>
      // </View>
      <View style={styles.itemList}>
        <View style={styles.item}>
          <View style={styles.detailsItem}>
            <Text style={styles.nome}>{item.nome}</Text>
            <View style={styles.details}>
              <IconButton 
                style={styles.icon} 
                onPress={() => {}}  
                icon=
                { 
                  <AntDesign name="link" size={16} color="#2196F3" />
                }
              />
              <IconButton 
                style={styles.icon} 
                onPress={() => {
                  sendWhatsapp(
                    item.id
                  )
                }}
                icon=
                { 
                  <FontAwesome style={styles.buttonWhatsappIcon} name="whatsapp" size={16}/>
                }
              />
            </View>
          </View>
          <Text style={styles.email}>E-mail: {item.email}</Text>

          <View 
            style={styles.buttonHorario} 
          >
            <FontAwesome style={styles.buttonHorarioIcon} name="clock-o" size={16}/>
            <Text style={styles.buttonHorarioText}>
              12:00
            </Text>
          </View>
          
        </View>
      </View>
    );
  }

  function Horario({ horario }) {
    return (
      <View style={styles.itemList}>
        <View style={styles.item}>
          <View style={styles.detailsItem}>
            <Text style={styles.nome}>{horario.nome}</Text>
          </View>
          <Text style={styles.email}>E-mail: {horario.email}</Text>
          <TouchableOpacity 
            style={styles.buttonHorario} 
          >
            <Text style={styles.buttonHorarioText}>
              00:00
            </Text>
            <Text style={styles.buttonHorarioText}>
              00:00
            </Text>
            <Text style={styles.buttonHorarioText}>
              00:00
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerForm}>
      <View style={styles.header}>
        <IconButton 
          style={styles.icon} 
          onPress={navigateBack}
          icon=
          { 
            <Ionicons name="chevron-back-sharp" size={16} color="#14750D" />
          }
        />

        <View>
            <Text style={styles.title}>Dia X de Novembro de 2022</Text>
            <Text style={styles.title}>{id}</Text>
        </View>

      </View>
      
      <View style={styles.centralizar}>
          <Text style={{fontSize:15}}>Assunto: XXXXXXX</Text>
      </View>

      <ScrollView style={{width: "100%"}}>
        <View style={styles.header}>
            <AntDesign name="checkcircle" size={15} color="green" />
            <Text style={{fontSize:12}}> Confirmado</Text>
            <AntDesign name="close" size={15} color="red" />
            <Text style={{fontSize:12}}> Pendente Horários</Text>
            <AntDesign name="exclamationcircle" size={12} color="yellow" />
            <Text style={{fontSize:12}}>  Aguardando Reunião</Text>
        </View>

        <View style={styles.header}>
            <AntDesign name="clockcircleo" size={15} color="green" />
            <Text style={{fontSize:15, fontWeight:"bold"}}> Duração: XX:XX</Text> 
        </View>


        <View>
            <Text style={{fontSize:15, fontWeight:"bold"}}>X Convidados</Text>
            <Text> Pendente resposta: X</Text>
        </View>

        {/*Exibir os convidados e respostas*/}
        <View style={styles.detailsPessoas}>
          <Text style={styles.pessoasLabel}>Pessoas</Text>
        </View>
        <View style={styles.flatListView}>
          <ScrollView>
            <FlatList style={styles.flatList}
              data={reuniao.convidados}
              renderItem={({item}) => Item({item})}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>



        <Text style={styles.label}>Defina o horário da reunião:</Text>
        
        {/*Link Reunião*/}
        <Text style={styles.label}>Link da plataforma on-line</Text>
        <TextInput
          style={styles.input}
          value={formReuniao.link}
          onChangeText={link => formReuniao({ ...formReuniao, link })}
        />

        {/*Botão Enviar */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {}}
        >
          <Entypo name="forward" size={30} color='#FFF'/>
          <Text style={styles.buttonText}
          >Agendar Reunião</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centralizar:{
    alignSelf:'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#14750D',
    width: '100%',
    height: 50,
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconTabRound: {
    width: 100,
    height: 50,
    borderRadius: 20,
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  input: {
    borderBottomWidth: 0,
    height: 50,
    width: '100%',
    color: 'black',//#3B8952
    fontWeight: 'normal',
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  label: {
    marginTop: 15,
    fontSize: 16,
    color: 'gray'
  },
  button: {
    backgroundColor: '#14750D',
    width: '100%',
    height: 50,
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  meet:{
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    color: '#14750D',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerForm: {
    minWidth: 300,
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    marginBottom: 100,
    backgroundColor: '#fff',
    flexDirection: "column",
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 28,
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
  },
  detailsPessoas: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pessoasLabel: {
    fontSize: 18,
    color: '#14750D',
    fontWeight: 'bold'
  },
  flatListView: {
    marginTop: 14,
    height: 220,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#3e7239',
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5
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
  flatList: {
    height: 200,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    width: '100%',
    marginTop: 0,
    borderRadius: 20,
    marginBottom: 0,
  },
  itemList: {
    marginTop: 15,
  },
  item: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
  },
  detailsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nome: {
    fontSize: 14,
    color: '#03484C',
    fontWeight: 'bold'
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  email: {
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 5,
    fontSize: 15,
    color: "gray",
    fontWeight: 'normal'
  },
  detailsPessoas: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pessoasLabel: {
    fontSize: 18,
    color: '#14750D',
    fontWeight: 'bold'
  },
  buttonHorario: {
    marginVertical: 10,
    backgroundColor: 'gray',
    borderRadius: 50,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonHorarioText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal',
    paddingEnd: 5
  },
  buttonHorarioIcon: {
    color: "#fff",
    paddingStart: 5,
    alignSelf: 'center',
    paddingRight: 10,
  },
  buttonWhatsappIcon: {
    color: "#48C857",
    paddingStart: 5,
    alignSelf: 'center',
    paddingRight: 10,
  }


});

export default DetailsReuniao;