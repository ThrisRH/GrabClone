import React from "react";
import { VStack, Text, SimpleGrid } from "@chakra-ui/react";
import ComboFood from "./ComboFood";

const RestaurantBody = ({ item }) => {
  return (
    <>
      <VStack
        w={{ sm: "100%", xl: "60%" }}
        alignItems={"flex-start"}
        mb={30}
        p={{ sm: 10, xl: 0 }}
      >
        <Text m={"30px 0px"} fontSize={30} fontWeight={"bold"}>
          Ưu đãi hôm nay
        </Text>
        <SimpleGrid
          columns={{ sm: 1, xl: 3 }}
          spacingX="10px"
          spacingY="50px"
          w={{ sm: "100%" }}
        >
          <ComboFood onClickDishes={item} />
        </SimpleGrid>
      </VStack>
    </>
  );
};
export default RestaurantBody;
