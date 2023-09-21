import { Box, Container, Pagination, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import TopNews from "../components/TopNews";
import BestNews from "../components/BestNews";
import AllNews from "../components/AllNews";
import Context from "../Context";
import TopNewsLoading from "../loading/TopNewsLoading";
import BestNewsLoading from "../loading/BestNewsLoading";
import AllNewsLoading from "../loading/AllNewsLoading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getNews } from "../api";
import { GET_NEWS_NEXT_PAGE } from "../redux/action";

export default function News() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch()
  const { newsLoading, setNewsLoading } = useContext(Context);
  const news = useSelector((state) => state.news);
  const newsLength = useSelector((state) => state.newsLength);
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    navigate(`/news/page_${value}`);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [useNavigate()]);

  useEffect(() => {
    if (Object.keys(params).length > 0) {
      if (news[params.page] == undefined) {
        const res = async () => {
          const data = await getNews(+params.page.replace(/\D/gi, ""));
          if (data.status == 200 && data.data.results.length > 0) {
            dispatch({
              type: GET_NEWS_NEXT_PAGE,
              payload: {
                page: +params.page.replace(/\D/gi, ""),
                value: data.data.results,
              },
            });
          }
        };
        res();
      }
    }
  }, [params.page]);
console.log(news)
  return (
    <Box sx={{ width: "100%" }}>
      <Box component="img" src="/top.jpg" sx={{ width: "100%" }} />
      <Container maxWidth="xl">
        <Box sx={{ mt: 10, }}>
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
              Object.keys(params).length == 0 || params.page == "page_1" ?
              <TopNews items={news["page_1"].slice(0, 5)} /> : ""
            
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
              ""
              // <BestNews />
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
        {newsLength > 21 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              mt: 5
            }}
          >
            <Pagination
              count={Math.ceil(newsLength / 21)}
              page={
                Object.keys(params).length == 0
                  ? 1
                  : +params.page.replace(/\D/gi, "")
              }
              onChange={handleChange}
              shape="rounded"
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}
