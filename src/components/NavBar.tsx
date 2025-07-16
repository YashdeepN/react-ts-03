import { HStack, Image } from "@chakra-ui/react";

import logoImage from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <HStack padding="12px">
        <Link to="/">
          <Image src={logoImage} boxSize="60px" objectFit="contain" />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
