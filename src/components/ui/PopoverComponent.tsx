import Icon from "@chakra-ui/icon";
import {
  Box,
  Flex,
  Link as ChakraLink,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

type PopoverComponentProps = {
  boxIcon: IconType;
  description: string;
  url: string;
  isSimple: boolean;
};

const PopoverComponent = ({
  boxIcon,
  description,
  url,
  isSimple,
}: PopoverComponentProps) => {
  const { colorMode } = useColorMode();
  return isSimple ? (
    <>
      <Popover placement="bottom" trigger="hover">
        <PopoverTrigger>
          <Box as="a" href={url} target="_blank">
            <Icon
              _hover={{
                color: "gray.500",
              }}
              as={boxIcon}
              fontSize="4xl"
            />
          </Box>
        </PopoverTrigger>
        <PopoverContent
          maxW="10rem"
          bg={colorMode === "light" ? "gray.800" : "white"}
          color={colorMode === "light" ? "white" : "black"}
        >
          <PopoverHeader textAlign="center" fontWeight="semibold">
            {description}
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </>
  ) : (
    <>
      <Popover placement="top" trigger="hover">
        <PopoverTrigger>
          <Box as="button">
            <Icon
              _hover={{
                color: "gray.500",
              }}
              as={boxIcon}
              fontSize="4xl"
            />
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>{description}</PopoverBody>
          <PopoverFooter>
            <ChakraLink textColor="blue.400" isExternal href={url}>
              <Flex gridGap={2} align="center">
                Go to the official docs site. <FaExternalLinkAlt />
              </Flex>
            </ChakraLink>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopoverComponent;
