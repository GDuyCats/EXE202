import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5001/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log(error.response.status);
    if (error.response.status === 401) {
      console.log("401 error !");
    }
    throw error;
  }
);

export default axiosInstance;
