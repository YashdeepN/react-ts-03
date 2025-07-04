import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genreName = gameQuery.genre?.name || "";
  const platformName = gameQuery.platform?.name || "";

  return (
    <Heading
      as="h1"
      marginY={5}
      fontSize="5xl"
    >{`${platformName} ${genreName} Games`}</Heading>
  );
};

export default GameHeading;
