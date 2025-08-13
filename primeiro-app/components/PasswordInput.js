import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import formStyles from '../styles/formStyles';

export default function PasswordInput({ value, onChangeText }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={formStyles.passwordContainer}>
      <TextInput
        style={[formStyles.input, formStyles.passwordInput]}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Ionicons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="#888"
        />
      </TouchableOpacity>
    </View>
  );
}
