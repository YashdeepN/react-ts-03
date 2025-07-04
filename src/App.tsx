import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | null;
  searchText: string | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const handleGenreClick = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handlePlatformClick = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSelect = (ordering: string) => {
    setGameQuery({ ...gameQuery, ordering });
  };
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr ",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={handleGenreClick}
              selectedGenre={gameQuery.genre ? gameQuery.genre : null}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box marginLeft={3}>
            <GameHeading gameQuery={gameQuery} />
            <HStack marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={handlePlatformClick}
              />
              <SortSelector
                currentSortOrder={gameQuery.ordering}
                onSelectSortOrder={handleSelect}
              />
            </HStack>
          </Box>
          <GameGrid
            gameQuery={gameQuery}
            // selectedPlatform={gameQuery.platform}
            // selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
