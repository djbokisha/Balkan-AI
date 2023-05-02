import axios from "axios";

import { memoizedRefreshToken } from "./refreshToken";

axios.defaults.baseURL = "http://localhost:5000";

axios.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem("user") as string);

    if (session?.accessToken) {
      // @ts-ignore
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${session?.accessToken}`,
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

      const result = await memoizedRefreshToken();

      // console.log(result)

      if (result?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.accessToken}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export const axiosPrivate = axios;