import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import ProductList from "./ProductList";
import { Stack } from "@mui/system";
import moment from "moment";

export default function ProductWithId() {
  const params = useParams();
  const products = useSelector((state) => state.products);
  const { width, lan } = useContext(Context);
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [content, setContent] = useState("tarkib");
  const [presentImg, setPresentImg] = useState("");

  const data = products.find((el) => el.id == +params.product);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setPresentImg(data.img);
    }
  }, [data]);
  useEffect(() => {
    if (containerRef.current !== null) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  }, [containerRef, width]);

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
                      src={presentImg}
                      sx={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        position: "absolute",
                        bottom: top,
                        right: left+20,
                        transform:
                          top == 0 && left == 0 ? "scale(1)" : "scale(2)",
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
                        color: "#011a41",
                        cursor: "pointer",
                      }}
                    >
                      {data[`title_${lan}`]}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontFamily: "Barlow, sans-serif",
                        fontWeight: 500,
                        mt: 2,
                      }}
                    >
                      {data[`description_${lan}`]}
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        display: "flex",
                        width: "100%",
                        maxWidth: 400,
                        flexDirection: "column",
                        justifyContent: "center",
                        borderRadius: 3,
                        p: 2,
                      }}
                    >
                      <Stack direction="row" sx={{ mt: 1 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            fontFamily: "Nunito, sans-serif",
                            cursor: "default",
                            width: 150,
                          }}
                        >
                          {lan == "uz"
                            ? "Taqdim etiladi"
                            : lan == "en"
                            ? "Presented"
                            : "Представлено"}
                          :
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 700,
                            fontFamily: "Nunito, sans-serif",
                            cursor: "default",
                          }}
                        >
                          {lan == "uz"
                            ? "Retseptsiz"
                            : lan == "en"
                            ? "Without a prescription"
                            : "Без рецепта"}
                        </Typography>
                      </Stack>
                      <Stack direction="row" sx={{ mt: 1 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            fontFamily: "Nunito, sans-serif",
                            cursor: "default",
                            width: 150,
                          }}
                        >
                          {lan == "uz"
                            ? "Turkumi"
                            : lan == "en"
                            ? "Category"
                            : "Категория"}
                          :
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 700,
                            fontFamily: "Nunito, sans-serif",
                            cursor: "default",
                          }}
                        >
                          {data[`category`][`title_${lan}`]}
                        </Typography>
                      </Stack>
                      <Stack direction="row" sx={{ mt: 1 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            fontFamily: "Nunito, sans-serif",
                            cursor: "default",
                            width: 150,
                          }}
                        >
                          {lan == "uz"
                            ? "Qadoq turi"
                            : lan == "en"
                            ? "Type of packaging"
                            : "Тип упаковки"}
                          :
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 700,
                            fontFamily: "Nunito, sans-serif",
                            cursor: "default",
                          }}
                        >
                          {data[`miqdori_${lan}`]}
                        </Typography>
                      </Stack>
                      <Stack direction="row" sx={{ mt: 1 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            fontFamily: "Nunito, sans-serif",
                            cursor: "default",
                            width: 150,
                          }}
                        >
                          {lan == "uz"
                            ? "Sahifaga joylandi"
                            : lan == "en"
                            ? "Posted on the page"
                            : "Размещено на странице"}
                          :
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 700,
                            fontFamily: "Nunito, sans-serif",
                            cursor: "default",
                          }}
                        >
                          {moment(data.created_at).fromNow()}
                        </Typography>
                      </Stack>
                    </Box>
                      <Stack
                        direction="row"
                        sx={{
                          mt: 2,
                          mb: 2,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: {xs: "center", md: "flex-start"},
                          width: '100%',
                          maxWidth: 400
                        }}
                      >
                        <Button
                          disableElevation
                          variant="contained"
                          sx={{
                            py: 1,
                            background: "#3BB77E",
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
                          ma'lumotlarni yuklash
                        </Button>
                      </Stack>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: { xs: "space-around", md: "flex-start" },
                      mt: 2,
                      width: "100%",
                      maxWidth: 400,
                    }}
                  >
                    <Box
                      onClick={() => setPresentImg(data.img)}
                      component="img"
                      src={data.img}
                      sx={{
                        width: 88,
                        height: 88,
                        objectFit: "cover",
                        borderRadius: 3,
                        border:
                          data.img == presentImg
                            ? "1px solid #3bb77f"
                            : "1px solid rgba(0, 0, 0, 0.23)",
                        mr: 1,
                      }}
                    />
                    <Box
                      onClick={() => setPresentImg(data.image1)}
                      component="img"
                      src={data.image1}
                      sx={{
                        width: 88,
                        height: 88,
                        objectFit: "cover",
                        borderRadius: 3,
                        border:
                          data.image1 == presentImg
                            ? "1px solid #3bb77f"
                            : "1px solid rgba(0, 0, 0, 0.23)",
                        mr: 1,
                      }}
                    />
                    <Box
                      onClick={() => setPresentImg(data.image2)}
                      component="img"
                      src={data.image2}
                      sx={{
                        width: 88,
                        height: 88,
                        objectFit: "cover",
                        borderRadius: 3,
                        border:
                          data.image2 == presentImg
                            ? "1px solid #3bb77f"
                            : "1px solid rgba(0, 0, 0, 0.23)",
                        mr: 1,
                      }}
                    />
                  </Box>
                </Grid2>
                <Grid2 xs={12}>
                  <Box
                    sx={{
                      p: 1,
                      mt: 2,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: 3,
                    }}
                  >
                    <Grid2 container spacing={1} sx={{ width: "100%" }}>
                      <Grid2 xs={6}>
                        <Box
                          onClick={() => setContent("tarkib")}
                          sx={{
                            mb: 2,
                            py: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 3,
                            position: "relative",
                            overflow: "hidden",
                            transition: "0.3s all",
                            boxSizing: "border-box",
                            border:
                              content == "tarkib"
                                ? "1px solid #3bb77f"
                                : "1px solid rgba(0, 0, 0, 0.23)",

                            "& .MuiTypography-root": {
                              backgroundSize:
                                content == "tarkib" ? "100% 6%" : "0% 0%",
                              color:
                                content == "tarkib"
                                  ? "#3bb77f"
                                  : "currentcolor",
                            },
                            "&:hover": {
                              border: "1px solid #3bb77f",

                              "& .MuiTypography-root": {
                                backgroundSize: "100% 6%",
                                color: "#3bb77f",
                              },
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              position: "absolute",
                              borderRadius: 3,
                              top: 0,
                              left: 0,
                              zIndex: -10,
                              filter: "blur(0px)",
                              transition: "0.3s all",
                            }}
                          />
                          <Typography
                            color="text.secondary"
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
                              background:
                                "-webkit-gradient(linear, left top, right top, from(#3bb77e), to(#3bb77e))",
                              background:
                                "linear-gradient(to right, #3bb77e 0%, #3bb77e 100%)",
                              backgroundSize: "0 6%",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "left 100%",
                              WebkitTransitionDuration: "0.5s",
                              transitionDuration: "0.3s all",
                              cursor: "pointer",
                              "&:hover": {
                                backgroundSize: "100% 6%",
                                color: "#3bb77f",
                              },
                            }}
                          >
                            {lan == "uz"
                              ? "Tarkibi"
                              : lan == "en"
                              ? "Approx"
                              : "Состав"}
                          </Typography>
                        </Box>
                      </Grid2>
                      <Grid2 xs={6}>
                        <Box
                          onClick={() => setContent("qullash")}
                          sx={{
                            mb: 2,
                            py: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 3,
                            position: "relative",
                            overflow: "hidden",
                            transition: "0.3s all",
                            boxSizing: "border-box",
                            border:
                              content == "qullash"
                                ? "1px solid #3bb77f"
                                : "1px solid rgba(0, 0, 0, 0.23)",

                            "& .MuiTypography-root": {
                              backgroundSize:
                                content == "qullash" ? "100% 6%" : "0% %",
                              color:
                                content == "qullash"
                                  ? "#3bb77f"
                                  : "currentcolor",
                            },
                            "&:hover": {
                              border: "1px solid #3bb77f",

                              "& .MuiTypography-root": {
                                backgroundSize: "100% 6%",
                                color: "#3bb77f",
                              },
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              position: "absolute",
                              borderRadius: 3,
                              top: 0,
                              left: 0,
                              zIndex: -10,
                              filter: "blur(0px)",
                              transition: "0.3s all",
                            }}
                          />
                          <Typography
                            color="text.secondary"
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
                              background:
                                "-webkit-gradient(linear, left top, right top, from(#3bb77e), to(#3bb77e))",
                              background:
                                "linear-gradient(to right, #3bb77e 0%, #3bb77e 100%)",
                              backgroundSize: "0 6%",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "left 100%",
                              WebkitTransitionDuration: "0.5s",
                              transitionDuration: "0.3s all",
                              cursor: "pointer",
                              "&:hover": {
                                backgroundSize: "100% 6%",
                                color: "#3bb77f",
                              },
                            }}
                          >
                            {lan == "uz"
                              ? "Qo'llanma"
                              : lan == "en"
                              ? "Manual"
                              : "Руководство"}
                          </Typography>
                        </Box>
                      </Grid2>
                    </Grid2>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
            {content == "tarkib" ? (
              <Fade>
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                    fontFamily: "Nunito, sans-serif",
                  }}
                  dangerouslySetInnerHTML={{ __html: data[`text1_${lan}`] }}
                />
              </Fade>
            ) : content == "qullash" ? (
              <Fade>
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                    fontFamily: "Nunito, sans-serif",
                  }}
                  dangerouslySetInnerHTML={{ __html: data[`text2_${lan}`] }}
                />
              </Fade>
            ) : (
              ""
            )}
          </Grid2>
          <Grid2 xs={12} lg={3}>
            <Typography
              sx={{
                fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
                fontWeight: 700,
                fontFamily: "Nunito, sans-serif",
                color: "#011a41",
                display: { xs: "none", md: "block" },
                mb: 2,
              }}
            >
              {lan == "uz"
                ? "Tasodifiy mahsulotlar"
                : lan == "en"
                ? "Recommended products"
                : "Рекомендуемые продукты"}
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Grid2 container spacing={2}>
                <Grid2 xs={12} sm={6}>
                  <ProductList />
                </Grid2>
                <Grid2 xs={12} sm={6}>
                  <ProductList />
                </Grid2>
                <Grid2 xs={12} sm={6}>
                  <ProductList />
                </Grid2>
                <Grid2 xs={12} sm={6}>
                  <ProductList />
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
