import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{" "}
      </MenuButton>
      <MenuList>
        <MenuItem>item1</MenuItem>
        <MenuItem>item2</MenuItem>
        <MenuItem>item3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
