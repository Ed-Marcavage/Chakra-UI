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
  GridItem,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { MyRequest } from "./components/MyRequest";
import { Request } from "./components/Request";
import { AirbnbCard } from "./components/Bulletin";

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
              <Tab>Bulletin</Tab>
              <Tab>My Work</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={6}
                  w="500px"
                  h="600"
                >
                  <GridItem>
                    <AirbnbCard />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard Color={"yellow"} Status={"3 Days"} />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard Color={"yellow"} Status={"4 Days"} />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard Color={"red"} Status={"10 Days"} />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard Color={"yellow"} Status={"3 Days"} />
                  </GridItem>
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={6}
                  w="500px"
                  h="600"
                >
                  <GridItem>
                    <AirbnbCard Color={"red"} Status={"Late"} />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard Color={"yellow"} Status={"Attention"} />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard Color={"yellow"} Status={"Attention"} />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard Color={"red"} Status={"Late"} />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard />
                  </GridItem>
                  <GridItem>
                    <AirbnbCard Color={"yellow"} Status={"Attention"} />
                  </GridItem>
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};
