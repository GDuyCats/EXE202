import { useMutation } from "react-query";
import { OrderAPI } from "../apis/OrderAPI";

export const useCreateCheckOut = () => {
    const { mutate, isLoading, error, data } = useMutation({
      mutationKey: "create-check-out",
      mutationFn: async (params) => {
        return await OrderAPI.createCheckOut(params);
      },
    });
  
    return { mutate, isLoading, error, data };
  };