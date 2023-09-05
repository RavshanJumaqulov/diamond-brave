import { Box } from "@mui/material";
import React from "react";

export default function CreativeCarauselItem(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "100% !important",
        borderRadius: 3
      }}
    >
      <Box
        component="img"
        src={props.img}
        sx={{
          width: "100%",
          minHeight: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          borderRadius: 3
        }}
      />
    </Box>
  );
}
