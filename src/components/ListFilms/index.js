import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

import Details from '../Details';

export default function ListFilms({ data }) {
  const [visibleModal, setVisibleModal] = useState(false);

  return(
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image style={styles.image} source={{ uri: data.foto}} />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
            <Text style={styles.botaoText}>Leia Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal} >
        <Details film={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    elevation: 3
  },
  titulo: {
    padding: 15,
    fontSize: 18,
  },
  image: {
    height: 250,
    zIndex: 2
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9
  },
  botao: {
    width: 100,
    height: 37,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoText: {
    fontSize: 16,
    color: '#FFF',
  }
})