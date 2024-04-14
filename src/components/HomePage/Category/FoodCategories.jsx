import React from "react";
import data from "./CateData.jsx";
import CateItem from "./CateItem.jsx";
import { SimpleGrid, Box, Text, ChakraProvider } from "@chakra-ui/react";

const FoodCategories = () => {
  return (
    <ChakraProvider>
      <Text fontSize={{ base: 16, md: 32 }} fontWeight={"bold"} m={"50px 0px"}>
        There's something for everyone!
      </Text>
      <Box p={0}>
        <SimpleGrid
          columns={{ base: 1, md: 3, lg: 4 }}
          spacingX="1%"
          spacingY="50px"
        >
          {data.CateData.map((item, index) => {
            return (
              <Box w={"auto"}>
                <CateItem CateImage={item.CateImage} CateName={item.CateName} />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
};

export default FoodCategories;
