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
import CloseIcon from "@mui/icons-material/Close";
import Context from "../Context";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

export default function ProductsItem(props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const imgRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(0);
  const { width } = useContext(Context);
  useEffect(() => {
    setImgWidth(imgRef.current.clientWidth);
  }, [width, imgRef]);
  return (
    <Box sx={{ width: "100%" }}>
      {open ? (
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            top: 0,
            left: 0,
            background: open ? "rgba(0, 0, 0, 0.2)" : "none",
            zIndex: 1000000,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 50,
              height: 30,
              background: "rgba(0, 0, 0, 0.4)",
              transition: "0.3s all !important",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                background: "red",
                "& svg": {
                  transition: "0.3s all !important",
                  transform: "scale(1.05)",
                },
              },
              "& svg": {
                color: "#fff",
              },
            }}
          >
            <CloseIcon />
          </Box>
          <Box
            component="img"
            src={props.img}
            sx={{
              width: { xs: "100%", sm: "90%" },
              height: { xs: "100%", sm: "90%" },
              objectFit: "contain",
            }}
          />
        </Box>
      ) : (
        ""
      )}
      <Fade>
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
              {props.category}
            </Typography>
            <Box
              component={"img"}
              src={props.img}
              sx={{
                minHeight: (imgWidth * 9) / 16,
                maxHeight: (imgWidth * 9) / 16,
                width: "100%",
                objectFit: "contain",
              }}
            />
            <Fab
              onClick={() => setOpen(true)}
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
              {props.title}
            </Typography>
            <Stack
              direction={"row"}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Rating
                defaultValue={5}
                precision={0.1}
                readOnly
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="16px" />
                }
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
                10 Tabletka
              </Typography>
            </Stack>
          </Box>
          <Button
            onClick={() => navigate(`/products/${props.id}`)}
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
            Batafsil
          </Button>
        </Box>
      </Fade>
    </Box>
  );
}
