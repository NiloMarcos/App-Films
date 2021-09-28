import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import ListFilms from '../../components/ListFilms';
import api from '../../services/api';

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get('r-api/?api=filmes');
      console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilms();
  }, []);

  if(loading) {
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color="#121212" size={45}/>
      </View>
    )
  }else {
    return (
      <View style={styles.container}>
  
        <FlatList 
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <ListFilms data={item}/> }
        />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
});
