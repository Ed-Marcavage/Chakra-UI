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
  Image,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface OptionalStatus {
  Color?: string;
  Status?: string;
}

export const AirbnbCard = ({
  Color = "teal",
  Status = "New",
}: OptionalStatus) => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW="200px"
      maxH="200px"
      mx="auto"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6" ml={-4}>
        <Box
          mt="-5"
          fontWeight="semibold"
          fontSize="xs"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>
        <Box>
          <Badge borderRadius="full" colorScheme={Color}>
            {Status}
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};
