import React from "react";
import type { Platform } from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text key={platform.id}>{platform.slug}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;
