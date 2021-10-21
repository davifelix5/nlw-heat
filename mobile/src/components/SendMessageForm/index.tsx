import React, { useState } from 'react';

import {
  TextInput,
  View,
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSendMessage() {
    setLoading(true);
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