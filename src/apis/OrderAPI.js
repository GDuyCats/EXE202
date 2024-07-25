import axiosInstance from "../utils/axios";

export const OrderAPI = {
  createOrder: async (params) => {
    const res = await axiosInstance.post(`Orders/CreateOrder`, params);
    return res; // data returned
  },
  createPayOS: async (params) => {
    const res = await axiosInstance.post(`PayOS/Checkout?userId=${params.userID}&orderId=${params.orderId}`);
    return res; // data returned
  },
  createCheckOut: async (params) => {
    const res = await axiosInstance.post(`Orders/CheckOut`, params);
    return res; // data returned
  }
};
