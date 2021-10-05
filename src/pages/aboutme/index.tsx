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
import AppHeader from "components/ui/AppHeader";
import { useAppToast } from "components/ui/AppToast";
import { Main } from "components/wrapper/Main";
import { CHECK_YOUR_CONNECTION_MESSAGE } from "constants/config";
import { contactList } from "constants/contactList";
import { useDesktopWidthCheck } from "functions/helpers/desktopWidthCheck";
import { getAllExperiences } from "functions/lib/fetcher";
import { Experiences } from "functions/lib/types";
import NextImage from "next/image";
import React, { useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";

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
    if (!experienceList) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [experienceList, toast]);

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
          <Heading as="h5" size="lg">
            Yo, hi there!
          </Heading>
          {!isDesktopWidth && (
            <NextImage
              src="/assets/yehez-profile.png"
              width={400}
              height={isDesktopWidth ? 400 : 250}
              layout="responsive"
              alt="Picture of me"
            />
          )}
          <Text textAlign="justify" fontSize={["sm", "md"]}>
            I’m Yehezkiel Gunawan, a frontend engineer. You can call me Yehez.
            Recently, I&apos;m learning React and its libraries. To sharpen my
            skills, I usually push myself make some mini projects using a
            library or framework that I want to master and publish it here.
            Sometimes, I also write an article to explain the process behind it.
          </Text>
          <Text textAlign="justify" fontSize={["sm", "md"]}>
            Besides of programming things, I like to explore some new tech
            stuff, playing games sometimes, and watching animes.
          </Text>
          <Text fontSize="xs" textAlign="justify">
            <i>
              Fun Fact: Actually, I&apos;m afraid of the live coding interview
              or session, but if I have to, I &apos;ll do it whatever it takes
              😁.
            </i>
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
            alt="photo-profile"
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
                    💼 <b>{experience.role_name}</b>
                  </Text>
                  <Text fontSize="sm">🏢 {experience.company_name}</Text>
                  <Text fontSize="md">
                    ⌛{" "}
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
