import { useQuery } from "@tanstack/react-query";
import type { ScreenShot } from "../entities/screenShot";
import APIClient from "../services/api-client";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenShots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
