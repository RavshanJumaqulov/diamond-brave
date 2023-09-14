import { Box, Typography } from "@mui/material";
import React from "react";

export default function ProductList(props) {
  return (
    <Box
      sx={{
        pb: 0,
        borderRadius: 3,
        border: "1px solid transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 2,
        transition: "0.3s all",
        WebkitTransition: "0.3s all",
        "&:hover": {
          border: "1px solid #3bb77f",
        },
      }}
    >
      <Box
        component={"img"}
        src={props.img}
        sx={{
          width: 120,
          height: 120,
          objectFit: "contain",
          borderRadius: 3,
          mb: 0,
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            mt: 1,
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            width: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            WebkitTransitionDuration: "0.5s",
            transitionDuration: "0.5s",
            cursor: "pointer",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            color: "text.secondary",
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "Nunito, sans-serif",
          }}
        >
          {props.catalog}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              mt: 1.5,
              fontSize: 16,
              fontWeight: 500,
              fontFamily: "Nunito, sans-serif",
              cursor: "default",
            }}
          >
            Qadoq turi: &nbsp; &nbsp;
          </Typography>
          <Typography
            sx={{
              mt: 1.5,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              width: "auto",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",

              WebkitTransitionDuration: "0.5s",
              transitionDuration: "0.5s",
              cursor: "pointer",
            }}
          >
            {props.type}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
