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

const DetailsReuniao = ({navigation}) => {
  const myDoc = collection(db, "Pessoa");
  const [text, onChangeText] = React.useState("");
  
  const [pessoas, setPessoas] = useState([]);

  function navigateBack() {
    navigation.goBack()
  }

  useEffect(() => {
    const q = query(collection(db, "Pessoa"));
    onSnapshot(q, (querySnapshot) => {
      const result = [];
      querySnapshot.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
      setPessoas(result);
    });
  }, []);

  function Item({ item }) {
    return (
      <View style={styles.itemList}>
        <View style={styles.item}>
          <View style={styles.detailsItem}>
            <Text style={styles.nome}>{item.nome}</Text>
          </View>
          <Text style={styles.email}>E-mail: {item.email}</Text>
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
        </View>

      </View>
      
      <View style={styles.centralizar}>
          <Text style={{fontSize:15}}>Assunto: XXXXXXX</Text>
      </View>
      
      <br/><br/>

      <View style={styles.header}>
          <AntDesign name="checkcircle" size={15} color="green" />
          <Text style={{fontSize:12}}> Confirmado</Text>
          <AntDesign name="close" size={15} color="red" />
          <Text style={{fontSize:12}}> Pendente Horários</Text>
          <AntDesign name="exclamationcircle" size={12} color="yellow" />
          <Text style={{fontSize:12}}>  Aguardando Reunião</Text>
      </View>

      <br/>

      <View style={styles.header}>
          <AntDesign name="clockcircleo" size={15} color="green" />
          <Text style={{fontSize:15, fontWeight:"bold"}}> Duração: XX:XX</Text> 
      </View>

      <br/>

      <View>
          <Text style={{fontSize:15, fontWeight:"bold"}}>X Convidados</Text>
          <Text> Pendente resposta: X</Text>
      </View>

      {/*Exibir os Respostas*/}

      <FlatList style={styles.flatList}
          data={pessoas}
          renderItem={({ item }) => Item({item})}
      />

      <br/>

      <View style={styles.centralizar}>
        <Text style={{fontSize:15}}> Selecione um horário:</Text>
      </View>

      {/*Exibir os Horários*/}
      <FlatList style={styles.flatList}
          data={pessoas}
          renderHorario={({ horario }) => Horario({horario})}
      />
      
      {/*Link Reunião*/}
      <View style={styles.meet}>
        <Text style={{fontSize:15, fontWeight:"bold"}}> Link meet: </Text>
        <TextInput style={styles.input} value={text} onChangeText={onChangeText}></TextInput>
      </View>

      <br/> 
      {/*Botão Enviar */}
      <View style={styles.centralizar}>
        <Pressable onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Assunto da Reunião')} >
        <LinearGradient style={styles.iconTabRound} colors={['#3B8952', '#03484C']}>
          <Entypo name="forward" size={30} color='#FFF'/>
          <Text style={{color:'#FFF', fontWeight:"bold"}} > Agendar</Text>
        </LinearGradient>
        </Pressable>

      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centralizar:{
    alignSelf:'center',
    justifyContent: 'center',
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
  input:{
    width: '300px',
    borderWidth: 1,
    padding: 5
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
  flatList: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '100%',
    marginTop: 14,
    borderRadius: 20,
    marginBottom: 0,
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
  itemList: {
    marginTop: 15,
    // height: 120,
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
  celular: {
    marginLeft: 0,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'normal',
    color: "gray"
  },
  buttonHorario: {
    backgroundColor: '#DCDCDC',
    width: '100%',
    borderRadius: 50,
    paddingVertical: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonHorarioText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    paddingEnd: 5
  },

});

export default DetailsReuniao;