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
import React, { useEffect, useRef, useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import StarIcon from "@mui/icons-material/Star";

export default function BestNewsSliderItem({ width, setImg }) {
  const [open, setOpen] = React.useState(true);
  const imgRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    console.log(imgRef.current.clientWidth);
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
            src="/products/1.png"
            sx={{
              width: "100%",
              minHeight: imgWidth,
              maxHeight: imgWidth,
              objectFit: "contain",
            }}
          />
          <Stack
            sx={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              transform: { xs: "translateY(0px)", md: "translateY(50px)" },
              opacity: { xs: 1, md: 0 },
              transition: "0.3s all",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "90%",
                height: 50,
                borderRadius: 3,
                background: {
                  xs: "rgba(0, 0, 0, 0.1)",
                  md: "rgba(0, 0, 0, 0.2)",
                },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Fab
                onClick={() =>
                  setImg(
                    "https://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/shop/product-2-2.jpg"
                  )
                }
                size="small"
                elevation={0}
              >
                <FullscreenIcon
                  sx={{
                    width: 35,
                    height: 35,
                    fontSize: 35,
                    color: "text.primary",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#3BB77E",
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Fab>
              <Fab
                onClick={() =>
                  setImg(
                    "https://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/shop/product-2-2.jpg"
                  )
                }
                size="small"
                elevation={0}
              >
                <AssignmentOutlinedIcon
                  sx={{
                    width: 35,
                    height: 35,
                    fontSize: 35,
                    color: "text.primary",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#3BB77E",
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Fab>
            </Box>
          </Stack>
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
              background:
                "-webkit-gradient(linear, left top, right top, from(#3bb77e), to(#3bb77e))",
              background: "linear-gradient(to right, #3bb77e 0%, #3bb77e 100%)",
              backgroundSize: "100px 6%",
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
            The pros and const of busines agency
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
              102 users read
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
              1022 users read
            </Typography>
          </Box>
        </Box>
        <Button
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
    </Box>
  );
}
