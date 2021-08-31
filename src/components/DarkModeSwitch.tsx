import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, Flex, IconButton } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex gridGap={2} pl={2}>
      {colorMode === "dark" ? (
        <IconButton
          aria-label="Sun"
          icon={<MoonIcon />}
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          aria-label="Moon"
          icon={<SunIcon />}
          onClick={toggleColorMode}
        />
      )}
    </Flex>
  );
};
