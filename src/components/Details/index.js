import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Details({film, voltar}){
  return(
    <View style={styles.container}>

      <View style={styles.ModalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={{color: '#FFF', fontSize: 16}}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{film.nome}</Text>
        <Text style={styles.sinopse}>Sinopse...</Text>
        <Text style={styles.description}>{film.sinopse}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ModalContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  btnVoltar: {
    backgroundColor: '#e52245',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  titulo: {
    textAlign: 'center',
    color: '#FFF',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  description: {
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10,
  }
});