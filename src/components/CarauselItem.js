import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function CarauselItem(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60vh",
        position: "relative",
        "& img": { width: "100%", maxHeight: "100vh", objectFit: "cover" },
      }}
    >
      <img src={props.img} />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: props.index % 2 == 1 ? "flex-start" : "flex-end",
          justifyContent: "center",
          px: { xs: 3, md: 10 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Nunito, sans-serif",
            fontSize: { xs: 'calc(1.3125rem + 0.75vw)', lg: 30 },
            fontWeight: 700,
            maxWidth: { xs: 0, sm: 370, md: 500, lg: 600 },
            textAlign: props.index % 2 == 1 ? "left" : "right",
            display: { xs: "none", sm: "block" },
            color: "#011a41",
          }}
        >
          {/* {props.title} */}
        </Typography>
        {/* <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: 3, px: 2 }}
          disableElevation
        >
          Batafsil
        </Button> */}
      </Box>
    </Box>
  );
}
