import { UseQueryResult, useQuery } from "react-query";
import { AddressToShipAPI } from "../apis/AddressToShipAPI";

export const useGetAddressToShipById = (id) => {
  const {
    isError,
    isLoading,
    data,
    refetch,
    error,
  } = useQuery({
    queryKey: ["GetgetAddressToShipAPIByUserId", id],
    queryFn: async () => {
      return await AddressToShipAPI.getAddressToShipAPIByUserId(id);
    },
  });

  return { isError, isLoading, data, error, refetch };
};