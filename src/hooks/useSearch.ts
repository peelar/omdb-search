import { OMDBSearchResponse } from "./../../types";
import useSWR from "swr";
import fetcher from "../api/fetcher";
import { AxiosError } from "axios";

type UseSearchValues = {
  results: OMDBSearchResponse | undefined;
  isLoading: boolean;
  isError: AxiosError<any> | undefined;
};

const useSearch = (phrase: string, page: number): UseSearchValues => {
  const numPage = page.toString();
  const { data, error } = useSWR<OMDBSearchResponse, AxiosError>(
    () => `search/phrase=${phrase}/page=${page}`,
    () => fetcher(phrase, numPage)
  );
  return {
    results: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSearch;
