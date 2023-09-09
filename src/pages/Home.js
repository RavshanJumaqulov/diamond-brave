import { Box, Container } from "@mui/material";
import React from "react";
import Carausel from "../components/Carausel";
import Background from "../components/Background";
import About from "../components/About";
import Blog from "../components/Blog";
import Products from "../components/Products";
import Certificate from "../components/Certificate";

export default function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <Background />
      <Container maxWidth="xl">
        <Carausel />
        {/* <About /> */}
        <Products />
        <Blog />
        <Certificate />
      </Container>
    </Box>
  );
}
