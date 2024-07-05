import { UseQueryResult, useQuery } from "react-query";
import { ProductAPI } from "../apis/ProductAPI";

export const useGetProductById = (id) => {
  const {
    isError,
    isLoading,
    data,
    refetch,
    error,
  } = useQuery({
    queryKey: ["GetProductById", id],
    queryFn: async () => {
      return await ProductAPI.getProductById(id);
    },
  });

  return { isError, isLoading, data, error, refetch };
};