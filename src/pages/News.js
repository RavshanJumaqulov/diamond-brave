import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import TopNews from "../components/TopNews";
import BestNews from "../components/BestNews";
import AllNews from "../components/AllNews";
import Context from "../Context";
import TopNewsLoading from "../loading/TopNewsLoading";
import BestNewsLoading from "../loading/BestNewsLoading";
import AllNewsLoading from "../loading/AllNewsLoading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function News() {
  const { newsLoading, setNewsLoading } = useContext(Context);
  const news = useSelector((state) => state.news);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  }, [useNavigate()]);
  return (
    <Box sx={{ width: "100%" }}>
      <Box component="img" src="/top.jpg" sx={{ width: "100%" }} />
      <Container maxWidth="xl">
        <Box sx={{ mt: 10, minHeight: "calc(100vh - 80px)" }}>
          {newsLoading.status ? (
            newsLoading.error ? (
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "Nunito, sans-serif",
                  textAlign: "left",
                }}
                color="error.main"
              >
                {newsLoading.message}
              </Typography>
            ) : (
              <TopNews items={news.slice(0, 5)} />
            )
          ) : (
            <TopNewsLoading />
          )}
          {newsLoading.status ? (
            newsLoading.error ? (
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "Nunito, sans-serif",
                  textAlign: "left",
                }}
                color="error.main"
              >
                {newsLoading.message}
              </Typography>
            ) : (
              <BestNews />
            )
          ) : (
            <BestNewsLoading />
          )}

          {newsLoading.status ? (
            <AllNews />
          ) : newsLoading.error == true ? (
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "Nunito, sans-serif",
                textAlign: "left",
              }}
              color="error.main"
            >
              {newsLoading.message}
            </Typography>
          ) : (
            <AllNewsLoading />
          )}
        </Box>
      </Container>
    </Box>
  );
}
