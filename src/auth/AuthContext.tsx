import { createContext, useState, useEffect} from "react";
import {
  setToken,
  getToken,
  removeToken,
  setUser,
  getUser,
  removeUser,
} from "./AuthService";
import * as api from "../services/Api";
import type { Ficha } from "../Util/Ficha";

type User = {
  id: number;
  name: string;
  email: string;
  ficha: unknown | Ficha;
  created_at: string;
  updated_at: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  loading: boolean;
  ficha: Ficha | null;
  updateFicha: (ficha: Ficha) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export { AuthContext };

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [ficha, setFicha] = useState<Ficha | null>(null);

  function signOut() {
    removeToken();
    removeUser();
    setUserState(null);
    setFicha(null)
  }

  async function updateFicha(ficha: Ficha) {

    if (!user) return;

    const token = getToken();
    if (!token) {
        signOut();
        return;
    }

    setFicha(ficha);

    const updatedUser = {...user, ficha};
    setUserState(updatedUser);
    setUser(updatedUser);

    await api.atualizarFicha(ficha, user.id, token)
  }

  useEffect(() => {
    async function loadUser() {
      const token = getToken();
      const storedUser = getUser();

      if (token && storedUser) {
        setUserState(storedUser);
        setFicha(storedUser.ficha as Ficha);
        setLoading(false);

        try {
          await api.me(token);
        } catch {
          signOut();
        }
      } else {
        setLoading(false);
      }
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
    setFicha(usuario.ficha as Ficha);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading, ficha, updateFicha }}>
      {children}
    </AuthContext.Provider>
  );
}
