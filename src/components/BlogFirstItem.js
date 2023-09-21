import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context"
export default function BlogFirstItem({ el }) {
  moment.locale('uz-latn')
  const { lan } = useContext(Context)
  const navigate = useNavigate()
  return (
    <Stack
    onClick = {() => navigate(`/news/page_1/${el.id}`)}
      direction="column"
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        height: "100%",
        boxSizing: "border-box !important",
        mr: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          verticalAlign: "bottom",
          display: "inline-block",
          boxSizing: "border-box",
          opacity: 1,
          transition: "opacity 0.3s",
        }}
        component="img"
        src={el.img}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          top: 0,
          left: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 5,
          gap: 2,
          color: "rgba(255, 255, 255)",
          fontWeight: 400,
        }}
      >
        <Stack
          direction="row"
          sx={{
            opacity: 0.72,
            alignItems: "center",
            fontSize: 12,
            fontFamily: "Nunito, sans-serif",
            cursor: "default",
          }}
        >
          {moment(el.created_at).fromNow()}
          <Box
            sx={{
              mx: 2,
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: "currentColor",
              cursor: "default",
              textTransform: 'lowercase'
            }}
          ></Box>
           {lan == 'uz' ? `${el.views} marta o'qildi` : lan == 'en' ? `Read ${el.views} times` : `Прочтите ${el.views} раз`}
        </Stack>
        <Typography
          sx={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 700,
            fontSize: { xs: 24, sm: 26, md: 30, lg: 32 },
            cursor: "pointer",
            width: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box !important",
            WebkitLineClamp: '2 !important',
            WebkitBoxOrient: "vertical",
          }}
        >
          {el[`title_${lan}`]}
        </Typography>
        <Typography
        dangerouslySetInnerHTML={{ __html: el[`text_${lan}`] }}
          sx={{
            fontSize: 16,
            fontWeight: 400,
            opacity: 0.48,
            fontFamily: "Public, sans-serif",
            width: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box !important",
            WebkitLineClamp: '2 !important',
            WebkitBoxOrient: "vertical",
            cursor: "default",
          }}
        >
          
        </Typography>
      </Box>
    </Stack>
  );
}
