import { UseQueryResult, useQuery } from "react-query";
import { ListPayments } from "../apis/ListPayments";

export const useGetAllPayments = () => {
  const {
    isError,
    isLoading,
    data,
    refetch,
    error,
  } = useQuery({
    queryKey: ["GetAllPayments"],
    queryFn: async () => {
      return await ListPayments.getAllPayments();
    },
  });

  return { isError, isLoading, data, error, refetch };
};