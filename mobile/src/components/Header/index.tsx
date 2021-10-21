import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import LovoSvg from '../../assets/logo.svg';

import {
  View
} from 'react-native';

import { styles } from './styles';
import { UserPhoto } from '../UserPhoto';

export function Header(){
  return (
    <View style={styles.container}>
      <LovoSvg />
      <View style={styles.logoutSection}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>
            Sair
          </Text>
        </TouchableOpacity>
        <UserPhoto imageUri="https://github.com/davifelix5.png" />
      </View>
    </View>
  );
}