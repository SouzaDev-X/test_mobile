import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import PasswordInput from './PasswordInput';
import formStyles from '../styles/formStyles';

export default function LoginForm({ darkMode, usuario, setUsuario, matricula, setMatricula, senha, setSenha, onSubmit }) {
  return (
    <View style={[formStyles.form, { backgroundColor: darkMode ? 'white' : '#f0f0f0' }]}>
      <TextInput
        style={formStyles.input}
        placeholder="Usuário"
        placeholderTextColor="#888"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={formStyles.input}
        placeholder="Matrícula"
        placeholderTextColor="#888"
        value={matricula}
        onChangeText={setMatricula}
      />

      <PasswordInput value={senha} onChangeText={setSenha} />

      <TouchableOpacity style={[formStyles.button, { backgroundColor: darkMode ? '#007AFF' : '#007AFF' }]} onPress={onSubmit}>
        <Text style={formStyles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
