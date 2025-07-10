import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";
import React from "react";

import InfiniteScroll from "react-infinite-scroll-component";

// interface Game {
//   id: number;
//   name: string;
// }

// interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  //   const [games, setGames] = useState<Game[]>([]);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     apiClient
  //       .get<FetchGameResponse>("/games")
  //       .then((res) => setGames(res.data.results))
  //       .catch((err) => setError(err.message));
  //   }, []);

  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGameCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  return (
    <>
      {error && <Text>{error.message}</Text>}
      {/* <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid> */}
      <InfiniteScroll
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        children={
          <SimpleGrid
            padding="10px"
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={5}
          >
            {isLoading &&
              skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))}

            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        }
        loader={<Spinner />}
        dataLength={fetchedGameCount}
      ></InfiniteScroll>
    </>
  );
};

export default GameGrid;
