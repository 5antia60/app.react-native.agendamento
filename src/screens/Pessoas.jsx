import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { SafeAreaView, ScrollView, VirtualizedList, Text, View, TextInput, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { IconButton } from '@react-native-material/core';
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import { db } from '../../firebase';
import { database } from '../../firebase';
import { deleteDoc, query, collection, onSnapshot, doc, getDoc, setDoc, addDoc } from 'firebase/firestore';
// import * as MailComposer from 'expo-mail-composer';

export default function Pessoas() {
  const navigation = useNavigation();
  const message = 'Olá fulano!'
  const [idToEdit, setIdToEdit] = useState();
  const [pessoas, setPessoas] = useState([]);
  const [formPessoas, setFormPessoas] = useState({
    nome: '',
    email: '',
    celular: '',
  });

  function navigateBack() {
    navigation.goBack()
  }

  // function sendMail(){
  //   MailComposer.composeAsync({
  //     subject: 'Assunto',
  //     recipients: ['danilosataide@gmail.com'],
  //     body: message,
  //   })
  // }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=+5515991438000&text=${message}`)
  }

  const myDoc = collection(db, "Pessoa");

  useEffect(() => {
    const q = query(collection(db, "Pessoa"));
    onSnapshot(q, (querySnapshot) => {
      const result = [];
      querySnapshot.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
      setPessoas(result);
    });
  }, []);

  const postPessoa = (value) => {
    addDoc(myDoc, value)
      .then(() => alert("Pessoa Salva!"))
      .catch((error) => alert(error.message));
  }

  const addToEditMode = (personData) => {
    setIdToEdit(personData.id);
    setFormPessoas(personData);
  }

  const Delete = (value) => {
    setFormPessoas({
      nome: '',
      email: '',
      celular: '',
    });

    const myDoc = doc(db, "Pessoa", value)

    deleteDoc(myDoc)
      .then(() => {
        alert("Deleted Successfully!")
      })
      .catch((error) => {
        alert(error.message)
      })
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
              {/* <IconButton 
                style={styles.icon} 
                onPress={() => addToEditMode(item)}  
                icon=
                { 
                  <FontAwesome name="whatsapp" size={16} color="#48C857" />
                }
              /> */}
              <IconButton 
                style={styles.icon} 
                onPress={() => addToEditMode(item)}  
                icon=
                { 
                  <Feather name="edit" size={16} color="#2196F3" />
                }
              />
              <IconButton 
                style={styles.icon} 
                onPress={() => {
                  Delete(
                    item.id
                  )
                }}
                icon=
                { 
                  <Ionicons name="trash" size={16} color="#FF0000" />
                }
              />
            </View>
          </View>
          <Text style={styles.email}>E-mail: {item.email}</Text>
          <Text style={styles.celular}>Celular: {item.celular}</Text>
          <TouchableOpacity 
            style={styles.buttonWhatsapp} 
            onPress={sendWhatsapp}
          >
            <FontAwesome style={styles.buttonWhatsappIcon} name="whatsapp" size={16}/>
            <Text style={styles.buttonWhatsappText}>
              Whatsapp
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
          <Text style={styles.title}>Cadastro de Pessoas</Text>
        </View>
        {/* <Text style={fontSize= 16}>Voltar</Text> */}
        {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      </View>
      {/* <ScrollView style={{width:"100%"}}> */}
        {/* <View style={styles.content}>
          <Text style={styles.title}>Cadastro de Pessoas</Text>
        </View> */}
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={formPessoas.nome}
          onChangeText={nome => setFormPessoas({ ...formPessoas, nome })}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={formPessoas.email}
          onChangeText={email => setFormPessoas({ ...formPessoas, email })}
        />

        <Text style={styles.label}>Celular</Text>
        <TextInput
          style={styles.input}
          value={formPessoas.celular}
          onChangeText={celular => setFormPessoas({ ...formPessoas, celular })}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={async () => {
            if (idToEdit) {
              setDoc(doc(db, "Pessoa", idToEdit), {
                nome: formPessoas.nome,
                email: formPessoas.email,
                celular: formPessoas.celular,
              },{merge:true})
              .then(() => {
                alert("Alterações salvas!")
              })
              .catch((error) => {
                alert(error.message)
              });
              
              pessoas.forEach((pessoa, index) => {
                if (pessoa.id === idToEdit)
                  pessoas[index] = { ...formPessoas, id: idToEdit};
                else
                  pessoas[index] = pessoa;
              });

              setIdToEdit(undefined);
              setPessoas(pessoas);
            } else {
              setPessoas([...pessoas, formPessoas]);
              await postPessoa(formPessoas);
            }

            setFormPessoas({
              nome: '',
              email: '',
              celular: '',
            });
          }}
        >
          <Text style={styles.buttonText}
          
          >{idToEdit ? 'Salvar' : 'Adicionar'}</Text>
        </TouchableOpacity>

        <FlatList style={styles.flatList}
          data={pessoas}
          renderItem={({ item }) => Item({item})}
          // keyExtractor={item => String(item.item)}
        />
      {/* </ScrollView> */}
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  containerForm: {
    minWidth: 300,
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    // marginBottom: 80,
    backgroundColor: '#fff',
    flexDirection: "column",
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 40,
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
    // marginTop: 20,
    color: '#14750D',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
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
  flatList: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '100%',
    marginTop: 14,
    borderRadius: 20,
    marginBottom: 0,
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
  buttonWhatsapp: {
    backgroundColor: '#48C857',
    width: '100%',
    borderRadius: 50,
    paddingVertical: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonWhatsappText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    paddingEnd: 5
  },
  buttonWhatsappIcon: {
    color: "#fff",
    paddingStart: 5,
    alignSelf: 'center',
    paddingRight: 10,
  }
});
