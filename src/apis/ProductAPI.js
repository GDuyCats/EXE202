import axiosInstance from "../utils/axios";

export const ProductAPI = {
  getProductById: async (id) => {
    const res = await axiosInstance.get(`Products/ViewProductByID/${id}`);
    return res?.data; // data returned
  },
};
