import { createContext, useContext } from "react";
import { User } from "../hooks/useUser";

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
  // isLoggedIn: false,
  // setIsLoggedin: (state: boolean) => {
  //   // isLoggendIn
  // }
});

export const InputContex = createContext({
  input: null,
  setInput: () => {},
});



