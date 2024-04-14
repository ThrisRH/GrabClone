import React from "react";
import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const QuanAn = ({
  ImageLink,
  TenQuanAn,
  MonAnTieuBieu,
  Rate,
  Time,
  Distance,
  Promote,
}) => {
  const history = useNavigate();

  const onClickRestaurant = () => {
    history(`/restaurant/${encodeURIComponent(TenQuanAn)}`);
  };
  return (
    <>
      <Box className="ItemBox" cursor={"pointer"} onClick={onClickRestaurant}>
        <VStack alignItems={"flex-start"}>
          {/* Restaurant Image */}
          <Flex position={"relative"}>
            <Image src={ImageLink} w={"100%"} borderRadius={6} />
            {Promote != null ? (
              <Text
                top={"10%"}
                bgColor={"#00b14f"}
                zIndex={2}
                position={"absolute"}
                padding={"3px 8px"}
                fontWeight={600}
                color={"white"}
                fontSize={14}
              >
                Promote
              </Text>
            ) : null}
          </Flex>

          {/* Restaurant Info */}
          <Box className="RestaurantInfo" w={"100%"} alignItems={"flex-end"}>
            <Text fontWeight={"bold"} fontSize={16} mt={"2%"} height={"50px"}>
              {TenQuanAn}
            </Text>
            <Text fontSize={12} fontWeight={400} m={0}>
              {MonAnTieuBieu}
            </Text>

            <Flex m={0} mt={5} fontSize={12} color={"gray"} w={"100%"}>
              {Rate != null ? (
                <Flex alignItems={"center"} w={"30%"}>
                  <Box
                    display={"flex"}
                    gap={2}
                    m={0}
                    alignItems={"center"}
                    w={"40%"}
                  >
                    <Image
                      w={"auto"}
                      m={0}
                      src="https://food.grab.com/static/images/icons/icon-star.svg"
                    />
                  </Box>

                  <Text w={"70%"}>{Rate}</Text>
                </Flex>
              ) : null}
              <Box
                m={0}
                display={"flex"}
                gap={5}
                alignItems={"center"}
                w={"70%"}
              >
                {/* Timing check */}
                {Time != null ? (
                  <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={2}
                    w={"auto"}
                  >
                    <Image
                      w={"auto"}
                      m={0}
                      src="https://food.grab.com/static/images/icons/icon-clock.svg"
                    />

                    <Text m={0}>{Time} phút</Text>
                    {(Time && Distance) != null ? <Text m={0}>•</Text> : null}
                  </Flex>
                ) : null}

                {/* Distance check */}
                {Distance != null ? <Text m={0}>{Distance} km</Text> : null}
              </Box>
            </Flex>
            {/* Promote Check */}
            <Flex w={"100%"} justifyContent={"flex-end"}>
              {Promote != null ? (
                <Flex m={0} justifyContent={"center"} mt={15} gap={2} w={"70%"}>
                  <Image
                    src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"
                    w={"auto"}
                  />
                  <Text
                    m={0}
                    fontSize={14}
                    color={"gray"}
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {Promote}
                  </Text>
                </Flex>
              ) : null}
            </Flex>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default QuanAn;
