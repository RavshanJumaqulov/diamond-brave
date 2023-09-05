import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ProductsSlider from "./ProductsSlider";
import CreativeCarausel from "./CreativeCarausel";

export default function ProductsContainer() {
  const [sort, setSort] = useState("latest");
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        my: 3,
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: { xs: "center" },
            transition: "all 0.3s linear",

            "& a": {
              height: "22px",
              lineHeight: "22px",
              textDecoration: "none",
              overflow: "hidden",
              my: { xs: 2, md: "auto" },
              mr: 2,
              "& .MuiTypography-root": {
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
              },
              "&:hover": {
                "& .MuiTypography-root": {
                  transition: "0.2s all !important",
                  transform: {
                    xs: "translateY(-27px)",
                    md: "translateY(-25px)",
                  },
                  textAlign: "center",
                  color: "#3BB77E",
                },
              },
            },
          }}
        >
          <NavLink onClick={() => setSort("latest")}>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 16 },
                fontWeight: 506,
                display: { xs: "block", md: "block" },
                color: sort == "latest" ? "#3bb77e" : "#011a41",
              }}
            >
              So'nggilari
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 16 },
                fontWeight: 506,
                display: { xs: "block", md: "inline-block" },
                color: sort == "latest" ? "#3bb77e" : "#011a41",
              }}
            >
              So'nggilari
            </Typography>
          </NavLink>
          <NavLink onClick={() => setSort("popular")}>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 16 },
                fontWeight: 506,
                display: { xs: "block", md: "block" },
                color: sort == "popular" ? "#3bb77e" : "#011a41",
              }}
            >
              Mashxurlari
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 16 },
                fontWeight: 506,
                display: { xs: "block", md: "inline-block" },
                color: sort == "popular" ? "#3bb77e" : "#011a41",
              }}
            >
              Mashxurlari
            </Typography>
          </NavLink>
        </Box>
        <Button
          variant="light"
          disableElevation
          endIcon={<KeyboardArrowRightIcon />}
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "Nunito, sans-serif",
            textTransform: "capitalize",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          Barchasi
        </Button>
      </Stack>
      <Grid2 container sx={{ mt: 2, width: "100%" }}>
        <Grid2 xs={12} md={9} lg={10} >
          <ProductsSlider />
        </Grid2>
        <Grid2 xs={12} md={3} lg={2} >
          <Box  sx={{ width: "100%", height: "100%", p: 1 }}>
            <CreativeCarausel />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
