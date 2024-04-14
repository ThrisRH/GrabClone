import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import data from "./QuanAnData";
import QuanAn from "./QuanAn";

const NearestRestaurantsToYou = () => {
  return (
    <div className="NearestRestaurants">
      <Box>
        <Flex mt={10} w={"100%"} mb={5}>
          <Text
            display={{ base: "none", md: "block" }}
            fontWeight={"bold"}
            fontSize={{ base: 12, md: 30 }}
            m={0}
            w={"auto"}
          >
            Quán ăn tại
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: 20, md: 30 }}
            w={"80%"}
            m={0}
            p={{ base: 0, md: "0px 12px" }}
            color={"#00b14f"}
            whiteSpace={"nowrap"}
            overflow="hidden"
            textOverflow="ellipsis"
          >
            61 Nguyễn Bình, X.Phú Xuân, H.Nhà Bè, Hồ Chí Minh
          </Text>
        </Flex>
        <Box>
          <SimpleGrid
            columns={{ base: 1, md: 3, lg: 4 }}
            spacingX="1%"
            spacingY="50px"
          >
            {data.QuanAnData.map((item, index) => {
              return (
                <Box>
                  <QuanAn
                    ImageLink={item.ImageLink}
                    TenQuanAn={item.TenQuanAn}
                    MonAnTieuBieu={item.MonAnTieuBieu}
                    Rate={item.Rate}
                    Time={item.Time}
                    Distance={item.Distance}
                    Promote={item.Promote}
                  />
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default NearestRestaurantsToYou;
