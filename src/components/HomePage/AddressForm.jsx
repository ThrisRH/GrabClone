import React, { useState } from "react";

import { Box, Text, VStack, Flex, Image, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

import "./AddressForm.css";
import { Link } from "react-router-dom";

const AddressForm = ({ onSearchClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    onSearchClick(inputValue);
  };

  return (
    <Flex
      className="FormContainer"
      width={"100%"}
      padding={5}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box className="Form" zIndex={100} position={"relative"} width={"1220px"}>
        <VStack
          width={360}
          gap={10}
          padding={"40px 24px"}
          fontWeight={"bold"}
          alignItems={"flex-start"}
          bg={"white"}
          borderRadius={4}
          border={"1px solid #f0efef"}
        >
          <Text fontSize={20}>Good Evening</Text>
          <Text fontSize={40}> Where should we deliver your food today?</Text>

          <Flex className="addressArea">
            <Box fontSize={25}>
              <FontAwesomeIcon
                icon={faLocationPin}
                style={{ color: "#ee2b2b" }}
              />
            </Box>
            <Box height={25} w={"60%"}>
              <input
                style={{ width: "100%", border: "none", outline: "none" }}
                placeholder="Nhập địa chỉ của bạn"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Box>
            <Box>
              <Image
                src="https://food.grab.com/static/images/icons/icon-geo-button.svg"
                w={30}
                h={30}
              />
            </Box>
          </Flex>
          <Link style={{ width: "100%" }} to={"/restaurants"}>
            <Button
              w={"100%"}
              h={45}
              borderRadius={8}
              border={"none"}
              bg={"#00B14F"}
              fontSize={20}
              fontWeight={"bold"}
              color={"White"}
              cursor={"pointer"}
              onClick={handleSearchClick}
            >
              Tìm kiếm
            </Button>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AddressForm;
