import * as React from "react";
import {
  Box,
  Input,
  Heading,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";

export const Request = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Box w="500px" h="600">
      <Heading mb={6}>Request</Heading>
      <Input
        placeholder="ed.marcavage@gmail.com"
        variant="filled"
        mb={3}
        type="email"
      ></Input>
      <Input
        placeholder="*************"
        variant="filled"
        mb={6}
        type="password"
      ></Input>
      <Textarea mb={6} placeholder="Here is a sample placeholder" />
      <Flex direction={"column"}>
        <Button mb={6} colorScheme={"teal"}>
          Submit
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Box>
  );
};
