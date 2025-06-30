import { HStack, Image, Text } from "@chakra-ui/react";

import logoImage from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="12px">
        <Image src={logoImage} boxSize="60px" />
        <Text>NavBar</Text>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
