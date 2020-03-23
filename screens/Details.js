import React from 'react';
import {Text, View} from 'react-native';
import Styles from '../constants/Styles';
import {useRoute} from '@react-navigation/native';

const DetailsScreen = () => {
  const {params} = useRoute();
  const {data} = params;
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Details Screen</Text>
      <Text>Data passed: {data}</Text>
    </View>
  );
};

export default DetailsScreen;
