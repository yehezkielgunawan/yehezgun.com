import {
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Link as ChakraLink,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import AppHeader from "../../components/ui/AppHeader";
import { useAppToast } from "../../components/ui/AppToast";
import { Main } from "../../components/wrapper/Main";
import { CHECK_YOUR_CONNECTION_MESSAGE } from "../../constants/config";
import { contactList } from "../../constants/contactList";
import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthCheck";
import { getAllExperiences } from "../../functions/lib/fetcher";
import { Experiences } from "../../functions/lib/types";

export async function getStaticProps() {
  const experienceList = await getAllExperiences();

  return {
    props: {
      experienceList,
    },
    revalidate: 10,
  };
}

function AboutMe({ experienceList }: { experienceList: Experiences }) {
  const isDesktopWidth = useDesktopWidthCheck();
  const toast = useAppToast();
  const dataExperiences = experienceList ?? [];

  useEffect(() => {
    if (!dataExperiences) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, []);

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
            <Image
              src="/assets/yehez-profile.png"
              objectFit="contain"
              loading="lazy"
            />
          )}
          <Text textAlign="justify">
            I’m Yehezkiel Gunawan, a frontend engineer. You can call me Yehez.
            Currently, I like to craft some web apps with React and Typescript.
            I make fun projects or write some articles in my free time and
            publish it here.
            <br /> <br />I like to explore some new tech stuff, playing games
            sometimes, and watching animes.
          </Text>
          <Flex gridGap={3} wrap="wrap">
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
          </Flex>
        </Stack>
        {isDesktopWidth && (
          <Image
            src="/assets/yehez-profile.png"
            objectFit="contain"
            w="40%"
            borderRadius={4}
            loading="lazy"
          />
        )}
      </Flex>
      <Divider borderWidth={2} />
      <Stack spacing={4} py={4}>
        <Heading as="h5">Work Experiences</Heading>
        {dataExperiences.map((experience, index) => {
          return (
            <Skeleton key={index} isLoaded={experience ? true : false}>
              <Flex gridGap={3} align="center">
                <GoPrimitiveDot />
                <Stack spacing={2}>
                  <Text fontSize="md">
                    <b>{experience.role_name}</b>
                  </Text>
                  <Text fontSize="sm">{experience.company_name}</Text>
                  <Text fontSize="md">
                    <b>
                      <i>{experience.duration}</i>
                    </b>
                  </Text>
                </Stack>
              </Flex>
              <Divider />
            </Skeleton>
          );
        })}
      </Stack>
    </Main>
  );
}

export default AboutMe;
