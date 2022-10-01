import * as React from "react";
import {
  Box,
  Grid,
  Flex,
  useColorMode,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBoolean,
  Switch,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { MyRequest } from "./components/Patron/MyRequest";
import { Request } from "./components/Patron/Request";
import { AirbnbCard } from "./components/Artist/Bulletin";
import { BulletinBoard } from "./components/Artist/BulletinBoard";
import { MyWork } from "./components/Artist/MyWork";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                <BulletinBoard />
              </TabPanel>
              <TabPanel>
                <MyWork />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};
