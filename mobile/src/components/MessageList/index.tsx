import React, { useEffect, useState } from 'react';

import io from 'socket.io-client';

import {
  ScrollView
} from 'react-native';

import { styles } from './styles';

import { Message, MessageProps } from '../Message';

import { api } from '../../services/api';

const socket = io(String(api.defaults.baseURL));

const THREE_SECONDS = 3 * 1000;

const messagesQueue: MessageProps[] = [];

socket.on('new_message', newMessage => {
  messagesQueue.push(newMessage);
})

export function MessageList() {

  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages(prevState => {
          return [
            messagesQueue[0],
            prevState[0],
            prevState[1],
          ]
        });
        messagesQueue.shift();
      }
      return () => clearInterval(timer);
    }, THREE_SECONDS)
  }, []);

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