// app-cursos/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListaCursosScreen from './src/screens/ListaCursosScreen';
import AddCursoScreen from './src/screens/AddCursoScreen';
import EditCursoScreen from './src/screens/EditCursoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaCursos">
        <Stack.Screen 
          name="ListaCursos" 
          component={ListaCursosScreen} 
          options={{ title: 'Cursos Disponíveis' }} 
        />
        <Stack.Screen 
          name="AddCurso" 
          component={AddCursoScreen} 
          options={{ title: 'Adicionar Novo Curso' }} 
        />
        <Stack.Screen 
          name="EditCurso" 
          component={EditCursoScreen} 
          options={{ title: 'Editar Curso' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
