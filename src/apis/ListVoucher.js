import axiosInstance from "../utils/axios";

export const ListVouchers = {
  getAllVouchers: async () => {
    const res = await axiosInstance.get(`Vouchers/ViewAllVouchers`);
    return res?.data; // data returned
  },
};
