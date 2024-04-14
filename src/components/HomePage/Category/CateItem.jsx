import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const CateItem = ({ CateImage, CateName }) => {
  return (
    <>
      <Box>
        <Image w={"100%"} src={CateImage} borderRadius={5} />
        <Text fontSize={"100%"} fontWeight={"bold"}>
          {CateName}
        </Text>
      </Box>
    </>
  );
};

export default CateItem;
