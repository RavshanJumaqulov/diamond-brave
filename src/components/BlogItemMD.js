import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function BlogItemMD(props) {
  const [imgWidth, setImgWidth] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    setImgWidth(imgRef.current.clientWidth);
  }, []);
  return (
    <Stack
      direction="column"
      order={props.order}
      sx={{
        width: {
          xs: "calc(50% - 16px) !important",
          md: "calc(50% - 16px) !important",
        },
        margin: "8px !important",
        gap: 2,
      }}
    >
      <Box
        component="img"
        ref={imgRef}
        src="https://zone-ui.vercel.app/assets/images/career/career_2.jpg"
        sx={{
          borderRadius: 4,
          maxHeight:
            props.order % 2 == 0 ? `${(imgWidth * 9) / 16}px` : `${imgWidth}px`,
          minHeight:
            props.order % 2 == 0 ? `${(imgWidth * 9) / 16}px` : `${imgWidth}px`,
          objectFit: "cover",
          //   minWidth: "100%",
        }}
      ></Box>
      <Stack
        direction={"row"}
        sx={{
          opacity: 0.72,
          alignItems: "center",
          fontSize: 12,
          fontFamily: "Nunito, sans-serif",
          fontWeight: "700",
          cursor: 'default',
        }}
      >
        25 Avg 2023
        <Box
          sx={{
            mx: 2,
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "currentColor",
            cursor: 'default',
          }}
        ></Box>
        21 user read
      </Stack>
      <Typography
        sx={{
          fontSize: 18,
          fontFamily: "Barlow, sans-serif",
          fontWeight: "600",
          width: "auto",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          cursor: 'default',
        }}
      >
        The Ultimate Guide to Productivity Hacks adafdsefwadsxz Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque consectetur quidem iusto reiciendis tempora earum veniam a. Odio consequatur nulla quas cumque, alias, magnam ratione excepturi, mo
      </Typography>
    </Stack>
  );
}
