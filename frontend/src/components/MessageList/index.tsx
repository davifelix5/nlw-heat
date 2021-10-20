import { useEffect, useState } from 'react';

import io from 'socket.io-client';

import styles from './styles.module.scss';

import { api } from '../../services/api';

import logo from '../../assets/logo.svg';

interface User {
  name: string;
  avatar_url: string;
}

interface Message {
  id: string;
  text: string;
  user: User;
}

const messagesQueue: Message[] = [];
const THREE_SECONDS = 3 * 1000;

const socket = io('http://localhost:3333');

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(lastMessages => {
          return [
            messagesQueue[0],
            lastMessages[0],
            lastMessages[1],
          ].filter(Boolean);
        });
        messagesQueue.shift();
      }
    }, THREE_SECONDS);
  }, []);

  useEffect(() => {
    api.get<Message[]>('messages/last-three/').then(res => {
      setMessages(res.data);
    })
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logo} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        {messages.map(message => {
          return (
            <li key={message.id} className={styles.message}>
              <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}