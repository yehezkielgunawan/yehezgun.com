import {
  Text,
  Flex,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

import NextLink from "next/link";
import { useDesktopWidthCheck } from "../functions/helpers/desktopWidthCheck";
import { HamburgerIcon } from "@chakra-ui/icons";
import { menuList } from "../constants/menuList";
import { useRouter } from "next/dist/client/router";

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
    >
      <Flex
        justifyContent="space-between"
        p={2}
        align="center"
        px={4}
        maxW="48rem"
        mx="auto"
      >
        <NextLink href="/" passHref>
          <Text as="a" fontSize="lg">
            <b>yehezgun.com</b>
          </Text>
        </NextLink>

        <Flex gridGap={3} alignItems="center">
          {isDesktopWidth ? (
            <>
              {menuList.map((menu, index) => (
                <NextLink key={index} href={menu.route} passHref>
                  <Text
                    as="a"
                    fontSize="md"
                    _hover={{
                      color: "gray.500",
                    }}
                    color={router.pathname === menu.route && "gray.500"}
                  >
                    <b>{menu.label}</b>
                  </Text>
                </NextLink>
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
                    <NextLink key={index} href={menu.route} passHref>
                      <MenuItem
                        _hover={{
                          bg: "gray.500",
                        }}
                        bg={router.pathname === menu.route && "gray.500"}
                      >
                        <Text as="a" fontSize="md">
                          <b>{menu.label}</b>
                        </Text>
                      </MenuItem>
                    </NextLink>
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
