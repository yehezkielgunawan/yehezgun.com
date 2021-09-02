import {
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import AppHeader from "../../components/ui/AppHeader";
import { Main } from "../../components/wrapper/Main";
import { contactList } from "../../constants/contactList";
import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthCheck";

function AboutMe() {
  const isDesktopWidth = useDesktopWidthCheck();

  return (
    <Main>
      <AppHeader
        pageTitle="About Me"
        pageDesc="A little description about me."
        route="aboutme"
      />
      <Flex
        justifyContent="space-between"
        gridGap={isDesktopWidth ? 8 : 4}
        align="center"
      >
        <Stack spacing={isDesktopWidth ? 4 : 3}>
          <Heading as="h5">Yo, hi there!</Heading>
          {!isDesktopWidth && (
            <Image src="/assets/yehez-profile.png" objectFit="contain" />
          )}
          <Text textAlign="justify">
            I’m Yehezkiel Gunawan, currently working as a Frontend Engineer.
            Currently, I like to crafting some web apps with React and
            Typescript. I make fun projects or write some articles in my free
            time and publish it here.
            <br /> <br />I like to explore some new tech stuff, playing games
            sometimes, and watching animes.
          </Text>
          <HStack spacing={3}>
            {contactList.map((contact, index) => (
              <ChakraLink key={index} isExternal href={contact.link_route}>
                <Icon
                  _hover={{
                    bgColor: "gray.500",
                  }}
                  as={contact.icon}
                  fontSize="4xl"
                />
              </ChakraLink>
            ))}
          </HStack>
        </Stack>
        {isDesktopWidth && (
          <Image
            src="/assets/yehez-profile.png"
            objectFit="contain"
            boxSize="200px"
          />
        )}
      </Flex>
    </Main>
  );
}

export default AboutMe;
