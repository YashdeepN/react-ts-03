// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
// import genres from "../data/genres";

import APIClient, { type FetchResponse } from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: genres,
  });
};

export default useGenres;
