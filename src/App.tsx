import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Input,
  Heading,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Textarea,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

export const App = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction={"column"}
        background={formBackground}
        p={12}
        rounded={20}
      >
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
        <Button mb={6} colorScheme={"teal"}>
          Submit
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  );
};
