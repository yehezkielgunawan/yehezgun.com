import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { menuList } from "constants/menuList";
import { useDesktopWidthCheck } from "functions/helpers/desktopWidthCheck";
import { useRouter } from "next/dist/client/router";

import { DarkModeSwitch } from "./DarkModeSwitch";

export const CTA = () => {
  const isDesktopWidth = useDesktopWidthCheck();
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Box
      justifyContent="start"
      bg={colorMode === "light" ? "white" : "gray.700"}
      position="fixed"
      width="100%"
      opacity="0.95"
      top={0}
      zIndex={5}
      transition="0.3s ease-out"
    >
      <Flex
        justifyContent="space-between"
        py={1}
        align="center"
        maxW="48rem"
        mx="auto"
        px={isDesktopWidth ? 0 : 2}
      >
        <Text as="a" href="/" fontSize="lg">
          <b>yehezgun.com</b>
        </Text>

        <Flex gridGap={3} alignItems="center">
          {isDesktopWidth ? (
            <>
              {menuList.map((menu, index) => (
                <Text
                  key={index}
                  as="a"
                  href={menu.route}
                  fontSize="md"
                  _hover={{
                    color: "gray.500",
                  }}
                  color={router.pathname === menu.route && "gray.500"}
                  cursor="pointer"
                >
                  <b>{menu.label}</b>
                </Text>
              ))}
              <DarkModeSwitch />
            </>
          ) : (
            <>
              <DarkModeSwitch />
              <Menu autoSelect={false}>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  {menuList.map((menu, index) => (
                    <MenuItem
                      key={index}
                      as="a"
                      href={menu.route}
                      _hover={{
                        bg: "gray.500",
                      }}
                      bg={router.pathname === menu.route && "gray.500"}
                    >
                      <Text fontSize="md">
                        <b>{menu.label}</b>
                      </Text>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
