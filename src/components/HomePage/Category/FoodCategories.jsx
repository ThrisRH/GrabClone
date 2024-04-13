import React from "react";
import data from "./CateData.jsx";
import CateItem from "./CateItem.jsx";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";

const FoodCategories = () => {
  return (
    <>
      <Text fontSize={35} fontWeight={"bold"} m={"50px 0px"}>
        There's something for everyone!
      </Text>
      <Box p={0}>
        <SimpleGrid columns={4} spacingX="40px" spacingY="50px">
          {data.CateData.map((item, index) => {
            return (
              <Box w={"auto"}>
                <CateItem CateImage={item.CateImage} CateName={item.CateName} />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default FoodCategories;
