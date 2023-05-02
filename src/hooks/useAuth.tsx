import { useEffect , useState} from "react";
import { User, useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser, getUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };
  const userState =() => {
    const [loggedin , setLoggedin] = useState<any>(false)


    console.log(loggedin)

  }

  return { user, login, logout, getUser , userState};
};
