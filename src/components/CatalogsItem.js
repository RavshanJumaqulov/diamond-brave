import { Box, Typography } from "@mui/material";
import React from "react";

export default function CatalogsItem(props) {
  return (
    <Box
      sx={{
        mb: 2,
        // background: `url(${props.url})`,
        // backgroundPosition: "center center",
        // backgroundSize: "cover",
        py: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        // boxShadow:
        //   "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        // background: "#ffffff3f !important",
        // backdropFilter: "blur(20px)",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        transition: "0.3s all",
        boxSizing: "border-box",
        "&:hover": {
          border: "2px solid #1976d2",
          "& img": {
            background: `url(${props.url})`,
            backgroundPosition: "center center",
            transform: "scale(1.1)",
            // filter: "blur(10px)",
          },
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          borderRadius: 3,
          top: 0,
          left: 0,
          zIndex: -10,
          filter: "blur(0px)",
          transition: "0.3s all",
        }}
      />
      <Typography
        color="text.secondary"
        sx={{
          fontSize: { xs: 17, sm: 18 },
          fontFamily: "Barlow, sans-serif",
          fontWeight: "600",
          width: "auto",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          background:
            "-webkit-gradient(linear, left top, right top, from(#3bb77e), to(#3bb77e))",
          background: "linear-gradient(to right, #3bb77e 0%, #3bb77e 100%)",
          backgroundSize: "0 6%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 100%",
          WebkitTransitionDuration: "0.5s",
          transitionDuration: "0.3s all",
          cursor: "pointer",
          "&:hover": {
            backgroundSize: "100% 6%",
            color: "#1976d2",
          },
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
}
