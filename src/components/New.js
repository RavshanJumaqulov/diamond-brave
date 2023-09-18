import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useRef, useState } from "react";
import NewsIdLatestNews from "../components/NewsIdLatestNews";
import Context from "../Context";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { updateViews } from "../api";
import { UPDATE_VIEWS } from "../redux/action";

export default function New({ data }) {
  const dispatch = useDispatch()
  const { width, lan } = useContext(Context);
  const news = useSelector((state) => state.news);
  const relativeBoxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);

  useEffect(() => {
    if (relativeBoxRef.current !== null) {
      setBoxWidth(relativeBoxRef.current.clientWidth);
    }
  }, [width]);
  useEffect(() => {
    if (data.id !== undefined) {
      const res = async () => {
        const resData = await updateViews(data.id, data.views);
      };
      res();
      dispatch({type: UPDATE_VIEWS, payload: {id: data.id, view: data.views + 2}})
    }
  }, []);
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
                  ? `${data.views + 1} marta o'qildi`
                  : lan == "en"
                  ? `Read ${data.views + 1} times`
                  : `Прочтите ${data.views + 1} раз`}
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
                sx={{
                  width: "100%",
                  overflow: "hidden",
                  "& table": {
                    border: "1px solid rgba(0, 0, 0, 0.23) !important",
                    outline: "none",
                    borderCollapse: "collapse",
                    maxWidth: "100%",
                    borderRadius: 3,
                    "& td, & th": {
                      border: "1px solid #dddddd3f",
                      p: 1,
                      cursor: "default",
                    },
                    "& th": {
                      background: "rgba(0, 0, 0, 0.23)",
                      color: "#011a41",
                      cursor: "default",
                    },
                    "& tr": {
                      "&:nth-of-type(even)": {
                        background: "#dddddd3f",
                        transition: "0.3s all",
                        cursor: "default",
                      },
                      "&:hover": {
                        background: "#dddddd3f",
                        cursor: "default",
                      },
                    },
                  },
                  "& img": {
                    borderRadius: 3,
                    maxWidth: "100% !important",
                  },
                }}
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
                  {news.slice(0, 10).map((el, index) => {
                    return (
                      <Grid2 xs={12} sm={6} md={12} key={index}>
                        <NewsIdLatestNews
                          id={el.id}
                          img={el.img}
                          title={el[`title_${lan}`]}
                          date={moment(el.created_at).fromNow()}
                          views={
                            lan == "uz"
                              ? `${data.views} marta o'qildi`
                              : lan == "en"
                              ? `Read ${data.views} times`
                              : `Прочтите ${data.views} раз`
                          }
                        />
                      </Grid2>
                    );
                  })}
                </Grid2>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}
