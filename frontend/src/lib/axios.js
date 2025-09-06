import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://backend-chat-app-s30l.onrender.com/api" ,
  withCredentials: true,
});
