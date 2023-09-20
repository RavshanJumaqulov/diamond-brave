import {
  Box,
  Button,
  Fab,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default function ProductSliderItem({ width, setImg, el }) {
  const { lan } = useContext(Context);
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    setImgWidth(imgRef.current.clientWidth);
  }, [width, imgRef]);
  return (
    <Box sx={{ p: 1, width: "100%" }}>
      <Box
        sx={{
          borderRadius: 3,
          border: "1px solid rgba(0, 0, 0, 0.2)",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          p: 1,
          background: "#ffffff3f",
          backdropFilter: "blur(18px)",
          overflow: "hidden",
        }}
      >
        <Box
          ref={imgRef}
          sx={{
            position: "relative",
            bottom: 0,
            // overflow: "hidden",
            "&:hover": {
              "& .MuiStack-root": {
                transform: "translateY(0)",
                opacity: 0.5,
              },
            },
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: -8,
              left: -8,
              background: "#3bb77f",
              px: 0.5,
              py: 0.2,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              color: "#fff",
            }}
          >
            {el["category"][`title_${lan}`]}
          </Typography>
          <Box
            component={"img"}
            src={el.img}
            sx={{
              width: "100%",
              minHeight: imgWidth,
              maxHeight: imgWidth,
              objectFit: "contain",
            }}
          />
          <Fab
            onClick={() => setImg(el.img)}
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
              }}
            />
          </Fab>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography
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
            }}
          >
            {el[`title_${lan}`]}
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              mt: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Rating
              defaultValue={4+Math.random()}
              precision={0.1}
              readOnly
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="16px" />}
            />
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: "Barlow, sans-serif",
                fontWeight: "500",
                width: "auto",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                textAlign: "right",
              }}
            >
              {el[`miqdori_${lan}`]}
            </Typography>
          </Stack>
        </Box>
        <Button
          onClick={() => navigate(`/products/${el.id}`)}
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
