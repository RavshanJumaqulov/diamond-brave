import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewsIdLatestNews(props) {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const imgRef = useRef(null);
  return (
    <Box
      onClick={() => navigate(`/news/page_1/${props.id}`)}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "&:hover": {
          "& .MuiTypography-root": {
            backgroundSize: "100% 3%",
          },
        },
      }}
    >
      <Box
        component={"img"}
        ref={imgRef}
        src={props.img}
        sx={{
          width: {
            xs: width > 450 ? 150 : 120,
            sm: width < 750 ? 120 : 150,
            md: 100,
            lg: 150,
          },
          minWidth: {
            xs: width > 450 ? 150 : 120,
            sm: width < 750 ? 120 : 150,
            md: 100,
            lg: 150,
          },
          height: {
            xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
            sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
            md: (100 * 9) / 16,
            lg: (150 * 9) / 16,
          },
          minHeight: {
            xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
            sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
            md: (100 * 9) / 16,
            lg: (150 * 9) / 16,
          },
          borderRadius: 3,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
        <Typography
          sx={{
            mt: { xs: width < 450 ? 0 : 1, sm: width > 750 ? 1 : 0, md: 0 },
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            width: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            cursor: 'default',
          }}
        >
          {props.title}
        </Typography>
        <Box
          sx={{
            display: {
              xs: width < 450 ? "none" : "flex",
              sm: width > 750 ? "flex" : "none",
              md: "none",
              lg: "flex",
            },
            flexDirection: "row",
            alignItems: "center",
            mt: { sm: 2, md: 1, lg: 1 },
          }}
        >
          <Typography
            sx={{
              display: { xs: width < 450 ? "none" : "inline", lg: "inline" },
              fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
              fontWeight: "400",
              color: "text.secondary",
              fontFamily: "Nunito, sans-serif",
              cursor: "default",
            }}
          >
            {props.date}
          </Typography>
          <Box
            sx={{
              display: { xs: width < 450 ? "none" : "inline", lg: "inline" },
              borderRadius: "50%",
              width: 4,
              height: 4,
              background: "#00000099",
              mx: 1,
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
              fontWeight: "400",
              color: "text.secondary",
              fontFamily: "Nunito, sans-serif",
              cursor: "default",
            }}
          >
            {props.views}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
