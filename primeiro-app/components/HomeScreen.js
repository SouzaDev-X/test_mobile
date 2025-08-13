import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ onLogout }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>
          UEPA - SIGAA - Sistema Integrado de Gestão de Atividades Acadêmicas
        </Text>
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.logout}>SAIR</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text>Bem-vindo ao sistema!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 45, // <- ajustado para ficar igual ao App.js/Headers
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  title: { fontSize: 12, flex: 1 },
  logout: { fontSize: 14, color: 'red', fontWeight: 'bold' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
