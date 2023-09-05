import { Box } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import CarauselItem from "./CarauselItem";
import CreativeCarauselItem from "./CreativeCarauselItem";

export default function CreativeCarausel(props) {
  const arrowRef = useRef(null);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };
  return (
    <Box
      sx={{
        minWidth: "100%",
        height: "100% !important",
        display: "block",
        "& .slick-slider": {
          width: "100%",
          height: "100% !important",
          "& .slick-list": {
            height: "100% !important",
            "& div": {
              height: "100% !important",
            },
          },
        },
      }}
    >
      <Slider ref={arrowRef} {...settings}>
        <CreativeCarauselItem img='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-11.png' />
        <CreativeCarauselItem img='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png' />
        <CreativeCarauselItem img='https://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/blog/blog-3.png' />
      </Slider>
    </Box>
  );
}
