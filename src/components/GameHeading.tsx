import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery?.genreId);
  const genreName = genre?.name || "";

  const platform = usePlatform(gameQuery?.platformId);
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
