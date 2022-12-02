//#region Imports

import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '@react-native-material/core';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { db } from '../../firebase';

//#endregion

export default function Reuniao() {

  //#region Properties

  const navigation = useNavigation();
  const [pessoas, setPessoas] = useState([]);
  const [convidados, setConvidados] = useState([]);
  const [auxTime, setAuxTime] = useState('');
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

  //#endregion

  //#region LifeCycle Events

  useEffect(() => {
    onSnapshot(query(collection(db, "Pessoa")), (querySnapshot) => {
      const result = [];
      querySnapshot.forEach((doc) => result.push({...doc.data(), id: doc.id}));
      setPessoas(result);
    });
  }, []);

  //#endregion

  //#region Methods

  const resetForm = () => {
    setConvidados([]);
    setAuxTime('');
    setFormReuniao({
      assunto: '',
      duracao: '',
      data: '',
      convidados: [],
      horarios: []
    });
  }

  const postMeeting = (meeting) => {
    addDoc(collection(db, "Reuniao"), meeting)
      .then(() => {
        alert("Reuniao Salva!");
        resetForm();
      })
      .catch((error) => alert(error.message));
  }

  const addTime = (value) => {
    if (value === '')
      return alert('Digite um horario');

    setFormReuniao({...formReuniao, horarios: [...formReuniao.horarios, value]});
    setAuxTime('');
  }

  const navigateBack = () => {
    navigation.goBack();
    resetForm();
  }

  //#endregion

  function Item({item}) {
    return (
      <View style={styles.itemList}>
        <View style={styles.item}>
          <View style={styles.detailsItem}>
            <Text style={styles.nome}>{item.nome}</Text>
            <View style={styles.details}>
              <IconButton
                style={styles.icon}
                onPress={() => {
                  Delete(
                    item.id
                  )
                }}
                icon=
                  {
                    <AntDesign name="deleteuser" size={16} color="black"/>
                  }
              />
            </View>
          </View>
          <Text style={styles.email}>E-mail: {item.email}</Text>
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
              <Ionicons name="chevron-back-sharp" size={16} color="#14750D"/>
            }
        />
        <View>
          <Text style={styles.title}>Nova Reunião</Text>
        </View>
        {/* <Text style={fontSize= 16}>Voltar</Text> */}
        {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      </View>
      <ScrollView style={{width: "100%"}}>
        {/* <View style={styles.content}>
          <Text style={styles.title}>Cadastro de Pessoas</Text>
        </View> */}
        <Text style={styles.label}>Assunto</Text>
        <TextInput
          style={styles.input}
          value={formReuniao.assunto}
          onChangeText={assunto => setFormReuniao({...formReuniao, assunto})}
        />

        <Text style={styles.label}>Duração</Text>
        <TextInput
          style={styles.input}
          value={formReuniao.duracao}
          onChangeText={duracao => setFormReuniao({...formReuniao, duracao})}
        />

        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          value={formReuniao.data}
          onChangeText={data => setFormReuniao({...formReuniao, data})}
        />

        <Text style={styles.label}>Horários</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput
            style={{...styles.input, width: '80%'}}
            value={auxTime}
            onChangeText={value => setAuxTime(value)}
          />
          <IconButton
            style={styles.icon}
            onPress={() => addTime(auxTime)}
            icon={<Entypo name="circle-with-plus" size={18} color="black"/>}
          />
        </View>

        <View style={styles.timesArea}>
          { formReuniao.horarios.map((horario, index) => <Text style={styles.timeLabel} key={index}>{ horario }</Text>) }
        </View>

        <View style={styles.detailsPessoas}>
          <Text style={styles.pessoasLabel}>Pessoas</Text>
        </View>

        <Picker
          style={{
            height: '50px',
            padding: '12px',
            borderWidth: '1px',
            backgroundColor: 'rgb(243, 243, 243)',
            borderColor: 'rgb(243, 243, 243)',
            borderRadius: '10px',
          }}
          selectedValue={0}
          placeholder="Selecione um convidado"
          onValueChange={(itemValue, itemIndex) => {
            if (itemValue != 0) {
              setConvidados([...convidados, JSON.parse(itemValue)]);
              pessoas.splice(itemIndex, 1);
              setPessoas(pessoas);
            }
          }}>
          {
            pessoas.map(pessoa => <Picker.Item
              style={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#fff',
                borderColor: '#f3f3f3',
                borderWidth: 1,
              }}
              key={pessoa.id}
              label={pessoa.nome}
              value={JSON.stringify(pessoa)}/>)
          }
          <Picker.Item
            style={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#fff',
              borderColor: '#f3f3f3',
              borderWidth: 1,
            }}
            key={-1}
            label={'Selecione a pessoa'}
            value={0}/>
        </Picker>

        <View style={styles.flatListView}>
          <ScrollView>
            <FlatList style={styles.flatList}
                      data={convidados}
                      renderItem={({item}) => Item({item})}
                      keyExtractor={item => item.id}
            />
            <Text style={styles.titleTotal}>
              Total de <Text style={styles.titleTotalBold}>{convidados.length} convidados</Text>.
            </Text>
          </ScrollView>
        </View>


        <TouchableOpacity
          style={styles.button}
          onPress={() => postMeeting({...formReuniao, convidados})}>
          <Text style={styles.buttonText}>
            Salvar Reunião
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  timesArea: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '0.5rem',
    marginBottom: '1rem',
  },
  timeLabel: {
    backgroundColor: '#1b7714',
    color: '#ffffff',
    padding: '0.2rem',
    borderRadius: '1rem',
    marginRight: '0.3rem',
    marginBottom: '0.3rem',
  },
  containerForm: {
    minWidth: 300,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 28,
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
  },
  pessoasForm: {
    paddingTop: Constants.statusBarHeight + 20,
    marginBottom: 100,
    alignSelf: 'center',
    width: '90%',
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: '#fff',
    textAlign: "center",
    margin: "80",
    padding: "64",
    maxWidth: "730px",
    borderRadius: "10",
    flexDirection: "column",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    alignSelf: 'center',
    width: '100%',
    marginTop: 5,
  },
  title: {
    fontSize: 22,
    color: '#14750D',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  input: {
    borderBottomWidth: 0,
    height: 50,
    width: '100%',
    color: 'black',
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
  flatListView: {
    marginTop: 14,
    height: 250,
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
  buttonNewPessoa: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});