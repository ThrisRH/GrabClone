import React from "react";

export const PrevButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="swiper-button-prev"
    style={{
      background: "none",
      border: "none",
      left: "-55px",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#676767",
    }}
  ></button>
);

export const NextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="swiper-button-next"
    style={{
      background: "none",
      border: "none",
      right: "-55px",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#676767",
    }}
  ></button>
);

export const NavigationContainer = ({ children }) => (
  <div
    className="swiper-button-container"
    style={{ position: "relative", display: "contents" }}
  >
    {children}
  </div>
);
