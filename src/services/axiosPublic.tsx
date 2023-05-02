import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: `${import.meta.env.VITE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});