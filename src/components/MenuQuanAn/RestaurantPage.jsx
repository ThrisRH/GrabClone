import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  VStack,
  Image,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import data from "../DanhSachQuanAn/QuanAnData";
import RestaurantBody from "./RestaurantBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const RestaurantPage = () => {
  // Chakra UI input
  const [inputValue, setInputValue] = useState("");

  // Handle dishes onClick
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  // Quantity
  const [totalPrice, setTotalPrice] = useState("");
  const [quantity, setQuantity] = useState();
  const handleAddQuantity = () => {
    setTotalPrice(totalPrice + selectedItem.comboPrice);
    setQuantity(quantity + 1);
  };
  const handleDelQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (showModal) {
        e.preventDefault();
      }
    };

    if (showModal) {
      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchmove", handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [showModal]);

  const handleItemClick = (item) => {
    setTotalPrice(item.comboPrice);
    setQuantity(1);
    setSelectedItem(item);
    setShowModal(true);
    document.body.classList.add("no-scroll");
  };

  // console.log("selected: ", selectedItem);

  const handleCloseClick = () => {
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };

  const parasm = useParams();

  // Get tomorrow days
  const tomorrow = () => {
    const tomorrowOfTomorrow = new Date();
    tomorrowOfTomorrow.setDate(tomorrowOfTomorrow.getDate() + 1);
    const month = tomorrowOfTomorrow.getMonth();
    const day = tomorrowOfTomorrow.getDate();
    const dayOfWeek = tomorrowOfTomorrow.getDay();
    const daysOfWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDayName = daysOfWeekNames[dayOfWeek];
    const MonthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentMonthName = MonthNames[month];
    return `${currentDayName}, ${day} ${currentMonthName}`;
  };

  // Get tomorrow days
  const tomorrowOfTomorrowDay = () => {
    const tomorrowOfTomorrow = new Date();
    tomorrowOfTomorrow.setDate(tomorrowOfTomorrow.getDate() + 2);
    const month = tomorrowOfTomorrow.getMonth();
    const day = tomorrowOfTomorrow.getDate();
    const dayOfWeek = tomorrowOfTomorrow.getDay();
    const daysOfWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDayName = daysOfWeekNames[dayOfWeek];
    const MonthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentMonthName = MonthNames[month];
    return `${currentDayName}, ${day} ${currentMonthName}`;
  };
  console.log(parasm.name);
  const restaurant = data.QuanAnData.find(
    (restaurant) => restaurant.TenQuanAn === parasm.name
  );
  return (
    <Flex
      minHeight={"100vh"}
      bg={"#F7F7F7"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Flex
        w={"100%"}
        bg={"white"}
        height={350}
        justifyContent={"center"}
        boxShadow={"0 4px 6px 0 rgba(28,28,28,.06)"}
      >
        <Container maxW={"container.md"} padding={20}>
          <Flex
            className="RestaurantHeader"
            width={1220}
            flexDir={"column"}
            alignItems={"flex-start"}
          >
            {/* Scrumb Area */}
            <Flex gap={5} alignItems={"center"} fontSize={16} p={"0"}>
              <Text color={"#00a5cf"}>Trang chủ</Text>
              &#62;
              <Text color={"#00a5cf"}>Nhà hàng</Text>
              &#62;
              <Text>{restaurant.TenQuanAn}</Text>
            </Flex>

            {/* Info area */}
            <VStack alignItems={"flex-start"}>
              <Box className="RestaurantInfo" maxW={1220} minW={1220}>
                <Text fontWeight={"bold"} fontSize={35} mt={5}>
                  {restaurant.TenQuanAn}
                </Text>
                <Text fontSize={12} fontWeight={400} mt={10}>
                  {restaurant.MonAnTieuBieu}
                </Text>

                <Flex gap={30} m={0} mt={10} fontSize={14} color={"gray"}>
                  {restaurant.Rate != null ? (
                    <Flex alignItems={"center"}>
                      <Box display={"flex"} gap={5} m={0} alignItems={"center"}>
                        <Image
                          w={14}
                          m={0}
                          src="https://food.grab.com/static/images/icons/icon-star.svg"
                        />
                        <Text m={0}>{restaurant.Rate}</Text>
                      </Box>
                    </Flex>
                  ) : null}
                  <Box m={0} display={"flex"} gap={5} alignItems={"center"}>
                    {/* Timing check */}
                    {restaurant.Time != null ? (
                      <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={5}
                      >
                        <Image
                          w={14}
                          m={0}
                          src="https://food.grab.com/static/images/icons/icon-clock.svg"
                        />

                        <Text m={0}>{restaurant.Time} phút</Text>
                        {(restaurant.Time && restaurant.Distance) != null ? (
                          <Text m={0}>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
                        ) : null}
                      </Flex>
                    ) : null}

                    {/* Distance check */}
                    {restaurant.Distance != null ? (
                      <Text m={0}>{restaurant.Distance} km</Text>
                    ) : null}
                  </Box>
                </Flex>
                {/* Promote Check */}
                {restaurant.Promote != null ? (
                  <Flex m={0} mt={15} gap={10}>
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
                      {restaurant.Promote}
                    </Text>
                  </Flex>
                ) : null}
              </Box>

              {/* Chọn thời gian giao */}
              <Flex w={"100%"}>
                <select className="selectBox DeliveryDay">
                  <option value="today">Ngày giao hàng: Hôm nay</option>
                  <option value="tomorrow">{tomorrow()}</option>
                  <option value="tomorrowOfTomorrow">
                    {tomorrowOfTomorrowDay()}
                  </option>
                </select>
                <select className="selectBox DeliveryTime">
                  <option value="today">Thời gian giao: Ngay Bây giờ</option>
                  <option value={1}>06:00 - 06:30</option>
                  <option value={1}>06:30 - 07:00</option>
                  <option value={1}>07:00 - 07:30</option>
                  <option value={1}>07:30 - 08:00</option>
                  <option value={1}>08:00 - 08:30</option>
                  <option value={1}>08:30 - 09:00</option>
                  <option value={1}>09:00 - 09:30</option>
                  <option value={1}>09:30 - 10:00</option>
                </select>
              </Flex>
            </VStack>
          </Flex>
        </Container>
      </Flex>
      <RestaurantBody item={handleItemClick} />
      {showModal ? (
        <Box
          className="overlay"
          position={"fixed"}
          zIndex={1000}
          right={0}
          top={0}
          height={"100%"}
          w={"100%"}
          bg={"rgba(0, 0, 0, 0.5)"}
        >
          <Flex
            bg={"white"}
            height={"100%"}
            w={"25%"}
            position={"absolute"}
            right={0}
          >
            <VStack w={"100%"} justifyContent={"space-between"}>
              <Box>
                <Flex
                  borderBottom={"solid 1px #f0efef"}
                  width={"100%"}
                  height={80}
                  boxSizing="border-box"
                  alignItems={"center"}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    fontSize={35}
                    cursor={"pointer"}
                    style={{ padding: "0px 20px", color: "#676767" }}
                    onClick={handleCloseClick}
                  />
                </Flex>
                <HStack
                  w={"100%"}
                  padding={24}
                  boxSizing="border-box"
                  gap={20}
                  alignItems={"flex-start"}
                  height={"auto"}
                >
                  <Box w={"20%"}>
                    <Image w={"100%"} src={selectedItem.comboImage} />
                  </Box>
                  <Box w={"60%"}>
                    <Text fontSize={25} fontWeight={"bold"}>
                      {selectedItem.comboName}
                    </Text>
                    <Text mt={10} color={"#676767"}>
                      {selectedItem.comboDescribe}
                    </Text>
                  </Box>
                  <Box w={"20%"}>
                    <Text fontSize={25} fontWeight={"bold"}>
                      {selectedItem.comboPrice}
                    </Text>
                  </Box>
                </HStack>
                <Box height={8} w={"100%"} bg={"#f0efef"}></Box>
                <VStack></VStack>
                <Box></Box>
                <VStack
                  p={" 0px 30px"}
                  alignItems={"flex-start"}
                  w={"100%"}
                  boxSizing="border-box"
                >
                  <Flex alignItems={"center"} gap={15} mt={20}>
                    <Text fontWeight={"bold"} fontSize={24}>
                      Special instructions
                    </Text>
                    <Text fontSize={16} color={"#676767"}>
                      Optional
                    </Text>
                  </Flex>
                  <Input
                    className="OptionInput"
                    width={"100%"}
                    fontSize={18}
                    borderRadius={8}
                    border={"1px solid #c5c5c5"}
                    p={15}
                    boxSizing="border-box"
                    value={inputValue}
                    placeholder="E.g. No onions please"
                    onChange={(e) => setInputValue(e.target.value)}
                  ></Input>
                </VStack>
              </Box>
              <Flex
                p={"0px 30px"}
                boxSizing={"border-box"}
                height={100}
                borderTop={"solid 1px #f0efef"}
                shadow={"0 -2px 6px 0 rgba(28,28,28,.06)"}
                w={"100%"}
                bottom={0}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Flex justifyContent={"center"} alignItems={"center"} gap={20}>
                  <Image
                    src="https://food.grab.com/static/images/icons/icon-minus-bordered.svg"
                    onClick={handleDelQuantity}
                    alt="Del Quantity"
                    cursor={"pointer"}
                  />
                  <Text fontSize={20} fontWeight={"bold"}>
                    {quantity}
                  </Text>
                  <Image
                    src="https://food.grab.com/static/images/icons/icon-plus-bordered.svg"
                    onClick={handleAddQuantity}
                    alt="Add Quantity"
                    cursor={"pointer"}
                  />
                </Flex>
                {quantity !== 0 ? (
                  <Button
                    className="addToBasketBtn"
                    cursor={"pointer"}
                    onClick={handleCloseClick}
                  >
                    Add to Basket -{" "}
                    {totalPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Button>
                ) : (
                  <Button
                    className="cancel"
                    onClick={handleCloseClick}
                    cursor={"pointer"}
                  >
                    Cancel
                  </Button>
                )}
              </Flex>
            </VStack>
          </Flex>
        </Box>
      ) : null}
    </Flex>
  );
};

export default RestaurantPage;
