import axiosInstance from "../utils/axios";

export const ChildCategoryAPI = {
  getChildCategoryAPI: async (id) => {
    const res = await axiosInstance.get(`Products/ViewProductByChildCategoryID/${id}?pageIndex=1&pageSize=4`);
    return res?.data; // data returned
  },
};
