import axios from "axios";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {useAuth} from "../hooks/useAuth"

// const { getItem } = useLocalStorage();

const client = axios.create();

// console.log(client);

client.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    console.log(user.accessToken)
    if (user && user.accessToken) {
      config.headers.common = config.headers.common || {};
      config.headers.common["Authorization"] = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message === "Network Error" && !error.response) {
      toast.error("Network error - make sure API is running!");
      console.log(error);
    }
    if (!error.response) {
      return Promise.reject(error);
    }
    const { status, data, config, headers } = error.response;
    if (status === 404) {
      console.log("Network error - not found");
    }
    if (
      status === 401 &&
      headers["www-authenticate"] ===
        'Bearer error="invalid_token", error_description="The token is expired"'
    ) {
      window.localStorage.removeItem("user");

      toast.info("Your session has expired, please login again");
      // Use the `useAuth` hook to logout the user when the session expires
      useAuth().logout();
    }
    if (
      status === 400 &&
      config.method === "get" &&
      data.errors.hasOwnProperty("id")
    ) {
      console.log("not found ");
    }
    if (status === 500) {
      if (
        data.errors ===
        "Value cannot be null. (Parameter 'userName')"
      ) {
        toast.info("Please login again.");
      } else {
        toast.error("Server error - check the terminal for more info!");
      }
    }
    throw error.response;
  }
);

export default client;
