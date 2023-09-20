import {
  Box,
  Button,
  CircularProgress,
  Container,
  Fab,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import Context from "../Context";
import { Masonry } from "@mui/lab";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AlbumItem from "../components/AlbumItem";

export default function Album() {
  const { lan, width, photoGalaryLoading } = useContext(Context);
  const photoGallary = useSelector((state) => state.photoGallary);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  }, [useNavigate()]);

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
              {photoGallary.map((el) => {
                return (
                  <AlbumItem key={el.id} img={el.flayer} />
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
      </Container>
    </Box>
  );
}
