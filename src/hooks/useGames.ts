import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { type FetchResponse } from "../services/api-client";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.ordering,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });
};

// const useGames = (
//   gameQuery: GameQuery
//   // selectedGenre: Genre | null,
//   // selectedPlatform: Platform | null
// ) =>
//   useData<Game>(
//     "/games",
//     {
// params: {
//   genres: gameQuery.genre?.id,
//   platforms: gameQuery.platform?.id,
//   ordering: gameQuery.ordering,
//   search: gameQuery.searchText,
// },
//     },
//     [gameQuery]
//   );

export default useGames;
