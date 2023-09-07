import { Box, Container } from "@mui/material";
import React from "react";
import TopNews from "../components/TopNews";
import BestNews from "../components/BestNews";
import AllNews from "../components/AllNews";

export default function News() {
  return (
    <Container maxWidth='xl'>
      <Box sx={{ mt: 10, minHeight: "calc(100vh - 80px)" }}>
        <TopNews />
        <BestNews />
        <AllNews />
      </Box>
    </Container>
  );
}
