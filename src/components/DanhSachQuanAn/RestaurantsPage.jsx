import React from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
import FoodNearestYou from "./NearestFoodsToYou";
import NearestRestaurantsToYou from "./NearestRestaurantsToYou";
const RestaurantsPage = () => {
  return (
    <>
      <Flex minHeight={"100vh"} justifyContent={"center"}>
        <Box width={"60%"}>
          {/* Scrumb Area */}
          <Flex gap={5} alignItems={"center"} fontSize={16} p={"0px 12px"}>
            <Text color={"#00a5cf"}>Trang chủ</Text>
            &#62;
            <Text>Nhà hàng</Text>
          </Flex>

          {/* Nearest Foods to you */}
          <FoodNearestYou />
          {/* Nearest Restaurants to you */}
          <NearestRestaurantsToYou />
        </Box>
      </Flex>
    </>
  );
};

export default RestaurantsPage;
