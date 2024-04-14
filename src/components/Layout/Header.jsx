import { React, useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";
import "./Style-Header.css";
import Footer from "./Footer";

export default function Header({ children }) {
  const [HeaderContainer, setHeaderContainer] = useState(false);
  const [srcImage, setSrcImage] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setSrcImage(
      pathname === "/" && !HeaderContainer
        ? "https://food.grab.com/static/images/logo-grabfood-white2.svg"
        : "https://food.grab.com/static/images/logo-grabfood2.svg"
    );
  }, [pathname, HeaderContainer]);
  const changeBackground = () => {
    setHeaderContainer(window.scrollY >= 1 ? true : false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Box height={"100px"} position={"relative"}>
        <Flex
          className={
            HeaderContainer ? "HeaderContainer active" : "HeaderContainer"
          }
        >
          <Flex
            boxSizing={"border-box"}
            width={{ sm: "100%", md: "60%" }}
            p={{ sm: "12px 15px", md: "12px 0px" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* Left Logo */}
            <Box w={"60%"}>
              <Link to="/">
                <Image
                  src={srcImage}
                  alt="WebLogo"
                  width={"120px"}
                  objectFit={"cover"}
                  cursor={"pointer"}
                />
              </Link>
            </Box>
            {/* Right Items */}
            <Flex gap={2} w={"40%"} justifyContent={"flex-end"}>
              <Flex
                className="navItem"
                w={"20%"}
                display={{ base: "none", md: "flex" }}
              >
                <Image src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg" />
              </Flex>
              <Flex className="navItem" w={{ base: "70%", md: "40%" }}>
                <Text fontSize={"60%"} color={"#676767"}>
                  Đăng nhập/Đăng ký
                </Text>
              </Flex>
              <Flex className="navItem" gap={2} w={{ base: " 30%", md: "20%" }}>
                <Text color={"#676767"} fontSize={12}>
                  VI
                </Text>
                <span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ color: "#676767" }}
                  />
                </span>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box mb={30}>{children}</Box>
      <Footer />
    </>
  );
}
