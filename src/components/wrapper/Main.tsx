import { Stack, StackProps } from "@chakra-ui/react";
import MotionStack from "../motion/MotionStack";

export const Main = (props: StackProps) => (
  <MotionStack
    variants={{
      before: { opacity: 0, y: 25, transition: { type: "spring" } },
      after: { opacity: 1, y: 0, transition: { type: "spring" } },
    }}
    initial="before"
    animate="after"
  >
    <Stack
      width="100%"
      maxWidth="48rem"
      pt="4rem"
      px="1rem"
      mt={12}
      {...props}
    />
  </MotionStack>
);
