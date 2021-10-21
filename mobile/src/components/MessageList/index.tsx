import React from 'react';

import {
  ScrollView
} from 'react-native';

import { styles } from './styles';

import { Message } from '../Message';

const message = {
  id: '2',
  text: 'Vasmo que vamos',
  user: {
    name: 'Davi Félix',
    avatar_url: 'https://github.com/davifelix5.png',
  },
}

export function MessageList() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}