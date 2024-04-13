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
        <VStack alignItems={"flex-start"} minW={280} maxW={280} maxH={300}>
          {/* Restaurant Image */}
          <Flex position={"relative"}>
            <Image src={ImageLink} w={280} borderRadius={6} />
            {Promote != null ? (
              <Text
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
          <Box className="RestaurantInfo" maxW={280} minW={280}>
            <Text fontWeight={"bold"} fontSize={16} mt={5}>
              {TenQuanAn}
            </Text>
            <Text fontSize={12} fontWeight={400} m={0}>
              {MonAnTieuBieu}
            </Text>

            <Flex gap={10} m={0} mt={5} fontSize={14} color={"gray"}>
              {Rate != null ? (
                <Flex alignItems={"center"}>
                  <Box display={"flex"} gap={5} m={0} alignItems={"center"}>
                    <Image
                      w={14}
                      m={0}
                      src="https://food.grab.com/static/images/icons/icon-star.svg"
                    />
                    <Text m={0}>{Rate}</Text>
                  </Box>
                </Flex>
              ) : null}
              <Box m={0} display={"flex"} gap={5} alignItems={"center"}>
                {/* Timing check */}
                {Time != null ? (
                  <Flex alignItems={"center"} justifyContent={"center"} gap={5}>
                    <Image
                      w={14}
                      m={0}
                      src="https://food.grab.com/static/images/icons/icon-clock.svg"
                    />

                    <Text m={0}>{Time} phút</Text>
                    {(Time && Distance) != null ? (
                      <Text m={0}>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
                    ) : null}
                  </Flex>
                ) : null}

                {/* Distance check */}
                {Distance != null ? <Text m={0}>{Distance} km</Text> : null}
              </Box>
            </Flex>
            {/* Promote Check */}
            {Promote != null ? (
              <Flex m={0} justifyContent={"center"} mt={15} gap={10}>
                <Image
                  src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"
                  w={20}
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
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default QuanAn;
