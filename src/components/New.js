import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useRef, useState } from "react";
import NewsIdLatestNews from "../components/NewsIdLatestNews";
import Context from "../Context";
import { useSelector } from "react-redux";
import moment from "moment";

export default function New({ data }) {
  const { width, lan } = useContext(Context);
  const relativeBoxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);

  useEffect(() => {
    if (relativeBoxRef.current !== null) {
      setBoxWidth(relativeBoxRef.current.clientWidth);
    }
  }, [width]);
  console.log(data);
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 10, width: "100%" }}>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} md={8}>
            <Typography
              sx={{
                display: "inline",
                whiteSpace: "pre-wrap",
                mt: 1,
                fontSize: { xs: 20, sm: 24, md: 32, lg: 32 },
                fontWeight: 700,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              {data[`title_${lan}`]}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mt: { sm: 2, md: 1, lg: 1 },
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  fontWeight: "400",
                  color: "text.secondary",
                  fontFamily: "Nunito, sans-serif",
                  cursor: "defalut",
                }}
              >
                {moment(data.created_at).fromNow()}
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
                  cursor: "defalut",
                }}
              >
                {lan == "uz"
                  ? `${data.views} marta o'qildi`
                  : lan == "en"
                  ? `Read ${data.views} times`
                  : `Прочтите ${data.views} раз`}
              </Typography>
            </Box>
            <Box sx={{}}>
              <Box
                component="img"
                src={data.img}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 3,
                  maxHeight: 600,
                  display: "block",
                  mx: "auto",
                  mb: 2,
                }}
              />
              <Box
                dangerouslySetInnerHTML={{ __html: data[`text_${lan}`] }}
              ></Box>
            </Box>
          </Grid2>
          <Grid2
            xs={12}
            md={4}
            ref={relativeBoxRef}
            sx={{
              position: { xs: "static", md: "relative" },
              overflow: "hidden",
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: boxWidth - 16,
                maxWidth: "100%",
                // position: { xs: "static", md: "fixed" },
              }}
            >
              <Stack
                direction="column"
                sx={{
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                    alignItems: {
                      xs: "center",
                      md: "center",
                    },
                    justifyContent: {
                      xs: "space-between",
                      md: "space-between",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
                      fontWeight: 700,
                      fontFamily: "Nunito, sans-serif",
                      color: "#011a41",
                      mb: 1,
                    }}
                  >
                    So'nggi yangiliklar
                  </Typography>
                </Stack>
              </Stack>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Grid2 container spacing={2} sx={{ width: "100%" }}>
                  <Grid2 xs={12} sm={6} md={12}>
                    <NewsIdLatestNews />
                  </Grid2>
                  <Grid2 xs={12} sm={6} md={12}>
                    <NewsIdLatestNews />
                  </Grid2>
                  <Grid2 xs={12} sm={6} md={12}>
                    <NewsIdLatestNews />
                  </Grid2>
                  <Grid2 xs={12} sm={6} md={12}>
                    <NewsIdLatestNews />
                  </Grid2>
                  <Grid2 xs={12} sm={6} md={12}>
                    <NewsIdLatestNews />
                  </Grid2>
                  <Grid2 xs={12} sm={6} md={12}>
                    <NewsIdLatestNews />
                  </Grid2>
                  <Grid2 xs={12} sm={6} md={12}>
                    <NewsIdLatestNews />
                  </Grid2>
                  <Grid2 xs={12} sm={6} md={12}>
                    <NewsIdLatestNews />
                  </Grid2>
                </Grid2>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}
