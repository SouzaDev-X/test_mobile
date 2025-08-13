import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function App() {
  const [contador, setContador] = useState(0);

  return (
  <View style={styles.container}>
  <Text style={styles.texto}>Você clicou no Botão {contador} vezes</Text>
  <Button title="Clique Aqui!!!" onPress={() => setContador(contador + 1)} />
    <Text style={styles.texto}>Wenderson Souza dos Santos</Text>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
});
