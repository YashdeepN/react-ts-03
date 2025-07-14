// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";

import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import type { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });
};

export default usePlatforms;
