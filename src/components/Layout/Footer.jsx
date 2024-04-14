import React from "react";
import { Box, Flex, Text, Image, VStack, HStack } from "@chakra-ui/react";
import "../GlobalStyle/GlobalStyle.scss";

const Footer = () => {
  return (
    <>
      <Flex className="FooterContainer" w={"100%"}>
        <Flex className="FooterContent">
          <VStack w={"100%"} alignItems={"flex-start"}>
            <Image
              width={{ base: "50%", md: "15%" }}
              src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
            />
            <Box
              w={"100%"}
              m={"5px 0px"}
              h={0.5}
              bg={"hsla(0, 0%, 100%, .3)"}
            />
            <HStack
              mt={5}
              flexDir={{ base: "column", md: "row" }}
              alignItems={{ base: "flex-start" }}
              fontSize={"80%"}
              fontWeight={500}
              color={"white"}
              w={"100%"}
              gap={5}
            >
              <Flex
                width={{ base: "100%", md: "25%" }}
                h={"auto"}
                gap={{ base: 5 }}
                justifyContent={"flex-start"}
                flexDirection={"column"}
              >
                <Text> Về GrabFood </Text>
                <Text> Về Grab </Text>
                <Text> Blog </Text>
              </Flex>
              <Flex
                width={{ base: "100%", md: "25%" }}
                h={"auto"}
                gap={5}
                justifyContent={"flex-start"}
                flexDirection={"column"}
              >
                <Text> Mở quán trên GrabFood </Text>
                <Text> Trở thành tài xế Grab </Text>
              </Flex>
              <Flex
                width={{ base: "100%", md: "25%" }}
                h={"auto"}
                gap={5}
                justifyContent={"flex-start"}
                flexDirection={"column"}
              >
                <Text> Trung tâm hỗ trợ </Text>
                <Text> Câu hỏi thường gặp </Text>
              </Flex>
            </HStack>
            <Box
              m={"10px 0px"}
              w={"100%"}
              h={0.5}
              bg={"hsla(0, 0%, 100%, .3)"}
            />
            <Flex
              justifyContent={"space-between"}
              width={"100%"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Box mb={"10px"}>
                <Flex gap={2} w={"50%"} flexDir={{ base: "column", md: "row" }}>
                  <Image
                    w={{ base: "100%", md: "50%" }}
                    src="https://food.grab.com/static/images/logo-appstore.svg"
                  />
                  <Image
                    w={{ base: "100%", md: "50%" }}
                    src="https://food.grab.com/static/images/logo-playstore.svg"
                  />
                </Flex>
              </Box>
              <Flex
                w={{ base: "100%", md: "50%" }}
                justifyContent={{ base: "flex-start", md: "flex-end" }}
              >
                <Flex
                  gap={2}
                  fontSize={{ base: 12, md: 8 }}
                  color={"white"}
                  justifyContent={"center"}
                  alignItems={{ base: "flex-start", md: "center" }}
                  flexDir={{ base: "column", md: "row" }}
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
