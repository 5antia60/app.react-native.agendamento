import { Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { database } from '../../../firebase';
import { deleteDoc, query, collection, onSnapshot, doc, getDoc, setDoc, addDoc } from 'firebase/firestore';

export default function Pessoa() {

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
    <View>
      <Text style={{ marginTop: '1rem' }}>Nome</Text>
      <TextInput
        style={{ border: '1px solid #000000' }}
        value={formPessoas.nome}
        onChangeText={nome => setFormPessoas({ ...formPessoas, nome })}
      />

      <Text style={{ marginTop: '1rem' }}>E-mail</Text>
      <TextInput
        style={{ border: '1px solid #000000' }}
        value={formPessoas.email}
        onChangeText={email => setFormPessoas({ ...formPessoas, email })}
      />

      <Text style={{ marginTop: '1rem' }}>Celular</Text>
      <TextInput
        style={{ border: '1px solid #000000' }}
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
              width: '6rem',
              marginBottom: '2rem',
              background: 'black',
              color: 'white',
              padding: '0.3rem 1rem',
              textAlign: 'center',
            }}
          >Editar</Text>
        </>
      }
      />
    </View>
  );
}
