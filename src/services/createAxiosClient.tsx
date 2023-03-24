import axios from "axios";
import { toast } from "react-toastify";

const client = axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("Network error - make sure API is running!");
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
    window.localStorage.removeItem("jwt");

    toast.info("Your session has expired, please login again");
  }
  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
    console.log("not found ");
  }
  if (status === 500) {
    if (data.errors === "Value cannot be null. (Parameter 'userName')") {
      toast.info("Please login again.");
    } else {
      toast.error("Server error - check the terminal for more info!");
    }
  }
  throw error.response;
});

export default client