import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import headerStyles from '../styles/headerStyles';

export default function Header({ darkMode, toggleDarkMode, title }) {
  return (
    <View style={headerStyles.header}>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Ionicons
          name={darkMode ? 'sunny' : 'moon'}
          size={28}
          color={darkMode ? 'yellow' : 'black'}
        />
      </TouchableOpacity>

      <Text style={[headerStyles.headerText, { color: darkMode ? 'white' : 'black' }]}>
        {title}
      </Text>

      <View style={{ width: 28 }} />
    </View>
  );
}
