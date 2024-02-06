import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

const TitleTransformer = () => {
  const [titles, setTitles] = useState(["Internship Program 1"]);
  const [titleColors, setTitleColors] = useState(["#000000"]);
  const [titleCount, setTitleCount] = useState(1);
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRandom) return;
      setTitleColors((prevColors) => {
        const newColors = [...prevColors];
        let randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16); 
        newColors[Math.floor(Math.random() * titles.length)] = randomColor;
        return newColors;
      }); 
      setTitleCount((prevCount) => prevCount + 1);
    }, 1000); 

    return () => clearInterval(interval);
  }, [titles, isRandom]);

  const addTitle = () => {
    if (titles.length < 5) {
      const newTitle = `Internship Program ${titles.length + 1}`;
      setTitles((prevTitles) => [...prevTitles, newTitle]);
      setTitleColors((prevColors) => [...prevColors, "#000000"]); 
    }
  };

  const randomizeColors = () => {
    setIsRandom(!isRandom);
    setTitleCount(0);
    setTitleColors((prevColors) => prevColors.map(() => "#000000"));
  };

  const removeTitle = (index) => {
    if (titles.length > 1) {
      setTitles((prevTitles) => prevTitles.filter((_, i) => i !== index));
      setTitleColors((prevColors) => prevColors.filter((_, i) => i !== index));
    }
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
            text: "Title Transformer",
            link: "#",
          },
        ]}
      />
      <Flex flexDir="column" pt="120px">
        {titles.map((title, index) => (
          <Heading key={index} color={titleColors[index]}>
            {title}
          </Heading>
        ))}
      </Flex>
      <Divider pt="50px" w="50%" />
      <HStack pt="50px">
        <Button onClick={() => removeTitle(titles.length - 1)}>
          Remove Title
        </Button>
        <Button onClick={addTitle}>Add Title</Button>
        <Button onClick={randomizeColors}>Randomize Colors</Button>
        <p>Total titles: {titles.length}</p>
        <p>Running for: {titleCount}</p>
      </HStack>
    </VStack>
  );
};

export default TitleTransformer;
