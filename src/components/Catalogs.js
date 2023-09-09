import { Box, Typography } from "@mui/material";
import React from "react";
import CatalogsItem from "./CatalogsItem";

export default function Catalogs() {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        transition: '0.3s all',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
          fontWeight: 700,
          fontFamily: "Nunito, sans-serif",
          color: "#011a41",
          mb: 3,
          mt: 2,
        }}
      >
        Kataloglar
      </Typography>
      <CatalogsItem
        title="Dermatalogiya"
        url="https://dermacenter.uz/uploads/article/45.jpg"
      />
      <CatalogsItem
        title="Gastroenterologiya"
        url="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png"
      />
      <CatalogsItem
        title="Dermatalogiya"
        url="https://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/blog/blog-3.png"
      />
    </Box>
  );
}
