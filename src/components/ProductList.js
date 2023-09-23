import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default function ProductList(props) {
  const navigate = useNavigate();
  const { lan } = useContext(Context)
  return (
    <Box
      onClick={() => navigate(`/products/${props.id}`)}
      sx={{
        py: 0.5,
        px: 1,
        borderRadius: 3,
        border: "1px solid rgba(0, 0, 0, 0.23)",
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
          height: 100,
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
            mt: 0.5,
            color: "text.secondary",
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "Nunito, sans-serif",
            cursor: 'default'
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
              mt: 1,
              fontSize: 16,
              fontWeight: 500,
              fontFamily: "Nunito, sans-serif",
              cursor: "default",
            }}
          >
            {lan=="uz" ? "Qadoq turi" : lan == "en" ? "Type of packaging" : "Тип упаковкиu"}: &nbsp; &nbsp;
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
