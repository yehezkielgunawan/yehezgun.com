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

import { Container } from "./wrapper/Container";
import NextLink from "next/link";
import { useDesktopWidthCheck } from "../functions/desktopWidthCheck";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

export const CTA = () => {
  const isDesktopWidth = useDesktopWidthCheck();

  return (
    <Container
      flexDirection="row"
      position="fixed"
      top="0"
      width="100%"
      maxWidth="48rem"
      justifyContent="space-between"
      p={2}
    >
      <NextLink href="/">
        <ChakraLink>
          <Text fontSize="lg">
            <b>yehezgun.com</b>
          </Text>
        </ChakraLink>
      </NextLink>

      <Flex gridGap={2} alignItems="center">
        {isDesktopWidth ? (
          <>
            <NextLink href="/">
              <ChakraLink>
                <Text fontSize="md">
                  <b>Home</b>
                </Text>
              </ChakraLink>
            </NextLink>
            <NextLink href="/projects">
              <ChakraLink>
                <Text fontSize="md">
                  <b>Projects</b>
                </Text>
              </ChakraLink>
            </NextLink>
            <NextLink href="/articles">
              <ChakraLink>
                <Text fontSize="md">
                  <b>Articles</b>
                </Text>
              </ChakraLink>
            </NextLink>
            <NextLink href="/aboutme">
              <ChakraLink>
                <Text fontSize="md">
                  <b>About Me</b>
                </Text>
              </ChakraLink>
            </NextLink>
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
              <NextLink href="/">
                <MenuItem>
                  <ChakraLink>
                    <Text fontSize="md">
                      <b>Home</b>
                    </Text>
                  </ChakraLink>
                </MenuItem>
              </NextLink>
              <NextLink href="/projects">
                <MenuItem>
                  <ChakraLink>
                    <Text fontSize="md">
                      <b>Projects</b>
                    </Text>
                  </ChakraLink>
                </MenuItem>
              </NextLink>
              <NextLink href="/articles">
                <MenuItem>
                  <ChakraLink>
                    <Text fontSize="md">
                      <b>Articles</b>
                    </Text>
                  </ChakraLink>
                </MenuItem>
              </NextLink>
              <NextLink href="/aboutme">
                <MenuItem>
                  <ChakraLink>
                    <Text fontSize="md">
                      <b>About Me</b>
                    </Text>
                  </ChakraLink>
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        )}
        <DarkModeSwitch />
      </Flex>
    </Container>
  );
};
