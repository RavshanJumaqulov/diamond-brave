import { Box } from "@mui/material";
import React, { useContext } from "react";
import Slider from "react-slick";
import Context from "../Context";
import { Fade } from "react-awesome-reveal";

export default function Sponsors() {
  const { width } = useContext(Context);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 10,
    slidesToShow: width < 600 ? 1 : width < 900 ? 3 : 4,
    slidesToScroll: 1,
  };
  return (
    <Fade >
      <Box
        sx={{
          width: "100%",
          mt: 5,
          borderRadius: 0,
          px: 2,
          py: 1,
        }}
      >
        <Slider {...settings} style={{ width: "100%" }}>
          <Box sx={{ height: 100 }}>
            <img
              src="https://orchideepharm.uz/img/corousel/ssvtext.png"
              alt=""
            />
          </Box>
          <Box sx={{ height: 100 }}>
            <img
              src="https://orchideepharm.uz/img/corousel/ssvtext250.png"
              alt=""
            />
          </Box>
          <Box sx={{ height: 100 }}>
            <img
              src="https://orchideepharm.uz/img/corousel/emblem250.png"
              alt=""
            />
          </Box>
          <Box sx={{ height: 100 }}>
            <img src="https://orchideepharm.uz/img/corousel/per.png" alt="" />
          </Box>
          <Box sx={{ height: 100 }}>
            <img
              src="https://orchideepharm.uz/img/corousel/who250.png"
              alt=""
            />
          </Box>
        </Slider>
      </Box>
    </Fade>
  );
}
