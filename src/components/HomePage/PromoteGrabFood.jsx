import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import SliderPromote from "./SliderPromote";

const PromoteGrabFood = ({ address }) => {
  return (
    <Flex justifyContent={"center"}>
      <Box width={"100%"}>
        <Flex
          fontWeight={"bold"}
          fontSize={{ base: 24, md: 36 }}
          m={0}
          mb={10}
          gap={10}
        >
          <Text>Ưu đãi GrabFood tại</Text>
          <Text color={"#00B14F"}>{address}</Text>
        </Flex>
        <Box>
          <SliderPromote />
        </Box>
      </Box>
    </Flex>
  );
};

export default PromoteGrabFood;
