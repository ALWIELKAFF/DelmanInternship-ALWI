import React from "react";
import {Divider, Flex, Text } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Navbar = ({ items }) => {
  return (
    <Flex w="100%" gap="10">
      <Text fontSize="30px" color="#2F4F4F">
        Delman.io
      </Text>
      <Divider orientation="vertical" h="12" />
      <Breadcrumb>
        {items?.map((item, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href={item.link} p="3">
              {item.text}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Flex>
  );
};

export default Navbar;
