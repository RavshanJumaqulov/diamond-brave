import {
  Box,
  Container,
  Fab,
  Skeleton,
  Stack,
  Typography,
  createSvgIcon,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useRef, useState } from "react";
import NewsIdLatestNews from "../components/NewsIdLatestNews";
import Context from "../Context";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { updateViews } from "../api";
import { UPDATE_VIEWS } from "../redux/action";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useParams } from "react-router-dom";
const FacebookIcon = createSvgIcon(
  <svg height="1em" viewBox="0 0 320 512">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>,
  "FacebookIcon"
);

export default function New({ data }) {
  const params = useParams();
  const dispatch = useDispatch();
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
        if (typeof resData.data.views == "number") {
          dispatch({
            type: UPDATE_VIEWS,
            payload: { page: params.page, id: data.id, data: resData.data },
          });
        }
      };
      res();
    }
  }, [useParams()]);
  console.log(params);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        component={"img"}
        src={width < 900 ? "/topxs.jpg" : "/top.jpg"}
        sx={{ width: "100%", minHeight: 200, objectFit: "cover" }}
      />

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
                  color: "#011a41",
                  cursor: "default",
                }}
              >
                {data == undefined ? "" : data[`title_${lan}`]}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mt: { sm: 2, md: 1, lg: 1 },
                    mb: 3,
                  }}
                >
                  <CalendarMonthIcon sx={{ fontSize: 16, mr: 0.4 }} />
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                      fontWeight: "400",
                      color: "text.secondary",
                      fontFamily: "Nunito, sans-serif",
                      cursor: "defalut",
                    }}
                  >
                    {data == undefined ? "" : moment(data.created_at).fromNow()}
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
                  <RemoveRedEyeIcon sx={{ fontSize: 16, mr: 0.4 }} />
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
                      ? `${data == undefined ? "" : data.views} marta o'qildi`
                      : lan == "en"
                      ? `Read ${data == undefined ? "" : data.views} times`
                      : `Прочтите ${data == undefined ? "" : data.views} раз`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    flexDirection: "row",
                    alignItems: "center",
                    width: 150,
                  }}
                >
                  <Fab
                    component="a"
                    target="_blank"
                    href="tel:+998997565684"
                    elevation="0"
                    size="small"
                    sx={{ boxShadow: "none", background: "none" }}
                  >
                    <FacebookIcon
                      sx={{
                        fontSize: 24,
                        height: 24,
                        color: "#011a41",
                        fill: "#011a41",
                      }}
                    />
                  </Fab>
                  <Fab
                    component="a"
                    target="_blank"
                    elevation="0"
                    size="small"
                    sx={{ boxShadow: "none", background: "none" }}
                  >
                    <InstagramIcon
                      sx={{ fontSize: 24, height: 24, color: "#011a41" }}
                    />
                  </Fab>
                  <Fab
                    component="a"
                    target="_blank"
                    elevation="0"
                    size="small"
                    sx={{ boxShadow: "none", background: "none" }}
                  >
                    <YouTubeIcon
                      sx={{ fontSize: 24, height: 24, color: "#011a41" }}
                    />
                  </Fab>
                </Box>
              </Box>
              <Box sx={{}}>
                <Box
                  component="img"
                  src={data == undefined ? "" : data.img}
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
                    "& p": {
                      textAlign: "justify",
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: data == undefined ? "" : data[`text_${lan}`],
                  }}
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
                    {news["page_1"]
                      .filter((el) => el.id !== data.id)
                      .slice(0, 10)
                      .map((el, index) => {
                        return (
                          <Grid2 xs={12} sm={6} md={12} key={index}>
                            <NewsIdLatestNews
                              id={el.id}
                              img={el.img}
                              title={el[`title_${lan}`]}
                              date={moment(el.created_at).fromNow()}
                              views={
                                lan == "uz"
                                  ? `${el.views} marta o'qildi`
                                  : lan == "en"
                                  ? `Read ${el.views} times`
                                  : `Прочтите ${el.views} раз`
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
    </Box>
  );
}
