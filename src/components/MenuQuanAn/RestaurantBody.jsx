import React from "react";
import { VStack, Text, SimpleGrid } from "@chakra-ui/react";
import ComboFood from "./ComboFood";

const RestaurantBody = ({ item }) => {
  return (
    <>
      <VStack w={1220} alignItems={"flex-start"} mb={30}>
        <Text m={"50px 0px"} fontSize={30} fontWeight={"bold"}>
          Ưu đãi hôm nay
        </Text>
        <SimpleGrid columns={3} spacingX="40px" spacingY="50px">
          <ComboFood onClickDishes={item} />
        </SimpleGrid>
      </VStack>
    </>
  );
};
export default RestaurantBody;
