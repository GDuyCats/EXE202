import { UseQueryResult, useQuery } from "react-query";
import { ListVouchers } from "../apis/ListVoucher";

export const useGetAllVouchers = () => {
  const {
    isError,
    isLoading,
    data,
    refetch,
    error,
  } = useQuery({
    queryKey: ["GetAllVouchers"],
    queryFn: async () => {
      return await ListVouchers.getAllVouchers();
    },
  });

  return { isError, isLoading, data, error, refetch };
};