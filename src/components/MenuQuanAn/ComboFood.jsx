import React from "react";
import {
  Box,
  Flex,
  Image,
  VStack,
  Text,
  HStack,
  Center,
} from "@chakra-ui/react";
import combo from "./ComboData";

const ComboFood = ({ onClickDishes }) => {
  return (
    <>
      {combo.ComboData.map((item, index) => {
        return (
          <Flex
            className="DishesCard comboCard"
            gap={5}
            padding={15}
            bg={"white"}
            borderRadius={5}
            cursor={"pointer"}
            onClick={() => onClickDishes(item)}
            w={"100%"}
          >
            <Box w={{ sm: "10%", xl: "40%" }}>
              <Image src={item.comboImage} w={"100%"}></Image>
            </Box>
            <VStack
              w={{ sm: "90%", xl: "60%" }}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Box>
                <Text fontSize={18}>{item.comboName}</Text>
                <Text fontSize={14} mt={5} color={"#676767"} h={"auto"}>
                  {item.comboDescribe}
                </Text>
              </Box>
              {/* Saving */}
              <HStack w={"100%"} mt={5} alignItems={"flex-end"}>
                <Flex w={"80%"} flexDir={"column"}>
                  <Flex gap={2} w={"100%"} alignItems={"center"}>
                    <Text
                      color={"#f38621"}
                      bg={"rgba(243,134,33,.3)"}
                      p={"5px"}
                      fontSize={10}
                    >
                      {item.comboSale}
                    </Text>
                    <Text
                      color={"#676767"}
                      textDecor={"line-through"}
                      fontSize={12}
                    >
                      {item.comboOriginPrice}
                    </Text>
                  </Flex>

                  <Text>
                    {item.comboPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Text>
                </Flex>
                <Flex
                  w={"20%"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                >
                  <Flex
                    w={"32px"}
                    h={"30px"}
                    bg={"#00B14F"}
                    borderRadius={100}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image
                      w={30}
                      src="https://food.grab.com/static/images/quick-add/plus-white.svg"
                    />
                  </Flex>
                </Flex>
              </HStack>
            </VStack>
          </Flex>
        );
      })}
    </>
  );
};

export default ComboFood;
