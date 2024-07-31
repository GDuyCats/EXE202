import { useMutation } from "react-query";
import { OrderAPI } from "../apis/OrderAPI";

export const useCreatePayOS = () => {
    const { mutate, isLoading, error, data } = useMutation({
      mutationKey: "create-payos",
      mutationFn: async (params) => {
        return await OrderAPI.createPayOS(params);
      },
    });
  
    return { mutate, isLoading, error, data };
  };