import { Box, Fab, Skeleton, Stack } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import BestNewsSliderItem from "../components/BestNewsSliderItem";

export default function BestNewsLoading() {
  const { width, height } = useContext(Context);
  const imgRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(0);
  useEffect(() => {
    setImgWidth(imgRef.current.clientWidth);
  }, [width, imgRef]);
  const [img, setImg] = useState("");

  const arrowRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow:
      width < 500
        ? 1
        : width < 600
        ? 2
        : width < 800
        ? 1
        : width < 900
        ? 2
        : width < 1200
        ? 3
        : 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };
  return (
    <Box sx={{ width: "100%", py: { xs: 5, md: 10 } }}>
      <Stack
        direction="column"
        sx={{
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Skeleton
          variant="text"
          sx={{
            fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 40 },
            fontWeight: 700,
            mb: 1,
            maxWidth: 400,
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: 16,
            fontWeight: 700,
            mb: 1,
            maxWidth: 700,
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            display: { md: "none" },
            fontSize: 16,
            fontWeight: 700,
            maxWidth: 300,
          }}
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row">
          <Skeleton
            variant="text"
            sx={{
              fontSize: 18,
              fontWeight: 700,
              minWidth: 90,
              mr: 2,
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              fontSize: 18,
              fontWeight: 700,
              minWidth: 90,
              mr: 2,
            }}
          />
        </Stack>
        <Skeleton
          variant="text"
          sx={{
            fontSize: 22,
            fontWeight: 700,
            minWidth: 90,
            mr: 2,
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          height: "100% !important",
          display: "block",
          "& .slick-slider": {
            position: "relative",
            height: "100% !important",
            "& .slick-list": {
              height: "100% !important",
              "& div": {
                // height: "100%",
              },
            },
            "& .slick-prev": {
              position: "absolute",
              left: "30px !important",
              zIndex: "inherit",
              width: "40px",
              height: "40px",
              borderRadius: 3,
              background: "#fff",
              boxShadow: "0 0 3px #0000003f",
            },
            "& .slick-next": {
              position: "absolute",
              right: "30px !important",
              zIndex: "inherit",
              width: "40px",
              height: "40px",
              borderRadius: 3,
              background: "#fff",
              boxShadow: "0 0 3px #0000003f",
            },
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "0px",
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 2,
            top: "calc(50% - 20px)",
            px: 2,
          }}
        >
          <Fab
            onClick={() => arrowRef.current.slickPrev()}
            sx={{
              width: { xs: 30, md: "40px" },
              height: { xs: 30, md: "40px" },
              borderRadius: 3,
              background: "#e0e0e03f !important",
              boxShadow:
                "0px 3px 5px -1px rgba(0,0,0,0.1), 0px 6px 5px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12) !important",
              position: "relative",
              zIndex: 1,
            }}
          >
            <ArrowForwardIosIcon
              sx={{ transform: "rotate(180deg)", fontSize: { xs: 14, md: 18 } }}
            />
          </Fab>
          <Fab
            onClick={() => arrowRef.current.slickNext()}
            sx={{
              width: { xs: 30, md: "40px" },
              height: { xs: 30, md: "40px" },
              borderRadius: 3,
              background: "#e0e0e03f !important",
              boxShadow:
                "0px 3px 5px -1px rgba(0,0,0,0.1), 0px 6px 5px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12) !important",
              position: "relative",
              zIndex: 1,
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
          </Fab>
        </Box>
        <Slider ref={arrowRef} {...settings} style={{ width: "100%", marginTop: 16 }}>
          <Box
            sx={{
              p: 1,
              width: "100%",
            }}
          >
            <Skeleton
              ref={imgRef}
              variant="rounded"
              width={"100%"}
              height={(imgWidth * 9) / 16}
              sx={{ borderRadius: 3 }}
            />
            <Skeleton
              variant="text"
              sx={{
                mt: 1.5,
                fontSize: 22,
                fontWeight: 700,
                maxWidth: "95%",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: 22,
                fontWeight: 700,
                mb: 1,
                maxWidth: "60%",
              }}
            />
            <Stack direction="row">
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  mr: 2,
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                }}
              />
            </Stack>
            <Box sx={{ px: 2 }}>
              <Skeleton
                variant="rounded"
                sx={{ mt: 1, width: "100%", height: "40px", borderRadius: 3 }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              p: 1,
              width: "100%",
            }}
          >
            <Skeleton
              ref={imgRef}
              variant="rounded"
              width={"100%"}
              height={(imgWidth * 9) / 16}
              sx={{ borderRadius: 3 }}
            />
            <Skeleton
              variant="text"
              sx={{
                mt: 1.5,
                fontSize: 22,
                fontWeight: 700,
                maxWidth: "95%",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: 22,
                fontWeight: 700,
                mb: 1,
                maxWidth: "60%",
              }}
            />
            <Stack direction="row">
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  mr: 2,
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                }}
              />
            </Stack>
            <Box sx={{ px: 2 }}>
              <Skeleton
                variant="rounded"
                sx={{ mt: 1, width: "100%", height: "40px", borderRadius: 3 }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              p: 1,
              width: "100%",
            }}
          >
            <Skeleton
              ref={imgRef}
              variant="rounded"
              width={"100%"}
              height={(imgWidth * 9) / 16}
              sx={{ borderRadius: 3 }}
            />
            <Skeleton
              variant="text"
              sx={{
                mt: 1.5,
                fontSize: 22,
                fontWeight: 700,
                maxWidth: "95%",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: 22,
                fontWeight: 700,
                mb: 1,
                maxWidth: "60%",
              }}
            />
            <Stack direction="row">
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  mr: 2,
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                }}
              />
            </Stack>
            <Box sx={{ px: 2 }}>
              <Skeleton
                variant="rounded"
                sx={{ mt: 1, width: "100%", height: "40px", borderRadius: 3 }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              p: 1,
              width: "100%",
            }}
          >
            <Skeleton
              ref={imgRef}
              variant="rounded"
              width={"100%"}
              height={(imgWidth * 9) / 16}
              sx={{ borderRadius: 3 }}
            />
            <Skeleton
              variant="text"
              sx={{
                mt: 1.5,
                fontSize: 22,
                fontWeight: 700,
                maxWidth: "95%",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: 22,
                fontWeight: 700,
                mb: 1,
                maxWidth: "60%",
              }}
            />
            <Stack direction="row">
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  mr: 2,
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                }}
              />
            </Stack>
            <Box sx={{ px: 2 }}>
              <Skeleton
                variant="rounded"
                sx={{ mt: 1, width: "100%", height: "40px", borderRadius: 3 }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              p: 1,
              width: "100%",
            }}
          >
            <Skeleton
              ref={imgRef}
              variant="rounded"
              width={"100%"}
              height={(imgWidth * 9) / 16}
              sx={{ borderRadius: 3 }}
            />
            <Skeleton
              variant="text"
              sx={{
                mt: 1.5,
                fontSize: 22,
                fontWeight: 700,
                maxWidth: "95%",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: 22,
                fontWeight: 700,
                mb: 1,
                maxWidth: "60%",
              }}
            />
            <Stack direction="row">
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  mr: 2,
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  width: "30%",
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                }}
              />
            </Stack>
            <Box sx={{ px: 2 }}>
              <Skeleton
                variant="rounded"
                sx={{ mt: 1, width: "100%", height: "40px", borderRadius: 3 }}
              />
            </Box>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}
