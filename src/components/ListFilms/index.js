import React from 'react';
import { View, Text } from 'react-native';

export default function ListFilms({ data }) {
  return(
    <View>
      <Text>{data.nome}</Text>
    </View>
  );
}