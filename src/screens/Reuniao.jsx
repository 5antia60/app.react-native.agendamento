import React from "react";
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, VirtualizedList, Text, View, TextInput, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { IconButton } from '@react-native-material/core';
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { db } from '../../firebase';

const Reuniao = () => {     
                    
  const navigation = useNavigation();

  const [pessoas, setPessoas] = useState([]);
  const [formReuniao, setFormReuniao] = useState({
    assunto: '',
    duracao: '',
    data: '',
  });

  function navigateBack() {
    navigation.goBack()
  }

  return (
    // <View style={styles.center}>
    //   <Text>This is the Reuniao screen</Text>
    //   <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    // </View>
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
    {/* <ScrollView style={{width:"100%"}}> */}
      {/* <View style={styles.content}>
        <Text style={styles.title}>Cadastro de Pessoas</Text>
      </View> */}
      <Text style={styles.label}>Assunto</Text>
      <TextInput
        style={styles.input}
        value={formReuniao.assunto}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={async () => {
          await postReuniao(formReuniao);

          setFormPessoas({
            nome: '',
            email: '',
            celular: '',
          });
        }}
      >
        <Text style={styles.buttonText}
        
        >Salvar Reunião</Text>
      </TouchableOpacity>

    {/* </ScrollView> */}
  </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  // center: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   textAlign: "center",
  // },
  containerForm: {
    minWidth: 300,
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    // marginBottom: 100,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  // label: {
  //   marginTop: 15,
  //   fontSize: 16,
  //   color: 'gray'
  // },
  // button: {
  //   backgroundColor: '#14750D',
  //   width: '100%',
  //   height: 50,
  //   borderRadius: 50,
  //   paddingVertical: 8,
  //   marginTop: 14,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // buttonText: {
  //   color: '#fff',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
});

export default Reuniao;