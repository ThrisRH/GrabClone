import React, { useState } from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import AddressForm from "./AddressForm";
import PromoteGrabFood from "./PromoteGrabFood";
import FoodCategories from "./Category/FoodCategories";
import { Link } from "react-router-dom";

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
      w={"100%"}
    >
      <Box
        className="BackgroundBorder"
        width={"100%"}
        position={"absolute"}
        top={"15%"}
        borderBottom={"solid 1px #e5e9f0"}
      />
      <Box width={{ base: "100%", md: "60%" }}>
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
      </Box>
      <Box w={"60%"}>
        <PromoteGrabFood address={address} />
        <Link to={"/restaurants"}>
          <Flex className="SeeAllPromotions" mt={5}>
            <Text>See all promotions</Text>
          </Flex>
        </Link>
        <FoodCategories />
      </Box>
    </Flex>
  );
};

export default HomePage;
