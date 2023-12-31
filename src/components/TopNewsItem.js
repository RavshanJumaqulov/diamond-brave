import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";
import { useNavigate, useParams } from "react-router-dom";

export default function TopNewsItem(props) {
  const params = useParams()
  const {width, lan} = useContext(Context)
  const navigate = useNavigate()

  const navigatsiya = () => {
    if (Object.keys(params).length == 0)
      navigate(`/news/page_1/${props.id}`);
    else {
      navigate(`/news/${params.page}/${props.id}`);
    }
  };
  return (
    <Box
    onClick={navigatsiya}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "&:hover": {
          "& .MuiTypography-root": {
            backgroundSize: "100% 3%",
          },
        },
      }}
    >
      <Box
        component={"img"}
        src={props.img}
        sx={{
          width: {
            xs: width > 450 ? 150 : 120,
            sm: width < 750 ? 200 : 250,
            md: 150,
            lg: 200,
          },
          minWidth: {
            xs: width > 450 ? 150 : 120,
            sm: width < 750 ? 200 : 250,
            md: 150,
            lg: 200,
          },
          height: {
            xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
            sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
            md: (150 * 9) / 16,
            lg: (200 * 9) / 16,
          },
          minHeight: {
            xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
            sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
            md: (150 * 9) / 16,
            lg: (200 * 9) / 16,
          },
          borderRadius: 3,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
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
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            background:
              "-webkit-gradient(linear, left top, right top, from(#3bb77e), to(#3bb77e))",
            background: "linear-gradient(to right, #3bb77e 0%, #3bb77e 100%)",
            backgroundSize: "0px 6%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 100%",
            WebkitTransitionDuration: "0.5s",
            transitionDuration: "0.5s",
            cursor: "pointer",
            "&:hover": {
              backgroundSize: "100% 6%",
            },
          }}
        >
          {props.title}
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            alignItems: "center",
            mt: { sm: 2, md: 1, lg: 2 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
              fontWeight: "400",
              color: "text.secondary",
              fontFamily: "Nunito, sans-serif",
              cursor: 'default'
            }}
          >
            {props.date}
          </Typography>
          <Box
            sx={{
              borderRadius: "50%",
              width: 4,
              height: 4,
              background: "#00000099",
              mx: 1,
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
              fontWeight: "400",
              color: "text.secondary",
              fontFamily: "Nunito, sans-serif",
              cursor: 'default',
              textTransform: 'lowercase'
            }}
          >
            {lan == 'uz' ? `${props.views} marta o'qildi` : lan == 'en' ? `Read ${props.views} times` : `Прочтите ${props.views} раз`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
