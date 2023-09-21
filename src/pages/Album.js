import {
  Box,
  Button,
  CircularProgress,
  Container,
  Fab,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";
import { Masonry } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AlbumItem from "../components/AlbumItem";
import { getPhotoGalary } from "../api";
import { GET_PHOTO_GALLARY_NEXT_PAGE } from "../redux/action";

export default function Album() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lan, width, photoGalaryLoading, scroll } = useContext(Context);
  const photoGallary = useSelector((state) => state.photoGallary);
  const photoGallaryLength = useSelector((state) => state.photoGallaryLength);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState({
    page: 2,
    status: photoGallaryLength > 21 ? true : false,
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [useNavigate()]);

  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    navigate(`/album/page_${value}`);
  };

  useEffect(() => {
    if (Object.keys(params).length > 0) {
      if (photoGallary[params.page] == undefined) {
        const res = async () => {
          setLoading(true);
          const data = await getPhotoGalary(+params.page.replace(/\D/gi, ""));
          console.log(data);
          if (data.status == 200 && data.data.results.length > 0) {
            dispatch({
              type: GET_PHOTO_GALLARY_NEXT_PAGE,
              payload: {
                page: +params.page.replace(/\D/gi, ""),
                value: data.data.results,
              },
            });
          }
          setLoading(false);
        };
        res();
      }
    }
  }, [params.page]);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        component={"img"}
        src={width < 900 ? "/topxs.jpg" : "/top.jpg"}
        sx={{ width: "100%", minHeight: 200, objectFit: "cover" }}
      />
      <Container maxWidth="xl">
        <Box sx={{ mt: 5 }}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              alignItems: {
                xs: "start",
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
                mb: 3,
              }}
            >
              {lan == "uz"
                ? "Foto galareya"
                : lan == "en"
                ? "Photo gallery"
                : "Фотогалерея"}
            </Typography>
          </Stack>

          {photoGalaryLoading.status ? (
            <Masonry columns={{ xs: 2, md: 3, lg: 4 }}>
              {Object.keys(params).length == 0
                ? photoGallary["page_1"].map((el) => {
                    return (
                      <AlbumItem
                        key={el.id}
                        img={el.flayer}
                        title={el[`title_${lan}`]}
                      />
                    );
                  })
                : photoGallary[params.page] !== undefined &&
                  photoGallary[params.page].map((el) => {
                    return (
                      <AlbumItem
                        key={el.id}
                        img={el.flayer}
                        title={el[`title_${lan}`]}
                      />
                    );
                  })}
            </Masonry>
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={Math.ceil(photoGallaryLength / 21)}
            page={
              Object.keys(params).length == 0
                ? 1
                : +params.page.replace(/\D/gi, "")
            }
            onChange={handleChange}
            shape="rounded"
          />
        </Box>
      </Container>
    </Box>
  );
}
