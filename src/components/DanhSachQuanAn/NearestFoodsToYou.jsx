import React from "react";
import { Box, Text } from "@chakra-ui/react";
import SliderQuanAn from "./SliderQuanAn";

const NearestFoodsToYou = () => {
  return (
    <div className="NearestFoods">
      <Box>
        <Text fontWeight={"bold"} fontSize={30} m={0} mb={20} p={"0px 12px"}>
          Món ngon gần bạn
        </Text>
        <Box>
          <SliderQuanAn />
        </Box>
      </Box>
    </div>
  );
};

export default NearestFoodsToYou;
