import React from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { database } from '../../firebase';
import { deleteDoc, query, collection, onSnapshot, doc, getDoc, setDoc, addDoc } from 'firebase/firestore';

export default function Pessoas({navigation}) {

  const [idToEdit, setIdToEdit] = useState();
  const [pessoas, setPessoas] = useState([]);
  const [formPessoas, setFormPessoas] = useState({
    nome: '',
    email: '',
    celular: '',
  });

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

  return (
    <View style={styles.center}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text style={{ marginTop: 20 }}>Nome</Text>
      <TextInput
        style={{ border: '1px solid #000000', backgroundColor: 'red', width: '100%' }}
        value={formPessoas.nome}
        onChangeText={nome => setFormPessoas({ ...formPessoas, nome })}
      />

      <Text style={{ marginTop: 20 }}>E-mail</Text>
      <TextInput
        style={{ border: '1px solid #000000', backgroundColor: 'red', width: '100%'  }}
        value={formPessoas.email}
        onChangeText={email => setFormPessoas({ ...formPessoas, email })}
      />

      <Text style={{ marginTop: 20 }}>Celular</Text>
      <TextInput
        style={{ border: '1px solid #000000', backgroundColor: 'red', width: '100%'  }}
        value={formPessoas.celular}
        onChangeText={celular => setFormPessoas({ ...formPessoas, celular })}
      />

      <Button
        title={idToEdit ? 'Editar Pessoa' : 'Adicionar Pessoa'}
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
      />

      <FlatList
        data={pessoas}
        renderItem={({ item, index }) => <>
          <Text key={index}>
            Nome: {item.nome}, E-mail: {item.email}, Celular: {item.celular}
          </Text>
          <Text 
            onPress={() => addToEditMode(item)}  
            style={{
              width: 50,
              marginBottom: 10,
              background: 'black',
              color: 'blue',
              padding: 5,
              textAlign: 'center',
            }}
          >Editar</Text>
        </>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

