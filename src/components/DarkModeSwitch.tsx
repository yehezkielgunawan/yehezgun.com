import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Sun"
      icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};
