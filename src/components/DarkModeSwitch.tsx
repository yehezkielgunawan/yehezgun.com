import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, Switch, Flex } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex gridGap={2} pl={2}>
      {!isDark ? <SunIcon /> : <MoonIcon />}
      <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
    </Flex>
  );
};
