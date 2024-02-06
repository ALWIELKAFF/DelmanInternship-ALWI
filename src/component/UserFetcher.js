import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  VStack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

const UserFetcher = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchPerson = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://randomuser.me/api");
      const data = response.data.results[0];
      setPerson(data);
      setLoading(false);
      setHasFetched(true);
    } catch (error) {
      console.error("Error fetching person data:", error);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  const getCardColor = () => {
    if (!person) return "#FFFFFF";
    return person.gender === "male" ? "#ADD8E6" : "#FFC0CB";
  };

  return (
    <VStack>
      <Navbar
        items={[
          {
            text: "Home",
            link: "/",
          },
          {
            text: "User Fetcher",
            link: "/userfetcher",
          },
        ]}
      />
      <Flex
        justifyContent="center"
        pt="50px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize="30px" fontWeight="bold">
          {" "}
          USER FETCHER{" "}
        </Text>
        <Divider w="100%" pt="20px" />
        <Flex justifyContent="center" pt="20px">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            pb="40px"
          >
            {!hasFetched && (
              <VStack spacing="4">
                <SkeletonCircle size="100px" />
                <Skeleton height="20px" width="120px" />
                <Skeleton height="16px" width="150px" />
                <Skeleton height="16px" width="100px" />
              </VStack>
            )}

            {hasFetched && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                maxW="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                bg={getCardColor()}
                p="4"
                m="4"
              >
                <>
                  <img
                    src={person.picture.large}
                    alt={`${person.name.first} ${person.name.last}`}
                    style={{
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      marginBottom: "5px",
                    }}
                  />

                  <Text
                    pt="8px"
                    fontStyle="oblique"
                    fontFamily="sans-serif"
                    fontSize="x-large"
                  >
                    {person.name.first} {person.name.last}
                  </Text>
                  <Text pt="10px" fontSize="large">
                    {person.email}
                  </Text>

                  <Flex justifyContent="space-between" width="75%" pt="25px">
                    <Text fontWeight="bold"> {person.nat}</Text>
                    <Text fontWeight="bold">{person.dob.age}</Text>
                  </Flex>
                  <Flex justifyContent="space-between" width="75%">
                    <Text> Nationality </Text>
                    <Text> Age </Text>
                  </Flex>
                </>
              </Box>
            )}
            <Divider w="100%" mt="30px" mb="20px" />

            <Button onClick={fetchPerson} mt="4" w="280px">
              {hasFetched ? "Refetch User" : "Fetch User"}
            </Button>
          </Box>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserFetcher;
