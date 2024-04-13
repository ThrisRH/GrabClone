import React, { useState } from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import AddressForm from "./AddressForm";
import PromoteGrabFood from "./PromoteGrabFood";
import FoodCategories from "./Category/FoodCategories";

const HomePage = () => {
  const [address, setAddress] = useState("");

  const handleSearchClick = (inputValue) => {
    setAddress(inputValue);
  };
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box width={1220}>
        <Image
          src="https://food.grab.com/static/page-home/VN-new-4.jpg"
          alt="thumbnail"
          width={"100%"}
          height={"350px"}
          position={"absolute"}
          objectFit={"cover"}
          top={0}
          left={0}
        />
        <AddressForm onSearchClick={handleSearchClick} />
        <Box
          className="BackgroundBorder"
          width={"100%"}
          mt={-30}
          mb={16}
          border={"solid 1px #e5e9f0"}
        />
        <PromoteGrabFood address={address} />
        <Flex className="SeeAllPromotions">
          <Text>See all promotions</Text>
        </Flex>
        <FoodCategories />
      </Box>
    </Flex>
  );
};

export default HomePage;
