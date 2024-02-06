import {
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const UserFetcher = () => {
  return (
    <VStack>
      <Navbar />
      <Flex justifyContent="center" pt="150px">
        <Card maxW="md">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">User Fetcher</Heading>
              <Text></Text>
              <Text color="blue.600" fontSize="2xl"></Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </VStack>
  );
};

export default UserFetcher;
