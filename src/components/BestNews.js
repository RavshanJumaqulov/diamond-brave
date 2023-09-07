import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BestNewsContainer from "./BestNewsContainer";

export default function BestNews() {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        direction="column"
        sx={{
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            alignItems: {
              xs: "center",
              md: "center",
            },
            justifyContent: { xs: "space-between", md: "space-between" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              color: "#011a41",
              mb: 1,
            }}
          >
            Ko'p o'qilgan yangiliklar
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            textAlign: { xs: "center", md: "left" },
          }}
          color="text.secondary"
        >
          DIAMOND BRAVE WORLD PHARM kompaniyasining arxiviga muhrlangan lahzalari.
        </Typography>
      </Stack>
      <BestNewsContainer />
    </Box>
  );
}
