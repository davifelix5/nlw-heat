import React, { useEffect, useState } from 'react';

import {
  ScrollView
} from 'react-native';

import { styles } from './styles';

import { Message, MessageProps } from '../Message';
import { api } from '../../services/api';

export function MessageList() {

  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    api.get<MessageProps[]>('messages/last-three')
      .then(res => {
        setCurrentMessages(res.data);
      });
  }, []);

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map(message => {
        return <Message key={message.id} data={message} />
      })}
    </ScrollView>
  );
}