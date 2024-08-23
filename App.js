import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import realizarLogin from './screens/realizarLogin'; // Certifique-se de que o caminho esteja correto
import paginaPrincipal from './screens/PaginaPrincipal'; // Certifique-se de que o caminho esteja correto
import JogadoresListar from './screens/JogadoresListar';

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="realizarLogin">
            <Stack.Screen 
                name="realizarLogin" 
                component={realizarLogin} 
                options={{ title: 'Login' }} // Aqui você pode customizar o título da tela
            />
            <Stack.Screen 
                name="paginaPrincipal" 
                component={paginaPrincipal} 
                options={{ title: 'página Principal' }} // Aqui você pode customizar o título da tela
            />
            <Stack.Screen 
                name="jogadoresListar"
                component={JogadoresListar} 
                options={{ title: 'Listar jogador' }} // Aqui você pode customizar o título da tela
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;