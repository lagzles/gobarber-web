import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextTPO {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

// hackzinho para burlar o typescript, e poder começar com name do contexto vazio
export const AuthContext = createContext<AuthContextTPO>({} as AuthContextTPO);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessios', { email, password });
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Leandro', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthContext;
