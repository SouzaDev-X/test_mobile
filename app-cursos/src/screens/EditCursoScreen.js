// app-cursos/src/screens/EditCursoScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

// Lembre-se de usar o seu IP local
const API_URL = 'http://192.168.1.172:3000/cursos';

export default function EditCursoScreen({ route, navigation }) {
  // Recebe o ID do curso passado como parâmetro pela tela anterior
  const { cursoId } = route.params;

  // Estados para controlar os dados do formulário e o status de carregamento
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');
  const [loading, setLoading] = useState(true);

  // Busca os dados atuais do curso na API para preencher o formulário
  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await axios.get(`${API_URL}/${cursoId}`);
        setNome(response.data.nome);
        setArea(response.data.area);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados do curso.');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };
    fetchCurso();
  }, [cursoId]);

  // Função chamada pelo botão "Salvar Alterações"
  const handleUpdate = async () => {
    if (!nome || !area) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }
    try {
      await axios.put(`${API_URL}/${cursoId}`, { nome, area });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o curso.');
      console.error(error);
    }
  };

  // Renderização: exibe indicador de carregamento enquanto busca os dados
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Carregando dados do curso...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Curso:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        placeholder="Digite o nome do curso"
      />
      <Text style={styles.label}>Área do Curso:</Text>
      <TextInput
        value={area}
        onChangeText={setArea}
        style={styles.input}
        placeholder="Digite a área do curso"
      />
      <Button title="Salvar Alterações" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
