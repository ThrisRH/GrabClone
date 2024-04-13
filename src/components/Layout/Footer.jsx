import React from "react";
import { Box, Flex, Text, Image, VStack, HStack } from "@chakra-ui/react";
import "../GlobalStyle/GlobalStyle.scss";

const Footer = () => {
  return (
    <>
      <Flex className="FooterContainer">
        <Flex className="FooterContent">
          <VStack w={"100%"} alignItems={"flex-start"}>
            <Image
              width={200}
              src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
            />
            <Box
              mt={24}
              mb={16}
              w={"100%"}
              h={1}
              bg={"hsla(0, 0%, 100%, .3)"}
            />
            <HStack fontSize={18} fontWeight={500} color={"white"}>
              <Flex
                width={300}
                gap={20}
                justifyContent={"flex-start"}
                flexDirection={"column"}
              >
                <Text> Về GrabFood </Text>
                <Text> Về Grab </Text>
                <Text> Blog </Text>
              </Flex>
              <Flex
                width={300}
                gap={20}
                justifyContent={"flex-start"}
                flexDirection={"column"}
              >
                <Text> Mở quán trên GrabFood </Text>
                <Text> Trở thành tài xế Grab </Text>
              </Flex>
              <Flex
                width={300}
                gap={20}
                justifyContent={"flex-start"}
                flexDirection={"column"}
              >
                <Text> Trung tâm hỗ trợ </Text>
                <Text> Câu hỏi thường gặp </Text>
              </Flex>
            </HStack>
            <Box
              mt={24}
              mb={16}
              w={"100%"}
              h={1}
              bg={"hsla(0, 0%, 100%, .3)"}
            />
            <Flex justifyContent={"space-between"} width={"100%"}>
              <Box>
                <Flex gap={20}>
                  <Image src="https://food.grab.com/static/images/logo-appstore.svg" />
                  <Image src="https://food.grab.com/static/images/logo-playstore.svg" />
                </Flex>
              </Box>
              <Flex>
                <Flex
                  gap={20}
                  fontSize={12}
                  color={"white"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text>© 2024 Grab</Text>
                  <Text>
                    Câu hỏi thương gặp <span>&#x2022;</span> Chính sách bảo mật
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
