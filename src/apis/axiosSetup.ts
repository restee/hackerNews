import axios from "axios";
import { API_BASE_URI } from "@env";

export const instance = axios.create({
  baseURL: API_BASE_URI
});

instance.interceptors.response.use(
  (response: any) => {
    if (!response) {
      throw new Error("No response received.");
    }
    if (response.status === 200 && !response.data) {
      throw new Error("No response data received.");
    }
    return response.data;
  },
  (error: any) => {
    return Promise.reject({
      status: error.response.status,
      data: error.response.data
    });
  }
);

export default instance;
