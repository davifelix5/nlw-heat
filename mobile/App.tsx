import React from 'react';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';
import { AuthContextProvider } from './src/hooks/auth';

export default function App() {
  const [fonstLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthContextProvider>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Home />
    </AuthContextProvider>
  );
}
