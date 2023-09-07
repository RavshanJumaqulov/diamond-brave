import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function TopNewsItem() {
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
            sm: width < 750 ? 200 : 250,
            md: 150,
            lg: 200,
          },
          minWidth: {
            xs: width > 450 ? 150 : 120,
            sm: width < 750 ? 200 : 250,
            md: 150,
            lg: 200,
          },
          height: {
            xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
            sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
            md: (150 * 9) / 16,
            lg: (200 * 9) / 16,
          },
          minHeight: {
            xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
            sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
            md: (150 * 9) / 16,
            lg: (200 * 9) / 16,
          },
          borderRadius: 3,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
        <Typography
          sx={{
            mt: 1,
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            width: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            background:
              "-webkit-gradient(linear, left top, right top, from(#3bb77e), to(#3bb77e))",
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
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            alignItems: "center",
            mt: { sm: 2, md: 1, lg: 2 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
              fontWeight: "400",
              color: "text.secondary",
              fontFamily: "Nunito, sans-serif",
              cursor: 'default'
            }}
          >
            102 users read
          </Typography>
          <Box
            sx={{
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
              cursor: 'default'
            }}
          >
            1022 users read
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
