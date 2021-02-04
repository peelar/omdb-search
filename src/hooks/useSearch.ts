import { OMDBSearchResponse } from "./../../types";
import useSWR from "swr";
import fetcher from "../api/fetcher";
import { AxiosError } from "axios";

type UseSearchValues = {
  results: OMDBSearchResponse | undefined;
  isLoading: boolean;
  isError: AxiosError<any> | undefined;
};

const useSearch = (phrase: string): UseSearchValues => {
  const { data, error } = useSWR<OMDBSearchResponse, AxiosError>(
    () => `search/${phrase}`,
    () => fetcher(phrase)
  );
  return {
    results: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSearch;
