import { useEffect, useState } from 'react';

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

export function MessageList() {

  const [messages, setMessage] = useState<Message[]>([]);

  useEffect(() => {
    api.get<Message[]>('messages/last-three/').then(res => {
      setMessage(res.data);
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