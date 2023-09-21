import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import TopNewsItem from "./TopNewsItem";
import { Stack, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useSelector } from "react-redux";
import moment from "moment";
import Context from "../Context";
import { useNavigate, useParams } from "react-router-dom";

export default function TopNews({ items }) {
  const params = useParams();
  const navigate = useNavigate();
  const { lan } = useContext(Context);
  const navigatsiya = () => {
    if (Object.keys(params).length == 0)
      navigate(`/news/page_1/${items[0].id}`);
    else {
      navigate(`/news/${params.page}/${items[0].id}`);
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
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
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "space-between" },
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
            {lan == "uz"
              ? "So'nggi yangiliklar"
              : lan == "en"
              ? "Latest news"
              : "Последние новости"}
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            textAlign: "left",
          }}
          color="text.secondary"
        >
          {lan == "uz"
            ? `DIAMOND BRAVE WORLD PHARM kompaniyasida sodir bo'lib kelayotgan
            so'nggi yangiliklar.`
            : lan == "en"
            ? `What is happening at DIAMOND BRAVE WORLD PHARM
            latest news.`
            : `Что происходит в DIAMOND BRAVE WORLD PHARM
            последние новости.`}
        </Typography>
      </Stack>
      <Grid2 container spacing={2}>
        <Grid2
          xs={12}
          md={6}
          lg={7}
          sx={{
            mb: { xs: 2, md: 0 },
            minHeight: { xs: "300px", sm: 400, md: "100%" },
          }}
        >
          <Box
            onClick={navigatsiya}
            sx={{
              display: "block",
              overflow: "hidden",
              background: `url(${items[0].img})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: 3,
              minHeight: "100%",
              position: "relative",
              "&::before": {
                content: "''",
                position: "absolute",
                height: "50%",
                width: "100%",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundImage:
                  "-webkit-gradient(linear, left top, left bottom, from(transparent), to(black))",
                backgroundImage: "linear-gradient(180deg, transparent, black)",
                zIndex: 1,
              },
              "&:hover": {
                "& .MuiTypography-root": {
                  backgroundSize: "100% 3%",
                },
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                position: "absolute",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                p: { xs: 1, sm: 6 },
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mt: { sm: 2, md: 1, lg: 2 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    fontWeight: "400",
                    color: "#fff",
                    fontFamily: "Nunito, sans-serif",
                    cursor: "defalut",
                  }}
                >
                  {moment(items[0].created_at).fromNow()}
                </Typography>
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: 4,
                    height: 4,
                    background: "#fff   ",
                    mx: 1,
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    fontWeight: "400",
                    color: "#fff",
                    fontFamily: "Nunito, sans-serif",
                    cursor: "defalut",
                    textTransform: "lowercase",
                  }}
                >
                  {lan == "uz"
                    ? `${items[0].views} marta o'qildi`
                    : lan == "en"
                    ? `read ${items[0].views} times`
                    : `Прочтите ${items[0].views} раз`}
                </Typography>
              </Box>
              <Typography
                component="span"
                sx={{
                  display: "inline !important",
                  whiteSpace: "pre-wrap",
                  mt: 1,
                  fontSize: { xs: 20, sm: 24, md: 32, lg: 32 },
                  fontWeight: 400,
                  fontFamily: "Nunito, sans-serif",
                  color: "#fff",
                  maxWidth: 600,
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
                  backgroundSize: "100px 3%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left 100%",
                  WebkitTransitionDuration: "0.5s",
                  transitionDuration: "0.5s",
                  cursor: "pointer",
                  wordWrap: "break-word",
                  "&:hover": {
                    backgroundSize: "100% 3%",
                  },
                }}
              >
                {items[0][`title_${lan}`]}
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} lg={5}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {items.slice(1, 5).map((el, index) => {
              return (
                <TopNewsItem
                  id={el.id}
                  key={index}
                  item={el}
                  img={el.img}
                  title={el[`title_${lan}`]}
                  date={moment(el.created_at).fromNow()}
                  views={el.views}
                />
              );
            })}
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} lg={5} sx={{ px: 1 }}></Grid2>
      </Grid2>
    </Box>
  );
}
