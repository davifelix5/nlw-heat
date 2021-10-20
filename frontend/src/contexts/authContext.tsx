import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface User {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

interface AuthContextData {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthResponse {
  token: string;
  user : {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  
  const [user, setUser] = useState<User | null>(null);

  const client_id = 'bdf128798cc5a43eff77';
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}`;

  useEffect(() => {
    const token = localStorage.getItem('@doWhile:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<User>('user/profile/').then(res => {
        setUser(res.data);
      })
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGitHubCode = url.includes('code=');
    if (hasGitHubCode) {
      const [urlWithoutCode, code] = url.split('?code=');
      window.history.pushState({}, '', urlWithoutCode);
      signIn(code);
    }
  }, [])

  async function signIn(githubCode: string) {
    await api.post<AuthResponse>('authenticate/', {
      code: githubCode,
    })
      .then(res => {
        const { token, user } = res.data;

        localStorage.setItem('@doWhile:token', token);

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        setUser(user);

      });
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@doWhile:token');
  }

  return (
    <AuthContext.Provider value={{
      user,
      signInUrl,
      signOut,
    }}>
      { children }
    </AuthContext.Provider>
  );
}