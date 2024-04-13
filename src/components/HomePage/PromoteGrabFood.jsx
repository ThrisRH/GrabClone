import React from "react";
import { Flex, Container, Box, Text } from "@chakra-ui/react";
import SliderPromote from "./SliderPromote";

const PromoteGrabFood = ({ address }) => {
  return (
    <Flex justifyContent={"center"}>
      <Container maxW={"container.md"} padding={20}>
        <Box width={1220}>
          <Flex
            fontWeight={"bold"}
            fontSize={35}
            m={0}
            mb={20}
            p={"0px 12px"}
            gap={10}
          >
            <Text>Ưu đãi GrabFood tại</Text>
            <Text color={"#00B14F"}>{address}</Text>
          </Flex>
          <Box>
            <SliderPromote />
          </Box>
        </Box>
      </Container>
    </Flex>
  );
};

export default PromoteGrabFood;
