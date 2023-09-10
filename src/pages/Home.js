import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import Carausel from "../components/Carausel";
import Background from "../components/Background";
import About from "../components/About";
import Blog from "../components/Blog";
import Products from "../components/Products";
import Certificate from "../components/Certificate";
import Context from "../Context";

export default function Home() {
  const { productsLoading, newsLoading } = useContext(Context);
  return (
    <Box sx={{ position: "relative" }}>
      <Background />
      <Container maxWidth="xl">
        <Carausel />
        <About />
        {productsLoading.error == true ? (
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              textAlign: "left",
            }}
            color="error.main"
          >
            Serverda xatolik sodir bo'ldi!
          </Typography>
        ) : (
          <Products />
        )}

        {newsLoading.error == true ? (
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              textAlign: "left",
            }}
            color="error.main"
          >
            Serverda xatolik sodir bo'ldi!
          </Typography>
        ) : (
          <Blog />
        )}
        <Certificate />
      </Container>
    </Box>
  );
}
