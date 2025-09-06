import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://chat-app-backend-iqah.onrender.com/api" ,
  withCredentials: true,
},{headers: {
  Authorization: `Bearer ${token}`
}});
