import { Box, Typography } from "@mui/material";
import React from "react";

export default function CatalogsItem(props) {
  return (
    <Box
      onClick={() => props.setSortByCatalogs(props.value)}
      sx={{
        mb: 2,
        py: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
        transition: "0.3s all",
        boxSizing: "border-box",
        border:
          props.value == props.sortByCatalogs
            ? "1px solid #3bb77f"
            : "1px solid rgba(0, 0, 0, 0.23)",

        "& .MuiTypography-root": {
          backgroundSize:
            props.value == props.sortByCatalogs ? "100% 6%" : "0% 6%",
          color:
            props.value == props.sortByCatalogs ? "#3bb77f" : "currentcolor",
        },
        "&:hover": {
          border: "1px solid #3bb77f",
          "& img": {
            background: `url(${props.url})`,
            backgroundPosition: "center center",
            transform: "scale(1.1)",
          },
          "& .MuiTypography-root": {
            backgroundSize: "100% 6%",
            color: "#3bb77f",
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
            color: "#3bb77f",
          },
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
}
