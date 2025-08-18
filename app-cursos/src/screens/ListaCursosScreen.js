// app-cursos/src/screens/ListaCursosScreen.js
import React, { useState, useEffect } from 'react';
import { 
  View, Text, FlatList, Button, StyleSheet, ActivityIndicator, 
  Alert, TouchableOpacity 
} from 'react-native';
import axios from 'axios';

// Lembre-se: Use o IP da sua máquina na rede local
const API_URL = 'http://192.168.1.172:3000/cursos';

export default function ListaCursosScreen({ navigation }) {
  // --- ESTADOS ---
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FUNÇÃO PARA BUSCAR CURSOS ---
  const fetchCursos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL);
      setCursos(response.data);
    } catch (err) {
      setError('Não foi possível carregar a lista de cursos.');
      console.error("Erro ao buscar cursos:", err);
    } finally {
      setLoading(false);
    }
  };

  // --- Atualiza a lista sempre que a tela recebe foco ---
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchCursos();
    });
    return unsubscribe;
  }, [navigation]);

  // --- FUNÇÃO PARA DELETAR UM CURSO ---
  const handleDelete = (id) => {
    Alert.alert(
      "Confirmar Exclusão",
      "Você tem certeza que deseja excluir este curso?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive",
          onPress: async () => {
            try {
              await axios.delete(`${API_URL}/${id}`);
              fetchCursos();
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir o curso.');
              console.error("Erro ao excluir curso:", error);
            }
          }
        }
      ]
    );
  };

  // --- RENDERIZAÇÃO CONDICIONAL ---
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Tentar Novamente" onPress={fetchCursos} />
      </View>
    );
  }

  // --- RENDER PRINCIPAL ---
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCurso')}
      >
        <Text style={styles.addButtonText}>Adicionar Novo Curso</Text>
      </TouchableOpacity>

      <FlatList
        data={cursos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{item.nome}</Text>
              <Text style={styles.itemArea}>{item.area}</Text>
            </View>
            <View style={styles.itemButtonContainer}>
              <Button title="Excluir" color="red" onPress={() => handleDelete(item.id)} />
              <Button
                title="Editar"
                onPress={() => navigation.navigate('EditCurso', { cursoId: item.id })}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum curso cadastrado.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '500',
  },
  itemArea: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  itemButtonContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: 'gray',
  },
});
