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
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Album() {
  const navigate = useNavigate();
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
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: 5,
            maxHeight: 800,
            overflow: "hidden",
          }}
        >
          <Stack
            direction="column"
            sx={{
              justifyContent: "space-between",
              // mb: { xs: 8, md: 10 },
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "Nunito, sans-serif",
                textAlign: "left",
              }}
              color="text.secondary"
            >
              Album
            </Typography>
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
                  mt: 2,
                }}
              >
                {lan == "uz"
                  ? "Fotogalareya"
                  : lan == "en"
                  ? "Photo gallery"
                  : "Фотогалерея"}
              </Typography>
              <Button
                onClick={() => navigate(`/album`)}
                variant="light"
                disableElevation
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  my: { xs: 3, md: 0 },
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Nunito, sans-serif",
                  textTransform: "capitalize",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                {lan == "uz"
                  ? "Barchasi"
                  : lan == "en"
                  ? "All photos"
                  : "Все фотографии"}
              </Button>
            </Stack>
          </Stack>

          {photoGalaryLoading.status ? (
            <Masonry columns={{ xs: 2, md: 3, lg: 4 }}>
              {photoGallary['page_1'].map((el) => {
                return <AlbumItem key={el.id} img={el.flayer} />;
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
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => navigate(`/album`)}
            variant="light"
            disableElevation
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              my: { xs: 3, md: 0 },
              display: { xs: "flex", md: "none" },
              fontFamily: "Nunito, sans-serif",
              textTransform: "capitalize",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {lan == "uz"
              ? "Barchasi"
              : lan == "en"
              ? "All photos"
              : "Все фотографии"}
          </Button> 
        </Box>
      </Container>
    </Box>
  );
}
