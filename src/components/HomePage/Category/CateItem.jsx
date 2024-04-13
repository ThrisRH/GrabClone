import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const CateItem = ({ CateImage, CateName }) => {
  return (
    <>
      <Box>
        <Image w={"273px"} src={CateImage} borderRadius={5} />
        <Text fontSize={16} fontWeight={"bold"} mt={10}>
          {CateName}
        </Text>
      </Box>
    </>
  );
};

export default CateItem;
