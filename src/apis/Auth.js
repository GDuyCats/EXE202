import axiosInstance from "../utils/axios";

export const AuthAPI = {
  login: (input) => {
    return axiosInstance.post("user/login", input);
  },
};
