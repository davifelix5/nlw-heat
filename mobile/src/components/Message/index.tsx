import React from 'react';
import { Text } from 'react-native';

import { MotiView } from 'moti';

import {
  View
} from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export interface MessageProps {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

interface Props {
  data: MessageProps;
}

export function Message({ data }: Props) {
  return (
    <MotiView 
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={styles.container}
    >
      <Text style={styles.messageText}>
        {data.text}
      </Text>
      <View style={styles.footer}>
        <UserPhoto size="SMALL" imageUri={data.user.avatar_url} />
        <Text style={styles.username}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}