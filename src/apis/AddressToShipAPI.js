import axiosInstance from "../utils/axios";

export const AddressToShipAPI = {
  getAddressToShipAPIByUserId: async (id) => {
    const res = await axiosInstance.get(`AddressToShips/ViewAddressToShipByID/${id}`);
    return res?.data; // data returned
  },
};