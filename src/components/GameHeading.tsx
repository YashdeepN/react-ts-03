import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);

  const genreName = genre?.name || "";
  const platformName = platform?.name || "";

  return (
    <Heading
      as="h1"
      marginY={5}
      fontSize="5xl"
    >{`${platformName} ${genreName} Games`}</Heading>
  );
};

export default GameHeading;
