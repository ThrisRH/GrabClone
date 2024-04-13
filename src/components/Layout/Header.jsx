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
      <Box height={81} position={"relative"}>
        <Flex
          className={
            HeaderContainer ? "HeaderContainer active" : "HeaderContainer"
          }
        >
          <Flex
            boxSizing={"border-box"}
            width={"1220px"}
            p={"12px 0px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* Left Logo */}
            <Box>
              <Link to="/">
                <Image
                  src={srcImage}
                  alt="WebLogo"
                  width={150}
                  objectFit={"cover"}
                  cursor={"pointer"}
                />
              </Link>
            </Box>
            <Flex gap={10}>
              <Flex className="navItem">
                <Image
                  src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg"
                  width={16}
                  height={16}
                />
              </Flex>
              <Flex className="navItem">
                <Text fontSize={12} color={"#676767"}>
                  Đăng nhập/Đăng ký
                </Text>
              </Flex>
              <Flex className="navItem" gap={5}>
                <Text color={"#676767"}>VI </Text>
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
