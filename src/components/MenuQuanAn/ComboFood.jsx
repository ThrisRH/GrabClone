import React from "react";
import { Box, Flex, Image, VStack, Text, HStack } from "@chakra-ui/react";
import combo from "./ComboData";

const ComboFood = ({ onClickDishes }) => {
  return (
    <>
      {combo.ComboData.map((item, index) => {
        return (
          <Flex
            className="DishesCard comboCard"
            gap={20}
            minH={190}
            padding={15}
            bg={"white"}
            borderRadius={5}
            cursor={"pointer"}
            onClick={() => onClickDishes(item)}
          >
            <Box>
              <Image src={item.comboImage} w={100}></Image>
            </Box>
            <VStack alignItems={"flex-start"} justifyContent={"space-between"}>
              <Box>
                <Text fontSize={18} height={40}>
                  {item.comboName}
                </Text>
                <Text fontSize={14} mt={20} color={"#676767"} h={"auto"}>
                  {item.comboDescribe}
                </Text>
              </Box>
              {/* Saving */}
              <HStack w={"100%"} mt={20} h={30} alignItems={"flex-end"}>
                <Flex w={"80%"} flexDir={"column"}>
                  <Flex gap={10} mt={20}>
                    <Text
                      color={"#f38621"}
                      bg={"rgba(243,134,33,.3)"}
                      p={"0px 5px"}
                      fontSize={12}
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

                  <Text>{item.comboPrice}</Text>
                </Flex>
                <Box
                  height={"30px"}
                  w={"13%"}
                  bg={"#00B14F"}
                  borderRadius={100}
                >
                  <Image
                    w={30}
                    src="https://food.grab.com/static/images/quick-add/plus-white.svg"
                  />
                </Box>
              </HStack>
            </VStack>
          </Flex>
        );
      })}
    </>
  );
};

export default ComboFood;
