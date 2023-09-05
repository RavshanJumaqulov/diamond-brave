import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Spline from "@splinetool/react-spline";
import React, { useEffect, useRef, useState } from "react";

export default function Product() {
  const [containerWidth, setContainerWidth] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    console.log(containerRef.current);
    setContainerWidth(containerRef.current.clientWidth);
  }, [containerRef]);

  useEffect(() => {
    setImgHeight(imgRef.current.clientHeight);
    setImgWidth(imgRef.current.clientWidth);
  }, [imgRef]);
  const moveZoom = (e) => {
    setTop(e.clientY - imgRef.current.clientHeight / 1.4);
    setLeft(e.clientX - imgRef.current.clientWidth);
  };
  const reset = () => {
    setTop(0);
    setLeft(0);
  };
  return (
    <Box sx={{ mt: { xs: 8, md: 10 } }}>
      <Container maxWidth="xl">
        <Grid2 container sx={{ width: "100%" }}>
          <Grid2 xs={12} lg={9}>
            <Box sx={{ width: "100%" }}>
              <Grid2 container sx={{ width: "100%" }}>
                <Grid2
                  xs={12}
                  sm={4}
                  md={6}
                  sx={{ px: { xs: 1, sm: 2 }, py: 1 }}
                >
                  <Box
                    onMouseMove={moveZoom}
                    onMouseLeave={reset}
                    ref={containerRef}
                    sx={{
                      border: "1px solid rgba(0, 0, 0, 0.2)",
                      borderRadius: 3,
                      height: containerWidth,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Box
                      ref={imgRef}
                      component="img"
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg"
                      sx={{
                        width: "90%",
                        position: "absolute",
                        bottom: top,
                        right: left,
                        transform:
                          top == 0 && left == 0 ? "scale(1)" : "scale(2.5)",
                        transition: "0.3s all",
                      }}
                    />
                  </Box>
                </Grid2>
                <Grid2
                  xs={12}
                  sm={8}
                  md={6}
                  sx={{
                    px: { xs: 1, sm: 2 },
                    py: 1,
                    display: "flex",
                    flexDirection: { xs: "column-reverse", sm: "column" },
                  }}
                >
                  <Box sx={{}}>
                    <Typography
                      sx={{
                        fontSize: { xs: 24, sm: 30 },
                        fontWeight: 600,
                        fontFamily: "Barlow, sans-serif",
                      }}
                    >
                      Fruitozilin
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontFamily: "Barlow, sans-serif",
                        fontWeight: 500,
                        mt: 2,
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur, dicta.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg"
                      sx={{
                        width: 88,
                        height: 88,
                        objectFit: "cover",
                        borderRadius: 3,
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        mr: 1,
                      }}
                    />
                    <Box
                      component="img"
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg"
                      sx={{
                        width: 88,
                        height: 88,
                        objectFit: "cover",
                        borderRadius: 3,
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        mr: 1,
                      }}
                    />
                    <Box
                      component="img"
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                      sx={{
                        width: 88,
                        height: 88,
                        objectFit: "cover",
                        borderRadius: 3,
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        mr: 1,
                      }}
                    />
                  </Box>
                </Grid2>
                <Grid2 xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      p: 1,
                      border: '1px solid red',
                      mt: 2,
                      borderRadius: 3,
                      p: 1,
                      background: ''
                    }}
                  >

                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
