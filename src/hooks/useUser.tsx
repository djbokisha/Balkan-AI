import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export interface User {
  accessToken?: string;
  accessTokenExpire?: string;
  refreshToken?: string;
  tokenId?: string;
  email: string;
  userId?: string;
  password?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User): void => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = (): void => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser };
};
