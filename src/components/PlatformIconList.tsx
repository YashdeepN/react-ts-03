import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";

import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import type { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    xbox: FaXbox,
    pc: FaWindows,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            color="gray.500"
            as={iconMap[platform.slug]}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
