import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListFilms from '../../components/ListFilms';
import api from '../../services/api';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get('r-api/?api=filmes');
      console.log(response.data);
      setFilmes(response.data);
    }

    loadFilms();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Olaa Appp</Text>

      <FlatList 
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <ListFilms data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
