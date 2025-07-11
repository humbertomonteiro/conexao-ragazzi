import { createContext, useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import { auth } from "../infra/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { userRepository } from "../infra/repositories/UserRepository";
import type { User } from "../infra/repositories/UserRepository";

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export type UserAction =
  | { type: "SET_USER"; payload: User | null }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

export interface UserContextType {
  state: UserState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  createUser: (
    user: Omit<User, "id" | "createdAt">,
    password: string
  ) => Promise<string>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const initialState: UserState = {
  user: null,
  loading: true,
  error: null,
};

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Verificar estado de autenticação ao carregar
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        if (firebaseUser) {
          const user = await userRepository.getById(firebaseUser.uid);
          dispatch({ type: "SET_USER", payload: user });
        } else {
          dispatch({ type: "SET_USER", payload: null });
        }
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          payload: `Erro ao carregar usuário: ${err}`,
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      await signInWithEmailAndPassword(auth, email, password);
      const user = await userRepository.getByEmail(email);
      if (!user) {
        throw new Error("Usuário não encontrado no Firestore");
      }
      dispatch({ type: "SET_USER", payload: user });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: `Erro ao fazer login: ${err}`,
      });
      throw err;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      dispatch({ type: "SET_USER", payload: null });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: `Erro ao fazer logout: ${err}`,
      });
      throw err;
    }
  };

  const createUser = async (
    user: Omit<User, "id" | "createdAt">,
    password: string
  ): Promise<string> => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        password
      );
      const id = await userRepository.create({
        email: user.email,
        name: user.name,
        role: user.role,
      });
      const newUser = await userRepository.getById(userCredential.user.uid);
      dispatch({ type: "SET_USER", payload: newUser });
      return id;
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: `Erro ao criar usuário: ${err}`,
      });
      throw err;
    }
  };

  return (
    <UserContext.Provider value={{ state, login, logout, createUser }}>
      {children}
    </UserContext.Provider>
  );
};
