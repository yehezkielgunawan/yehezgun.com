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
  PopoverTrigger,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

type PopoverComponentProps = {
  boxIcon: IconType;
  description: string;
  footer_url: string;
};

const PopoverComponent = ({
  boxIcon,
  description,
  footer_url,
}: PopoverComponentProps) => {
  return (
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
            <ChakraLink textColor="blue.400" isExternal href={footer_url}>
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
