import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import React from "react";
import TopNewsItem from "./TopNewsItem";
import { Stack, Typography } from "@mui/material";

export default function AllNews() {
  return (
    <Box sx={{ width: "100%" }}>
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
            Barcha yangiliklar
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
          DIAMOND BRAVE WORLD PHARM kompaniyasida sodir bo'lib kelayotgan
          so'nggi yangiliklar
        </Typography>
      </Stack>
      <Grid2 container>
        <Grid2 xs={12} md={6} sx={{ px: 1, mb: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TopNewsItem />
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} sx={{ px: 1, mb: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TopNewsItem />
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} sx={{ px: 1, mb: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TopNewsItem />
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} sx={{ px: 1, mb: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TopNewsItem />
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} sx={{ px: 1, mb: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TopNewsItem />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
