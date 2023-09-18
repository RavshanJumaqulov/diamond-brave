import { Box, Button, Fab } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick/lib/slider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CarauselItem from "./CarauselItem";

export default function Carausel() {
  const arrowRef = useRef(null);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: {md: '60vh'},
        maxHeight: { md: "70vh" },
        position: "relative",
        borderRadius: {xs: 3, md: 6},
        overflow: 'hidden',
        mt: 12,
        boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        "& img": {
          height: { md: "60vh" },
        },
        "& .slick-slider": {
          "& .slick-prev": {
            left: "30px !important",
            zIndex: 1,
            width: "40px",
            height: "40px",
            borderRadius: 3,
            background: "#fff",
            boxShadow: "0 0 3px #0000003f",
          },
          "& .slick-next": {
            right: "30px !important",
            zIndex: 1,
            width: "40px",
            height: "40px",
            borderRadius: 3,
            background: "#fff",
            boxShadow: "0 0 3px #0000003f",
          },
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 2,
          px: 2,
        }}
      >
        <Fab
          onClick={() => arrowRef.current.slickPrev()}
          sx={{
            width: { xs: 30, md: "40px" },
            height: { xs: 30, md: "40px" },
            borderRadius: 3,
            background: "#e0e0e03f !important",
            boxShadow:
              "0px 3px 5px -1px rgba(0,0,0,0.1), 0px 6px 5px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12) !important",
          }}
        >
          <ArrowForwardIosIcon
            sx={{ transform: "rotate(180deg)", fontSize: { xs: 14, md: 18 } }}
          />
        </Fab>
        <Fab
          onClick={() => arrowRef.current.slickNext()}
          sx={{
            width: { xs: 30, md: "40px" },
            height: { xs: 30, md: "40px" },
            borderRadius: 3,
            background: "#e0e0e03f !important",
            boxShadow:
              "0px 3px 5px -1px rgba(0,0,0,0.1), 0px 6px 5px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12) !important",
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
        </Fab>
      </Box>
      <Slider ref={arrowRef} {...settings} style={{ width: "100%", height: '100%' }}>
        <CarauselItem
          index={1}
          title="Immunitet tizimini qo'llab-quvvatlash va mustahkamlash."
          img="/slide1.jpg"
        />
        <CarauselItem
          index={2}
          title="Immunitet tizimini qo'llab-quvvatlash va mustahkamlash."
          img="/slide2.jpg"
        />
      </Slider>
    </Box>
  );
}
