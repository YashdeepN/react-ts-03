// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import type { FetchResponse } from "./useData";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
