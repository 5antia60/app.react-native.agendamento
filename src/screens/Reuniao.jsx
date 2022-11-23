import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { SafeAreaView, ScrollView, VirtualizedList, Text, View, TextInput, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { IconButton } from '@react-native-material/core';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { db } from '../../firebase';
import { database } from '../../firebase';
import { deleteDoc, query, collection, onSnapshot, doc, getDoc, setDoc, addDoc } from 'firebase/firestore';
// import * as MailComposer from 'expo-mail-composer';
import SearchableDropdown from 'react-native-searchable-dropdown';

export default function Reuniao() {  
  const navigation = useNavigation();
  // const [items, setItems] = useState([]);
  var selectedItems = [
    {
      id: 7,
      name: 'Go',
    },
    {
      id: 8,
      name: 'Swift',
    }
  ]

  var items = [
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Java',
    },
    {
      id: 3,
      name: 'Ruby',
    },
    {
      id: 4,
      name: 'React Native',
    },
    {
      id: 5,
      name: 'PHP',
    },
    {
      id: 6,
      name: 'Python',
    },
    {
      id: 7,
      name: 'Go',
    },
    {
      id: 8,
      name: 'Swift',
    },
  ];
  const [pessoas, setPessoas] = useState([]);
  const [convidados, setConvidados] = useState([]);
  const [formReuniao, setFormReuniao] = useState({
    assunto: '',
    duracao: '',
    data: '',
    convidados: [],
    horarios: []
  });

  function navigateBack() {
    navigation.goBack()
  }

  function onItemSelectConvidados(item) {
    console.log(items.length)
    items.pop()
    console.log(items.length)
    setConvidados([...convidados, item])
    console.log(item.name)
    for (var i = 0; i < items.length; i++) {
      if (items[i].name === item.name) {
          var spliced = items.splice(i, 1);
          console.log("Removed element: " + spliced.name);
          console.log("Remaining elements: " + items);
      }
  }
  }

  const myDoc = collection(db, "Pessoa");

  useEffect(() => {
    const q = query(collection(db, "Pessoa"));
    onSnapshot(q, (querySnapshot) => {
      const result = [];
      querySnapshot.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
      setPessoas(result);
      console.log(pessoas)
    });
  }, []);

  const postReuniao = (value) => {
   
  }

  //Item FlatList Convidados
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
                onPress={() => {
                  Delete(
                    item.id
                  )
                }}
                icon=
                { 
                  <AntDesign name="deleteuser" size={16} color="black" />
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
            <Ionicons name="chevron-back-sharp" size={16} color="#14750D" />
          }
        />
        <View>
          <Text style={styles.title}>Nova Reunião</Text>
        </View>
        {/* <Text style={fontSize= 16}>Voltar</Text> */}
        {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      </View>
      <ScrollView style={{width:"100%"}}>
        {/* <View style={styles.content}>
          <Text style={styles.title}>Cadastro de Pessoas</Text>
        </View> */}

        {/* Single */}
        <SearchableDropdown
          onItemSelect={(item) => {
            console.log(item)
            // const items = this.convidados;
            // items.push(item)
            this.setConvidados(items)
            console.log(convidados)

            // item => setConvidados({ ...convidados, item })
            // this.setConvidados(items);
          }}
          containerStyle={{ padding: 5 }}
          onRemoveItem={(item, index) => {
            const itemsc = this.convidados.filter((sitem) => sitem.id !== item.id);
            // this.setState({ selectedItems: items });
            this.setConvidados(itemsc);
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#fff',
            borderColor: '#f3f3f3',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{ color: '#222' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={items}
          defaultIndex={2}
          resetValue={false}
          textInputProps={
            {
              placeholder: "placeholder",
              underlineColorAndroid: "transparent",
              style: {
                  height: 50,
                  padding: 12,
                  borderWidth: 1,
                  backgroundColor: '#fff',
                  borderColor: '#f3f3f3',
                  borderRadius: 5,
                  
              },
              onTextChange: text => alert(text)
            }
          }
          listProps={
            {
              nestedScrollEnabled: true,
            }
          }
        />

        {/* <Text style={styles.label}>Assunto</Text>
        <TextInput
          style={styles.input}
          value={formReuniao.assunto}
          onChangeText={assunto => setFormReuniao({ ...formReuniao, assunto })}
        />

        <Text style={styles.label}>Duração</Text>
        <TextInput
          style={styles.input}
          value={formReuniao.duracao}
          onChangeText={duracao => setFormReuniao({ ...formReuniao, duracao })}
        />

        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          value={formReuniao.data}
          onChangeText={data => setFormReuniao({ ...formReuniao, data })}
        /> */}

        {/* <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          // Listner on the searchable input
          // onItemSelect={(item) => onItemSelectConvidados(item)}
          onItemSelect={(item) => onItemSelectConvidados(item)}
          // Called after the selection
          containerStyle={{padding: 5}}
          // Suggestion container style
          textInputStyle={{
            // Inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            // Single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            // Text style of a single dropdown item
            color: '#222',
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemsContainerStyle={{
            // Items container style you can pass maxHeight
            // To restrict the items dropdown hieght
            maxHeight: '60%',
          }}
          items={items}
          // Mapping of item array
          defaultIndex={2}
          // Default selected item index
          placeholder="Adicione um convidado"
          // place holder for the search input
          resPtValue={true}
          //place holder for the search input
          resetValue={false}
          // Reset textInput Value with true and false state
          underlineColorAndroid="#fff"
          // To remove the underline from the android input
        /> */}

          

        <TouchableOpacity 
          style={styles.button}
          onPress={async () => {
            ''
          }}
        >
          <Text style={styles.buttonText}
          
          >{ 'Salvar Reunião'}</Text>
        </TouchableOpacity>
        <View style={styles.flatListView}>
          <ScrollView>
          <FlatList style={styles.flatList}
            data={pessoas}
            renderItem={({ item }) => Item({item})}
            // keyExtractor={item => String(item.item)}
          />
          <Text style={styles.titleTotal}>
            Total de <Text style={styles.titleTotalBold}>0 convidados</Text>.
          </Text>
          </ScrollView>
        </View>
        </ScrollView>
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
  }
});
