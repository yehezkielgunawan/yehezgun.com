import {
  Link as ChakraLink,
  Text,
  Flex,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

import NextLink from "next/link";
import { useDesktopWidthCheck } from "../functions/helpers/desktopWidthCheck";
import { HamburgerIcon } from "@chakra-ui/icons";
import { menuList } from "../constants/menuList";

export const CTA = () => {
  const isDesktopWidth = useDesktopWidthCheck();

  return (
    <Flex
      flexDirection="row"
      position="fixed"
      top="0"
      width="100%"
      maxWidth="48rem"
      justifyContent="space-between"
      p={2}
      pt={2}
    >
      <NextLink href="/">
        <ChakraLink>
          <Text fontSize="lg">
            <b>yehezgun.com</b>
          </Text>
        </ChakraLink>
      </NextLink>

      <Flex gridGap={3} alignItems="center">
        {isDesktopWidth ? (
          <>
            {menuList.map((menu, index) => (
              <NextLink key={index} href={menu.route}>
                <ChakraLink>
                  <Text fontSize="md">
                    <b>{menu.label}</b>
                  </Text>
                </ChakraLink>
              </NextLink>
            ))}
          </>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {menuList.map((menu, index) => (
                <NextLink key={index} href={menu.route}>
                  <MenuItem>
                    <ChakraLink>
                      <Text fontSize="md">
                        <b>{menu.label}</b>
                      </Text>
                    </ChakraLink>
                  </MenuItem>
                </NextLink>
              ))}
            </MenuList>
          </Menu>
        )}
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};
