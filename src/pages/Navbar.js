import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex w="100%">
      <Text fontSize="30px" color="#2F4F4F">
        delman.io |
      </Text>

      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/home" p="3">Internship Program</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};

export default Navbar;
