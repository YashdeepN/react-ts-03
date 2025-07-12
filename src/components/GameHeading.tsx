import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreid = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreid);
  const genreName = genre?.name || "";

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);
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
