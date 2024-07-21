import axiosInstance from "../utils/axios";

export const ListPayments = {
  getAllPayments: async () => {
    const res = await axiosInstance.get(`Payments/ViewAllPayments`);
    return res?.data; // data returned
  },
};
