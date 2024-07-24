import { UseQueryResult, useQuery } from "react-query";
import { ListShipComp } from "../apis/ListShipComp";

export const useGetAllShipCompany = () => {
  const {
    isError,
    isLoading,
    data,
    refetch,
    error,
  } = useQuery({
    queryKey: ["GetAllShipCompany"],
    queryFn: async () => {
      return await ListShipComp.getAllShipCompany();
    },
  });

  return { isError, isLoading, data, error, refetch };
};