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
} from "@chakra-ui/react";

export const MyRequest = () => {
  return (
    <>
      <Box w="500px" h="600">
        <Box mb={5}>
          <Text fontWeight="bold">
            Art Work Title
            <Badge ml="1" colorScheme="green">
              Complete
            </Badge>
          </Text>
          <Text fontSize="sm">Arts Name</Text>
        </Box>
        <Box mb={5}>
          <Text fontWeight="bold">
            Art Work Title
            <Badge ml="1" colorScheme="yellow">
              In progress
            </Badge>
          </Text>
          <Text fontSize="sm">Arts Name</Text>
        </Box>
        <Box mb={5}>
          <Text fontWeight="bold">
            Art Work Title
            <Badge ml="1" colorScheme="red">
              Submitted
            </Badge>
          </Text>
          <Text fontSize="sm">Arts Name</Text>
        </Box>
        <Box mb={5}>
          <Text fontWeight="bold">
            Art Work Title
            <Badge ml="1" colorScheme="green">
              Complete
            </Badge>
          </Text>
          <Text fontSize="sm">Arts Name</Text>
        </Box>
        <Box mb={5}>
          <Text fontWeight="bold">
            Art Work Title
            <Badge ml="1" colorScheme="red">
              Submitted
            </Badge>
          </Text>
          <Text fontSize="sm">Arts Name</Text>
        </Box>
        <Box mb={5}>
          <Text fontWeight="bold">
            Art Work Title
            <Badge ml="1" colorScheme="yellow">
              In progress
            </Badge>
          </Text>
          <Text fontSize="sm">Arts Name</Text>
        </Box>
      </Box>
    </>
  );
};
