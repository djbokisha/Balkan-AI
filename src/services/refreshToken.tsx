import mem from "mem";
import { axiosPublic } from "./axiosPublic";

// debugger
const refreshTokenFn = async () => {
    const userSession = JSON.parse(localStorage.getItem("user") as string);
    console.log(userSession)
  
    try {
      const response = await axiosPublic.post("/auth/refresh", {
        refreshToken: userSession?.refreshToken,
        tokenId: userSession?.tokenId
      } as any) 
      console.log(response)
  
      const { session } = response.data;
      console.log(session)
  
      if (!session?.accessToken) {
        localStorage.removeItem("user");
        // localStorage.removeItem("user");
        
      }
  
      localStorage.setItem("user", JSON.stringify(session));
  
      return session;
    } catch (error) {
      localStorage.removeItem("user");
      // localStorage.removeItem("user");
    }
  };

  const maxAge = 10000;


  // setInterval(() => {
  //   refreshTokenFn()
  // }, 10000);
  // refreshTokenFn()

  export const memoizedRefreshToken = mem(refreshTokenFn, {
    maxAge,
  });

  