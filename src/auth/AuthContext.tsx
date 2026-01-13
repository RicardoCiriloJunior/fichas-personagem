import { createContext, useState, useEffect } from "react";
import {
  setToken,
  getToken,
  removeToken,
  setUser,
  getUser,
  removeUser,
} from "./AuthService";
import * as api from "../services/Api";

type User = {
  id: number;
  name: string;
  email: string;
  ficha: unknown;
  created_at: string;
  updated_at: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export { AuthContext };

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  function signOut() {
    removeToken();
    removeUser();
    setUserState(null);
  }

  useEffect(() => {
    async function loadUser() {
      const token = getToken();
      const storedUser = getUser();

      if (token && storedUser) {
        try {
          setUserState(storedUser);
        } catch {
          signOut();
        }
      }

      setLoading(false);
    }
    loadUser();
  }, []);

  async function signIn(email: string, password: string) {
    const data = await api.login(email, password);
    const { token } = data;
    const usuario = await api.me(token);

    setToken(token);
    setUser(usuario);
    setUserState(usuario);
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
