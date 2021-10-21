import React from 'react';

import {
  View
} from 'react-native';

import { Header } from '../Header';

import { styles } from './styles';


export function Home(){
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}