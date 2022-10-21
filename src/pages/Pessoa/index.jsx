import { Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function Pessoa() {
  const [pessoas, setPessoas] = useState([]);
  const [formPessoas, setFormPessoas] = useState({
    nome: '',
    email: '',
    celular: '',
  });

  return (
    <View>
      <Text style={{ marginTop: '1rem' }}>Nome</Text>
      <TextInput
        style={{ border: '1px solid #000000' }}
        value={formPessoas.nome}
        onChangeText={nome => setFormPessoas({ ...formPessoas, nome }) }
      />

      <Text style={{ marginTop: '1rem' }}>E-mail</Text>
      <TextInput
        style={{ border: '1px solid #000000' }}
        value={formPessoas.email}
        onChangeText={email => setFormPessoas({ ...formPessoas, email }) }
      />

      <Text style={{ marginTop: '1rem' }}>Celular</Text>
      <TextInput
        style={{ border: '1px solid #000000' }}
        value={formPessoas.celular}
        onChangeText={celular => setFormPessoas({ ...formPessoas, celular }) }
      />

      <Button
        title="Salvar Pessoa"
        onPress={() => {
          setPessoas([...pessoas, formPessoas]);
          setFormPessoas({
            nome: '',
            email: '',
            celular: '',
          });
        }}
      />

      <FlatList
        data={pessoas}
        renderItem={({item, index}) => <Text key={index}>
          Nome: {item.nome}, E-mail: {item.email}, Celular: {item.celular}
        </Text>}
      />
    </View>
  );
}
