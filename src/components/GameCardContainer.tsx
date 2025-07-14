import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="100%"
      borderRadius={10}
      overflow="hidden"
      _hover={{
        bg: "transparent",
        cursor: "pointer",
        transform: "scale(1.05)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
