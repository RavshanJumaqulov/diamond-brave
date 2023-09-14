import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Fab,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import StarIcon from "@mui/icons-material/Star";
import Context from "../Context";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function BestNewsSliderItem({
  width,
  setImg,
  id,
  img,
  title,
  date,
  views,
}) {
  const navigate = useNavigate();
  const { lan } = useContext(Context);
  const imgRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(0);
  useEffect(() => {
    setImgWidth(imgRef.current.clientWidth);
  }, [width, imgRef]);

  return (
    <Box
      sx={{
        p: 1,
        width: "100%",
        "&:hover": {
          "& .MuiTypography-root": {
            backgroundSize: "100% 6%",
          },
        },
      }}
    >
      <Box
        sx={{
          borderRadius: 3,
          border: "1px solid rgba(0, 0, 0, 0.2)",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          p: 1,
          background: "#ffffff3f",
          backdropFilter: "blur(18px)",
        }}
      >
        <Box
          ref={imgRef}
          sx={{
            position: "relative",
            bottom: 0,
            overflow: "hidden",
            "&:hover": {
              "& .MuiStack-root": {
                transform: "translateY(0)",
                opacity: 0.5,
              },
            },
          }}
        >
          <Box
            component={"img"}
            src={img}
            sx={{
              width: "100%",
              minHeight: (imgWidth * 9) / 16,
              maxHeight: (imgWidth * 9) / 16,
              objectFit: "cover",
              borderRadius: 3,
            }}
          />
          <Fab
            onClick={() => setImg(img)}
            size="small"
            elevation={3}
            sx={{
              position: "absolute",
              boxShadow: "none",
              bottom: 10,
              right: 10,
              background: "none",
              transition: "0.3s all",
              "&:hover": {
                background: "#e0e0e0",
                "& svg": {
                  color: "#3BB77E",
                  transform: "scale(1.1)",
                },
              },
            }}
          >
            <FullscreenIcon
              sx={{
                width: 35,
                height: 35,
                fontSize: 35,
                color: "text.primary",
                transition: "0.3s all",
                bottom: 10,
                right: 10,
                color: "#fff",
              }}
            />
          </Fab>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography
            sx={{
              mt: 1,
              fontSize: 18,
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              WebkitTransitionDuration: "0.5s",
              transitionDuration: "0.5s",
              cursor: "default",
            }}
          >
            {title}
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
                cursor: "default",
              }}
            >
              {date}
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
                cursor: "default",
              }}
            >
              {lan == "uz"
                ? `${views} marta o'qildi`
                : lan == "en"
                ? `Read ${views} times`
                : `Прочтите ${views} раз`}
            </Typography>
          </Box>
        </Box>
        <Button
        onClick={() => navigate(`/news/${id}`)}
          variant={"contained"}
          disableElevation
          sx={{
            background: "#3BB77E",
            width: "100%",
            borderRadius: 3,
            fontFamily: "Nunito, sans-serif",
            textTransform: "capitalize",
            fontSize: 16,
            fontWeight: 700,
            "&:hover": {
              background: "#00aa67",
            },
          }}
        >
          {lan == "uz" ? "Batafsil" : lan == "en" ? "Read more" : "Более"}
        </Button>
      </Box>
    </Box>
  );
}
