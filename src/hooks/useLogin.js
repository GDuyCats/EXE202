import { useMutation } from "react-query";
import { AuthAPI } from "../apis/Auth";

export const useLogin = () => {
  const { mutate, isLoading, error } = useMutation({
    mutationKey: "login",
    mutationFn: (params) => {
      return AuthAPI._login(params);
    },
  });

  return { mutate, isLoading, error };
};
