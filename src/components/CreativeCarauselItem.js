import { Box, Typography } from "@mui/material";
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
          maxHeight: 350,
          objectFit: "cover",
          borderRadius: 3
        }}
      />
      <Typography sx={{position: 'absolute', bottom: 50, left: 10, zIndex: 1, fontSize: 18, fontWeight: 700, fontFamily: 'Nunito, sans-serif', color: '#fff'}}>
        {props.title}
      </Typography>
    </Box>
  );
}
