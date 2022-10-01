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
  Badge,
  Text,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { AirbnbCard } from "./Bulletin";
import { FullAirbnbCard } from "./FullBulletin";
{
  /* <AirbnbCard Color={"red"} Status={"Late"} /> */
}

export const MyWork = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} w="500px" h="600">
      <GridItem onClick={onOpen}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FullAirbnbCard />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
  );
};
