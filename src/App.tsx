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
  Badge,
  useBoolean,
  Switch,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { MyRequest } from "./components/MyRequest";
import { Request } from "./components/Request";

export const App = () => {
  const [flag, setFlag] = useBoolean();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return flag ? (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction={"column"}
          background={formBackground}
          p={12}
          rounded={20}
        >
          <Flex ml={500}>
            <Switch
              colorScheme="teal"
              justifyItems="right"
              onChange={setFlag.toggle}
            />
          </Flex>
          <Tabs variant="soft-rounded" colorScheme="teal">
            <TabList>
              <Tab>Request</Tab>
              <Tab>My Requests</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Request />
              </TabPanel>
              <TabPanel>
                <MyRequest />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  ) : (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction={"column"}
          background={formBackground}
          p={12}
          rounded={20}
        >
          <Flex ml={500}>
            <Switch
              colorScheme="teal"
              justifyItems="right"
              onChange={setFlag.toggle}
            />
          </Flex>
          <Tabs variant="soft-rounded" colorScheme="teal">
            <TabList>
              <Tab>Test</Tab>
              <Tab>My Test</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Request />
              </TabPanel>
              <TabPanel>
                <MyRequest />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};
