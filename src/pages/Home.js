import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import Carausel from "../components/Carausel";
import About from "../components/About";
import Blog from "../components/Blog";
import Products from "../components/Products";
import Certificate from "../components/Certificate";
import Context from "../Context";
import BlogLoading from "../loading/BlogLoading";
import ProductsSliderLoading from "../loading/ProductsSliderLoading";

export default function Home() {
  const { lan } = useContext(Context);
  const { productsLoading, newsLoading } = useContext(Context);
  return (
    <Box sx={{ position: "relative" }}>
      <Container maxWidth="xl">
        <Carausel />
        <About />
        {productsLoading.status ? (
          productsLoading.error ? (
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "Nunito, sans-serif",
                textAlign: "left",
              }}
              color="error.main"
            >
              {productsLoading.message + " "}
              {lan == "uz"
                ? "Serverda xatolik sodir bo'ldi!"
                : lan == "en"
                ? "A server error has occurred!"
                : "Произошла ошибка сервера!"}
            </Typography>
          ) : (
            <Products />
          )
        ) : (
          <ProductsSliderLoading />
        )}
        {newsLoading.status ? (
          newsLoading.error ? (
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "Nunito, sans-serif",
                textAlign: "left",
              }}
              color="error.main"
            >
              {productsLoading.message + " "}
              {lan == "uz"
                ? "Serverda xatolik sodir bo'ldi!"
                : lan == "en"
                ? "A server error has occurred!"
                : "Произошла ошибка сервера!"}
            </Typography>
          ) : (
            <Blog />
          )
        ) : (
          <BlogLoading />
        )}

        <Certificate />
      </Container>
    </Box>
  );
}
