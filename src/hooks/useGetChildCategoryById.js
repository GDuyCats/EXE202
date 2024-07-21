import { UseQueryResult, useQuery } from "react-query";
import { ChildCategoryAPI } from "../apis/ChildCategoryAPI";

export const useGetChildCategoryById = (id) => {
  const {
    isError,
    isLoading,
    data,
    refetch,
    error,
  } = useQuery({
    queryKey: ["GetChildCategoryAPI", id],
    queryFn: async () => {
      return await ChildCategoryAPI.getChildCategoryAPI(id);
    },
  });

  return { isError, isLoading, data, error, refetch };
};