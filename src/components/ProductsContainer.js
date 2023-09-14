import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ProductsSlider from "./ProductsSlider";
import CreativeCarausel from "./CreativeCarausel";
import Context from "../Context";

export default function ProductsContainer() {
  const navigate = useNavigate();
  const { lan } = useContext(Context);
  const [sort, setSort] = useState("popular");
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 3,
        mt: 2,
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
            flexDirection: "row",
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
          <NavLink onClick={() => setSort("popular")}>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 16 },
                fontWeight: 506,
                display: { xs: "block", md: "block" },
                color: sort == "latest" ? "#3bb77e" : "#011a41",
              }}
            >
              {lan == "uz"
                ? "Mashxurlar"
                : lan == "en"
                ? "Popular"
                : "Популярный"}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 16 },
                fontWeight: 506,
                display: { xs: "block", md: "inline-block" },
                color: sort == "latest" ? "#3bb77e" : "#011a41",
              }}
            >
              {lan == "uz"
                ? "Mashxurlar"
                : lan == "en"
                ? "Popular"
                : "Популярный"}
            </Typography>
          </NavLink>
          <NavLink onClick={() => setSort("latest")}>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 16 },
                fontWeight: 506,
                display: { xs: "block", md: "block" },
                color: sort == "popular" ? "#3bb77e" : "#011a41",
              }}
            >
              {lan == "uz"
                ? "So'nggilar"
                : lan == "en"
                ? "Latest"
                : "Последние"}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 16 },
                fontWeight: 506,
                display: { xs: "block", md: "inline-block" },
                color: sort == "popular" ? "#3bb77e" : "#011a41",
              }}
            >
              {lan == "uz"
                ? "So'nggilar"
                : lan == "en"
                ? "Latest"
                : "Последние"}
            </Typography>
          </NavLink>
        </Box>
        <Button
          onClick={() => navigate(`/products`)}
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
          {lan== "uz"
            ? "Barchasi"
            : lan == "en"
            ? "all products"
            : "все продукты"}
        </Button>
      </Stack>
      <Grid2 container sx={{ mt: 2, width: "100%", height: "100%" }}>
        <Grid2 xs={12} sm={7} md={9} lg={10}>
          <ProductsSlider />
        </Grid2>
        <Grid2 xs={12} sm={5} md={3} lg={2}>
          <Box sx={{ width: "100%", height: "100%", p: 1 }}>
            <CreativeCarausel />
          </Box>
        </Grid2>
      </Grid2>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => navigate(`/products`)}
          variant="light"
          disableElevation
          endIcon={<KeyboardArrowRightIcon />}
          sx={{
            my: {xs:3, md: 0},
            display: { xs: "flex", md: "none" },
            fontFamily: "Nunito, sans-serif",
            textTransform: "capitalize",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          {lan == "uz"
            ? "Barchasi"
            : lan == "en"
            ? "all products"
            : "все продукты"}
        </Button>
      </Box>
    </Box>
  );
}
