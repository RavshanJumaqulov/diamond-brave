import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NewsIdLoading from "../loading/NewsIdLoading";
import New from "../components/New";
import { getNewsWithId } from "../api";
import { GET_NEW_WITH_ID } from "../redux/action";

export default function NewsId() {
  const params = useParams();
  const dispatch = useDispatch();
  const { lan } = useContext(Context);
  const news = useSelector((state) => state.news);
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
  useEffect(() => {
    const res = async () => {
      const data = await getNewsWithId(params.new);
      if (Object.keys(data).includes("code")) {
        setLoading({
          status: true,
          error: true,
          message: data.message,
        });
      } else if (Object.keys(data.data).length > 0) {
        setLoading({
          status: true,
          error: false,
          message: "",
        });
        dispatch({
          type: GET_NEW_WITH_ID,
          payload: { page: params.page, value: data.data },
        });
      }
    };
    res();
  }, []);

  if (news[params.page] == undefined) {
    return <NewsIdLoading />;
  }else{
    console.log('lores')
    return <New data={news[params.page].find(el => el.id == +params.new)} />
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
