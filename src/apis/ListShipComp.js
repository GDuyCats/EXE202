import axiosInstance from "../utils/axios";

export const ListShipComp = {
  getAllShipCompany: async () => {
    const res = await axiosInstance.get(`ShipCompanys/ViewAllShipCompanys`);
    return res?.data; // data returned
  },
};
