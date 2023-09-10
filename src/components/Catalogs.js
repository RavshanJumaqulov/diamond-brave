import { Box, Typography } from "@mui/material";
import React from "react";
import CatalogsItem from "./CatalogsItem";
import { useSelector } from "react-redux";

export default function Catalogs() {
  const catalogs = useSelector((state) => state.catalogs);
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        transition: "0.3s all",
        mt: 2
      }}
    >
      {/* <Typography
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
      </Typography> */}
      {catalogs.map((el, index) => {
        return (
          <CatalogsItem
            title={el.name}
            url={el.img}
          />
        );
      })}

      
    </Box>
  );
}
