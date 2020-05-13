import { createContext } from 'react';

interface AuthContextTPO {
  name: string;
}

// hackzinho para burlar o typescript, e poder começar com name do contexto vazio
const AuthContext = createContext<AuthContextTPO>({} as AuthContextTPO);

export default AuthContext;
