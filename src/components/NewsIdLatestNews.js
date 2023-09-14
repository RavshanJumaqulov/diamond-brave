import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function NewsIdLatestNews() {
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
        src="https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg"
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
            background: "linear-gradient(to right, #3bb77e 0%, #3bb77e 100%)",
            backgroundSize: "100px 6%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 100%",
            WebkitTransitionDuration: "0.5s",
            transitionDuration: "0.5s",
            cursor: "pointer",
            "&:hover": {
              backgroundSize: "100% 6%",
            },
          }}
        >
          The pros and const of busines agency lorem
        </Typography>
        <Box
          sx={{
            display: {
              xs: width < 450 ? "none" : "flex",
              sm: width > 750 ? "flex" : "none",
              md: "none",
            },
            flexDirection: "row",
            alignItems: "center",
            mt: { sm: 2, md: 1, lg: 2 },
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
            102 users read
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
            2 kun avval
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
