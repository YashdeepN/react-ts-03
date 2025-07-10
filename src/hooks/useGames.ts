import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";

import APIClient, { type FetchResponse } from "../services/api-client";
import type { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    // apiClient
    //   .get<FetchResponse<Game>>("/games", {
    //     params: {
    //       genres: gameQuery.genre?.id,
    //       parent_platforms: gameQuery.platform?.id,
    //       ordering: gameQuery.ordering,
    //       search: gameQuery.searchText,
    //     },
    // //   })
    //   .then((res) => res.data),
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
