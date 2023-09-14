import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ProductsSlider from "./ProductsSlider";
import CreativeCarausel from "./CreativeCarausel";
import BestNewsSlider from "./BestNewsSlider";

export default function BestNewsContainer() {
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
      <Grid2 container sx={{ mt: 2, width: "100%", height: "100%" }}>
        <Grid2 xs={12}>
          <BestNewsSlider />
        </Grid2>
      </Grid2>
    </Box>
  );
}
