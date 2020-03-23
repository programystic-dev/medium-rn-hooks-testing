import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from '../constants/Styles';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Home Screen</Text>
      <TouchableOpacity onPress={() => navigate('Details', {data: 'Potato 🥔'})}>
        <Text>Go to Details Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
