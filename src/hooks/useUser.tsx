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
  const { setItem, getItem } = useLocalStorage();
  // const { userId, setUserId } = useContext(AuthContext);

  

  const addUser = (user: User): void => {
    setUser(user);
    setItem("user", JSON.stringify(user));
    console.log("user", user)
  };

  const removeUser = (): void => {
    setUser(null);
    setItem("user", "");
  };

  const getUser = () => {
    return JSON.parse(getItem("user")!)
  }

  // const sendId = () => {
  //   setUserId(userId)

  // }


  return { user, addUser, removeUser, getUser,  };
};
