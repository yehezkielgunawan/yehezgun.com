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
import { Main } from "../../components/wrapper/Main";
import { contactList } from "../../constants/contactList";
import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthCheck";

function AboutMe() {
  const isDesktopWidth = useDesktopWidthCheck();

  return (
    <Main>
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
            Mostly, I use React and Typescript. I make fun projects or write
            some articles in my free time and publish it here.
            <br /> <br />I like to explore some new tech stuff, playing games
            sometimes, and watching animes.
          </Text>
          <HStack spacing={3}>
            {contactList.map((contact, index) => (
              <ChakraLink isExternal href={contact.link_route}>
                <Icon key={index} as={contact.icon} fontSize="4xl" />
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
