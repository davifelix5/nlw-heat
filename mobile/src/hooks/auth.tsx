import React, { createContext, useContext, useEffect, useState } from 'react';

import * as AuthSession from 'expo-auth-session';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../services/api';

const CLIENT_ID = 'bdf128798cc5a43eff77';
const SCOPE = 'read:user';
const USER_STORAGE = '@mobile-nlwheat:user_data';
const TOKEN_STORAGE = '@mobile-nlwheat:token';

interface User {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

interface AuthContextData {
  user: User | null;
  isSigningIn: boolean;
  signIn(): Promise<void>;
  signOut(): Promise<void>;

}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

interface AuthResponse {
  token: string;
  user: User;
}

interface AuthorizationResponse {
  params: {
    code?: string;
    error?: string;
  },
  type?: string
}

const AuthContext = createContext({} as AuthContextData);

function AuthContextProvider({ children } : AuthContextProviderProps) {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  
  async function signIn() {
    try {
      setIsSigningIn(true);
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
      const authSessionResponse = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
  
      if (authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied') {
        const authResponse = await api.post<AuthResponse>('authenticate', {
          code: authSessionResponse.params.code,
        });
        const { token, user } = authResponse.data;
  
        api.defaults.headers.common.authorization = `Bearer ${token}`
  
        await AsyncStorage.setItem(TOKEN_STORAGE, token);
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
  
        setUser(user);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSigningIn(false);
    }
    

  }

  
  async function signOut() {
    await AsyncStorage.removeItem(USER_STORAGE);
    await AsyncStorage.removeItem(TOKEN_STORAGE);
    setUser(null);
  }
  
  useEffect(() => {
    async function loadStorageData() {
      const user = await AsyncStorage.getItem(USER_STORAGE);
      const token = await AsyncStorage.getItem(TOKEN_STORAGE);

      if (user && token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        setUser(JSON.parse(user));
      }

      setIsSigningIn(false);
    }
    loadStorageData();
  }, []);
  
  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user,
      isSigningIn,
    }} >
      {children}
    </AuthContext.Provider>
  );
}


function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth, AuthContext, AuthContextProvider }