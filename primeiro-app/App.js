// App.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const produtos = [
    {
      id: '1',
      nome: 'Pingente de Pedra Natural',
      preco: 'R$ 45,00',
      imagem: 'https://i.imgur.com/UM3mrju.jpeg'
    },
    {
      id: '2',
      nome: 'Pulseira de Cristais',
      preco: 'R$ 35,00',
      imagem: 'https://i.imgur.com/yrGVqt3.jpeg'
    },
    {
      id: '3',
      nome: 'Colar de Quartzo Rosa',
      preco: 'R$ 55,00',
      imagem: 'https://i.imgur.com/F6xQzQy.jpeg'
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4B2C20" barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.titulo}>🪨 Meli Stones</Text>
        <Text style={styles.subtitulo}>Lembranças com significado</Text>
      </View>

      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0',
  },
  header: {
    backgroundColor: '#4B2C20',
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    elevation: 4,
  },
  titulo: {
    color: '#FFD8A8',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 5,
    fontStyle: 'italic',
  },
  lista: {
    padding: 10,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B2C20',
    textAlign: 'center',
  },
  preco: {
    fontSize: 14,
    color: '#8B5E3C',
    marginVertical: 5,
  },
  botao: {
    backgroundColor: '#E0A96D',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 5,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
