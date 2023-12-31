import { Box, Fab } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import Slider from "react-slick/lib/slider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BestNewsSliderItem from "./BestNewsSliderItem";
import Context from "../Context";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";

export default function BestNewsSlider() {
  const bestNews = useSelector(state => state.bestNews)
  const { width, height, lan } = useContext(Context);
  const [img, setImg] = useState("");
  const arrowRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow:
      width < 500
        ? 1
        : width < 600
        ? 2
        : width < 800
        ? 1
        : width < 900
        ? 2
        : width < 1200
        ? 3
        : 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: "100% !important",
        display: "block",
        "& .slick-slider": {
          position: "relative",
          height: "100% !important",
          "& .slick-list": {
            height: "100% !important",
            "& div": {
              // height: "100%",
            },
          },
          "& .slick-prev": {
            position: "absolute",
            left: "30px !important",
            zIndex: "inherit",
            width: "40px",
            height: "40px",
            borderRadius: 3,
            background: "#fff",
            boxShadow: "0 0 3px #0000003f",
          },
          "& .slick-next": {
            position: "absolute",
            right: "30px !important",
            zIndex: "inherit",
            width: "40px",
            height: "40px",
            borderRadius: 3,
            background: "#fff",
            boxShadow: "0 0 3px #0000003f",
          },
        },
      }}
    >
      {img.length > 0 ? (
        <Box
          onClick={() => setImg("")}
          sx={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            background: "rgba(0, 0, 0, 0.2)",
            top: 0,
            left: 0,
            zIndex: 1000000000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              zIndex: 1,
              top: 0,
              right: 0,
            }}
          >
            <Box
              onClick={() => setImg("")}
              sx={{
                width: 50,
                height: 30,
                background: "rgba(0, 0, 0, 0.4)",
                transition: "0.3s all !important",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  background: "red",
                  "& svg": {
                    transition: "0.3s all !important",
                    transform: "scale(1.05)",
                  },
                },
                "& svg": {
                  color: "#fff",
                },
              }}
            >
              <CloseIcon />
            </Box>
          </Box>
          <Box
            component={"img"}
            src={img}
            sx={{
              width: height > width ? "90%" : "auto",
              height: height < width ? "90%" : "auto",
              objectFit: "cover",
              borderRadius: 3
            }}
          />
        </Box>
      ) : (
        ""
      )}
      <Box
        sx={{
          width: "100%",
          height: "0px",
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 2,
          top: "calc(50% - 20px)",
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
            position: "relative",
            zIndex: 1,
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
            position: "relative",
            zIndex: 1,
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
        </Fab>
      </Box>
      <Slider ref={arrowRef} {...settings} style={{ width: "100%" }}>
        {bestNews.map((el, index) => {
          return (
            <BestNewsSliderItem
              width={width}
              setImg={setImg}
              key={index}
              id={el.id}
              img={el.img}
              title={el[`title_${lan}`]}
              date={moment(el.created_at).fromNow()}
              views={el.views}
            />
          );
        })}
      </Slider>
    </Box>
  );
}
