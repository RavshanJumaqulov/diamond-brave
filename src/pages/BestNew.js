import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NewsIdLoading from "../loading/NewsIdLoading";
import New from "../components/New";
import { getBestNewsWithId, getNewsWithId } from "../api";
import { GET_BEST_NEW_WITH_ID, GET_NEW_WITH_ID } from "../redux/action";
import BestNews from "../components/BestNews";
import BestNewWithId from "../components/BestNewWithId";

export default function BestNew() {
  const params = useParams();
  const dispatch = useDispatch();
  const { lan } = useContext(Context);
  const bestNews = useSelector((state) => state.bestNews);
  const [loading, setLoading] = useState({
    status: false,
    error: false,
    message: "",
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [useNavigate()]);

  if (bestNews.length == 0) {
    return <NewsIdLoading />;
  } else {
    return <BestNewWithId data={bestNews.find((el) => el.id == +params.new)} />;
  }

  // } else if (
  //   news[params.page].filter((el) => el.id == +params.new).length == 1
  // ) {
  //   return <New data={news[params.page].find((el) => el.id == +params.new)} />;
  // } else if (
  //   news[params.page].filter((el) => el.id == +params.new).length == 0
  //   ) {
  //     if (loading.status && !loading.error) {
  //     console.log('lorem')
  //     return (
  //       <New data={news[params.page].find((el) => el.id == +params.new)} />
  //     );
  //   } else if (loading.status && loading.error) {
  //     return (
  //       <Typography
  //         sx={{
  //           fontSize: 14,
  //           fontWeight: 700,
  //           fontFamily: "Nunito, sans-serif",
  //           textAlign: "left",
  //         }}
  //         color="error.main"
  //       >
  //         {loading.message + " "}
  //         {lan == "uz"
  //           ? "Serverda xatolik sodir bo'ldi!"
  //           : lan == "en"
  //           ? "A server error has occurred!"
  //           : "Произошла ошибка сервера!"}
  //       </Typography>
  //     );
  //   } else {
  //     return <NewsIdLoading />;
  //   }
}
