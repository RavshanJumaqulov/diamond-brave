import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function BlogFirstItem() {
  return (
    <Stack
      direction="column"
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        height: "100%",
        boxSizing: "border-box !important",
        mr: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          verticalAlign: "bottom",
          display: "inline-block",
          boxSizing: "border-box",
          opacity: 1,
          transition: "opacity 0.3s",
        }}
        component="img"
        src="https://zone-ui.vercel.app/assets/images/career/career_1.jpg"
      ></Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          top: 0,
          left: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 5,
          gap: 2,
          color: "rgba(255, 255, 255)",
          fontWeight: 400,
        }}
      >
        <Stack
          direction="row"
          sx={{
            opacity: 0.72,
            alignItems: "center",
            fontSize: 12,
            fontFamily: "Nunito, sans-serif",
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
            fontFamily: "Barlow, sans-serif",
            fontWeight: 700,
            fontSize: { xs: 24, sm: 26, md: 30, lg: 32 },
            cursor: 'default',
          }}
        >
          10 Essential Tips for Healthy Living
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 400,
            opacity: 0.48,
            fontFamily: "Public, sans-serif",
            width: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            cursor: 'default',
          }}
        >
          Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
          molestiae ut facere aut. Est quidem iusto praesentium excepturi harum
          nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus
          eaque debitis.
        </Typography>
      </Box>
    </Stack>
  );
}
