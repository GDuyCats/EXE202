import { useMutation } from "react-query";
import { OrderAPI } from "../apis/OrderAPI";

export const useCreateOrder = () => {
    const { mutate, isLoading, error, data } = useMutation({
      mutationKey: "create-order",
      mutationFn: async (params) => {
        return await OrderAPI.createOrder(params);
      },
    });
  
    return { mutate, isLoading, error, data };
  };