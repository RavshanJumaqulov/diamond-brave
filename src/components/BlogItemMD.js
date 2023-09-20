import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default function BlogItemMD(props) {
  const { lan } = useContext(Context)
  const navigate = useNavigate()
  const [imgWidth, setImgWidth] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    setImgWidth(imgRef.current.clientWidth);
  }, []);
  return (
    <Stack
    onClick={()=>navigate(`/news/${props.item.id}`)}
      direction="column"
      order={props.order}
      sx={{
        width: {
          xs: "calc(50% - 16px) !important",
          md: "calc(50% - 16px) !important",
        },
        margin: "8px !important",
        gap: 2,
      }}
    >
      <Box
        component="img"
        ref={imgRef}
        src={props.item.img}
        sx={{
          borderRadius: 4,
          maxHeight:
            props.order % 2 == 0 ? `${(imgWidth * 9) / 16}px` : `${imgWidth}px`,
          minHeight:
            props.order % 2 == 0 ? `${(imgWidth * 9) / 16}px` : `${imgWidth}px`,
          objectFit: "cover",
        }}
      ></Box>
      <Stack
        direction={"row"}
        sx={{
          opacity: 0.72,
          alignItems: "center",
          fontSize: 12,
          fontFamily: "Nunito, sans-serif",
          fontWeight: "700",
          cursor: 'default',
        }}
      >
        {moment(props.item.created_at).fromNow()}
        <Box
          sx={{
            mx: 2,
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "currentColor",
            cursor: 'default',
            textTransform: 'lowercase'
          }}
        ></Box>
        {lan == 'uz' ? `${props.item.views} marta o'qildi` : lan == 'en' ? `Read ${props.item.views} times` : `Прочтите ${props.item.views} раз`}
      </Stack>
      <Typography
        sx={{
          fontSize: 18,
          fontFamily: "Barlow, sans-serif",
          fontWeight: "600",
          width: "auto",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          cursor: 'pointer',
        }}
      >
        {props['item'][`title_${lan}`]}
      </Typography>
    </Stack>
  );
}
