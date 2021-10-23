import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import LovoSvg from '../../assets/logo.svg';

import {
  View
} from 'react-native';

import { styles } from './styles';
import { UserPhoto } from '../UserPhoto';

import { useAuth } from '../../hooks/auth';

export function Header() {
  const { user, signOut } = useAuth();
  return (
    <View style={styles.container}>
      <LovoSvg />
      <View style={styles.logoutSection}>
        <TouchableOpacity onPress={signOut}>
          {!!user && <Text style={styles.logoutText}>
            Sair
          </Text>}
        </TouchableOpacity>
        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}