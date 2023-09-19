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
import DownloadIcon from "@mui/icons-material/Download";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    <Container maxWidth="xl">
      <Box sx={{ mt: 10 }}>
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
          <Masonry columns={{ xs: 2, md: 3 }}>
            {photoGallary.map((el) => {
              return (
                <Box sx={{ position: "relative" }} key={el.id}>
                  <Box
                    component="img"
                    src={el.flayer}
                    sx={{ width: "100%", borderRadius: 3 }}
                  />
                  <Fab
                    size="medium"
                    sx={{
                      borderRadius: 3,
                      boxShadow: "none",
                      position: "absolute",
                      right: 20,
                      bottom: 20,
                      background: "#fff",
                    }}
                  >
                    <DownloadIcon />
                  </Fab>
                </Box>
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
  );
}
