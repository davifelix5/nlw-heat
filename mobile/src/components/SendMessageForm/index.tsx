import React, { useState } from 'react';

import {
  Keyboard,
  TextInput,
  View,
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSendMessage() {
    
    const messageFormatted = message.trim();
    
    if (messageFormatted.length > 0) {
      setLoading(true);
      await api.post('messages', { message: messageFormatted });
      setMessage('');
      Keyboard.dismiss();
      setLoading(false);
      alert('Mensagem enviada com sucesso!')
    } else {
      alert('Escreva uma mensagem antes de enviar')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        maxLength={140}
        value={message}
        onChangeText={setMessage}
        editable={!loading}
      />
      <Button
        title="Enviar mensagem"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={loading}
        onPress={handleSendMessage}
      />
    </View>
  );
}