import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Link,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Home = () => {
  return (
    <Flex justify="start" flexDir="column" alignItems="center">
      <Flex
        justify="center"
        alignItems="center"
        pt="150px"
        fontSize="40px"
        fontStyle="oblique"
        pb="20px"
      >
        Internship Program
      </Flex>
      <Divider w="50%" />

      <Flex justifyContent="center" p="40px" pt="10px">
        <SimpleGrid
          p="40px"
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card>
            <CardHeader>
              <Heading fontSize="20px" fontStyle="italic">
                <Link as={NextLink} href="/titletransformer">
                  Title Transformer
                </Link>
              </Heading>
            </CardHeader>
            <CardBody> A simple title transformation panel </CardBody>
          </Card>
        </SimpleGrid>
        <SimpleGrid
          p="40px"
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card>
            <CardHeader>
              <Heading fontSize="20px" fontStyle="italic">
                <Link as={NextLink} href="/userfetcher">
                  User Fetcher
                </Link>
              </Heading>
            </CardHeader>
            <CardBody flex="0.5">
              {" "}
              A simple API fetching and rendering process{" "}
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Home;
