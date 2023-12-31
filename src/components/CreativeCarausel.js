import { Box } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import CarauselItem from "./CarauselItem";
import CreativeCarauselItem from "./CreativeCarauselItem";
import { useSelector } from "react-redux";

export default function CreativeCarausel(props) {
  const catalogs = useSelector((state) => state.catalogs);
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
  // console.log(catalogs);

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
        <CreativeCarauselItem img="/catalogs/category1.jpg" />
        <CreativeCarauselItem img="/catalogs/category2.jpg" />
        <CreativeCarauselItem img="/catalogs/category3.jpg" />
        <CreativeCarauselItem img="/catalogs/category4.jpg" />
        <CreativeCarauselItem img="/catalogs/category5.jpg" />
        <CreativeCarauselItem img="/catalogs/category6.jpg" />
        <CreativeCarauselItem img="/catalogs/category7.jpg" />
        <CreativeCarauselItem img="/catalogs/category8.jpg" />
        <CreativeCarauselItem img="/catalogs/category9.jpg" />
        <CreativeCarauselItem img="/catalogs/category10.jpg" />
      </Slider>
    </Box>
  );
}
