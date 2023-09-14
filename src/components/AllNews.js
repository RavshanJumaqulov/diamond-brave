import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import TopNewsItem from "./TopNewsItem";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import moment from "moment";
import Context from "../Context";

export default function AllNews() {
  const news = useSelector((state) => state.news);
  const { lan } = useContext(Context);
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
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            alignItems: {
              xs: "center",
              md: "center",
            },
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
              ? "Barcha yangiliklar"
              : lan == "en"
              ? "All news"
              : "Все новости"}
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            textAlign: { xs: "center", md: "left" },
          }}
          color="text.secondary"
        >
          {lan == "uz"
            ? "DIAMOND BRAVE WORLD PHARM kompaniyasida sodir bo'lib kelayotgan yangiliklar bilan tanishing."
            : lan == "en"
            ? "Find out what's happening at DIAMOND BRAVE WORLD PHARM."
            : "Узнайте, что происходит в DIAMOND BRAVE WORLD PHARM."}
        </Typography>
      </Stack>
      <Grid2 container spacing={2}>
        {news.map((el, index) => {
          return (
            <Grid2 xs={12} md={6} key={index}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TopNewsItem
                  id={el.id}
                  item={el}
                  img={el.img}
                  title={el[`title_${lan}`]}
                  date={moment(el.created_at).fromNow()}
                  views={el.views}
                />
              </Box>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
