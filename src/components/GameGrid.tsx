import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

// interface Game {
//   id: number;
//   name: string;
// }

// interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }

const GameGrid = () => {
  //   const [games, setGames] = useState<Game[]>([]);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     apiClient
  //       .get<FetchGameResponse>("/games")
  //       .then((res) => setGames(res.data.results))
  //       .catch((err) => setError(err.message));
  //   }, []);

  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {games.map((game) => (
          // <Box key={game.id}>{game.name}</Box>
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
