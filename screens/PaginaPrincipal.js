import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';


const PaginaPrincipal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../images/fundo.jpg')} // Substitua com o caminho correto da imagem de fundo
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.box}>
            <Text style={styles.title}>Bem-vindo à Página Principal</Text>
            <Text style={styles.subtitle}>Aqui você pode gerenciar todos os aspectos do seu evento.</Text>
            
            <Pressable 
              style={styles.button} 
              onPress={() => navigation.navigate('jogadoresListar')}
            >
              <Text style={styles.buttonText}>jogadores</Text>
            </Pressable>
            
            <Pressable 
              style={styles.button} 
              onPress={() => navigation.navigate('EditarPerfil')}
            >
              <Text style={styles.buttonText}>Editar Perfil</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaginaPrincipal;