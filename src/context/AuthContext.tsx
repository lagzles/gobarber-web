import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextTPO {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

// hackzinho para burlar o typescript, e poder começar com name do contexto vazio
const AuthContext = createContext<AuthContextTPO>({} as AuthContextTPO);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@goBarber:user');
    const token = localStorage.getItem('@goBarber:token');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@goBarber:user', JSON.stringify(user));
    localStorage.setItem('@goBarber:token', token);

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextTPO {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be use within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
