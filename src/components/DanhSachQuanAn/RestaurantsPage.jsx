import React from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
import FoodNearestYou from "./NearestFoodsToYou";
import NearestRestaurantsToYou from "./NearestRestaurantsToYou";
const RestaurantsPage = () => {
  return (
    <>
      <Flex minHeight={"100vh"} justifyContent={"center"}>
        <Container maxW={"container.md"} padding={20}>
          <Box width={1220}>
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
        </Container>
      </Flex>
    </>
  );
};

export default RestaurantsPage;
