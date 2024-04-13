import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import data from "./QuanAnData";
import QuanAn from "./QuanAn";

const NearestRestaurantsToYou = () => {
  return (
    <div className="NearestRestaurants">
      <Box>
        <Flex p={"0px 12px"}>
          <Text fontWeight={"bold"} fontSize={30} m={0} mb={20}>
            Quán ăn tại
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={30}
            m={0}
            p={"0px 12px"}
            color={"#00b14f"}
          >
            61 Nguyễn Bình, X.Phú Xuân, H.Nhà Bè, Hồ Chí Minh
          </Text>
        </Flex>
        <Box p={"0px 12px"}>
          <SimpleGrid minChildWidth={280} spacing={20}>
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
