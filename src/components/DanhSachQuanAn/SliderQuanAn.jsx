import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationContainer, PrevButton, NextButton } from "./Button";
import { Box } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";
import QuanAn from "./QuanAn";
import data from "./QuanAnData";

const SliderQuanAn = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnding, setIsEnding] = useState(false);

  const onSlideChange = (swiper) => {
    // Hiển thị prev button nếu vị trí != 0
    setIsBeginning(swiper.realIndex === 0 ? true : false);

    // Ẩn next button nếu vị trị = tổng độ dài - 4
    setIsEnding(swiper.realIndex === swiper.slides.length - 4 ? true : false);
    // console.log(swiper.realIndex, " = ", swiper.slides.length - 4);
  };

  // Sử dụng useRef để lưu trữ tham chiếu tới Swiper instance
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    // Nếu swiperRef tồn tại và đã được khởi tạo
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Chuyển đến slide trước đó
    }
  };

  const handleNextClick = () => {
    // Nếu swiperRef tồn tại và đã được khởi tạo
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Chuyển đến slide tiếp theo
    }
  };
  return (
    <>
      <Box style={{ position: "relative" }}>
        <Swiper slidesPerView={4} ref={swiperRef} onSlideChange={onSlideChange}>
          {data.QuanAnData.map((item, index) => {
            return (
              <SwiperSlide
                style={{
                  maxWidth: "280px",
                  minWidth: "280px",
                  padding: "0px 12px 24px 12px",
                }}
              >
                <QuanAn
                  ImageLink={item.ImageLink}
                  TenQuanAn={item.TenQuanAn}
                  MonAnTieuBieu={item.MonAnTieuBieu}
                  Rate={item.Rate}
                  Time={item.Time}
                  Distance={item.Distance}
                  Promote={item.Promote}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavigationContainer>
          {!isBeginning ? <PrevButton onClick={handlePrevClick} /> : null}
          {!isEnding ? <NextButton onClick={handleNextClick} /> : null}
        </NavigationContainer>
      </Box>
    </>
  );
};

export default SliderQuanAn;
