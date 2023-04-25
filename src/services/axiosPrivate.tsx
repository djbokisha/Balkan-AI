import axios from "axios";
import { memoizedRefreshToken } from "./refreshToken";

axios.defaults.baseURL = "http://localhost:5000";

axios.interceptors.request.use(
  async (config) => {
    const userSession = JSON.parse(localStorage.getItem("user") as string);

    console.log("user session je ", userSession);

    if (userSession?.accessToken) {
      // @ts-ignore
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${userSession?.accessToken}`,
        tokenId: userSession?.tokenId,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      try {
        const result = await memoizedRefreshToken();
        console.log("memoizedRefreshToken result:", result);

        if (result?.accessToken) {
          config.headers = {
            ...config.headers,
            authorization: `Bearer ${result?.accessToken}`,
          };
        }

        return axios(config);
      } catch (err) {
        console.error("memoizedRefreshToken error:", err);
      }
    }
    return Promise.reject(error);
  }
);

export const axiosPrivate = axios;
