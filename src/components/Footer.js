import React, { useContext } from "react";
import { Box, Container, Fab, Typography, createSvgIcon } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Context from "../Context";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from "react-router-dom";
const FacebookIcon = createSvgIcon(
  <svg height="1em" viewBox="0 0 320 512">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>,
  "FacebookIcon"
);

export default function Footer() {
  const { lan } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: 4,
        mt: 10,
        width: "100%",
        backdropFilter: "blur(20px)",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={6} md={3}>
            <Box
              component="img"
              src="/img/logo.png"
              sx={{ width: 100, objectFit: "contain", mb: 2 }}
            />

            <Typography
              color="text.secondary"
              sx={{
                mt: 1,
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Nunito, sans-serif",
                textAlign: "justify",
              }}
            >
              {lan == "uz"
                ? "Diamond Brave World Farm kompaniyasi o'zining yaqin ta'rixi davomida insonlarning dardlariga davo bo'luvchi mahsulotlarni yaratish va yetkazib berish bilan shu'illanib kelmoqda!"
                : lan == "en"
                ? "Diamond Brave World Farm has been creating and delivering products that cure human ailments throughout its recent history!"
                : "Diamond Brave World Farm на протяжении всей своей недавней истории создавала и поставляла продукты, которые лечат человеческие недуги!"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                mt: 2,
              }}
            >
              <Fab elevation="0" size="small" sx={{ boxShadow: "none" }}>
                <FacebookIcon
                  sx={{
                    fontSize: 24,
                    height: 24,
                    color: "#3bb77e",
                    fill: "#3bb77e",
                  }}
                />
              </Fab>
              <Fab elevation="0" size="small" sx={{ boxShadow: "none" }}>
                <InstagramIcon
                  sx={{ fontSize: 24, height: 24, color: "#3bb77e" }}
                />
              </Fab>
              <Fab elevation="0" size="small" sx={{ boxShadow: "none" }}>
                <YouTubeIcon
                  sx={{ fontSize: 24, height: 24, color: "#3bb77e" }}
                />
              </Fab>
            </Box>
            <Box
              sx={{
                mt: 2,
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              ©2023{" "}
              <Typography
                conponent="a"
                href="https://diamondbrave.uz"
                sx={{
                  display: "inline",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Diamond Brave
              </Typography>{" "}
              All rights reserved
            </Box>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <Typography
              sx={{
                mb: 2,
                fontSize: 17,
                fontWeight: 600,
                fontFamily: "Nunito, sans-serif",
              }}
              color="text.primary"
            >
              {lan == "uz" ? "Havolalar" : lan == "en" ? "Links" : "Ссылки"}
            </Typography>
            <Grid2 container sx={{ width: "100%" }}>
              <Grid2 xs={6} sx={{ width: "50%" }}>
                <Typography
                  onClick={() => navigate("/")}
                  sx={{
                    mb: 1,
                    fontSize: 16,
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 400,
                    cursor: "default",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#3bb77e",
                    },
                  }}
                  color="text.secondary"
                >
                  {lan == "uz"
                    ? "Bosh sahifa"
                    : lan == "en"
                    ? "Home"
                    : "Главный"}
                </Typography>
                <Typography
                  onClick={() => navigate("/products")}
                  sx={{
                    mb: 1,
                    fontSize: 16,
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 400,
                    cursor: "default",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#3bb77e",
                    },
                  }}
                  color="text.secondary"
                >
                  {lan == "uz"
                    ? "Mahsulotlar"
                    : lan == "en"
                    ? "Products"
                    : "Продукты"}
                </Typography>
                <Typography
                  onClick={() => navigate("/news")}
                  sx={{
                    mb: 1,
                    fontSize: 16,
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 400,
                    cursor: "default",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#3bb77e",
                    },
                  }}
                  color="text.secondary"
                >
                  {lan == "uz"
                    ? "Yangiliklar"
                    : lan == "en"
                    ? "News"
                    : "Новости"}
                </Typography>
                <Typography
                  onClick={() => navigate("/about")}
                  sx={{
                    mb: 1,
                    fontSize: 16,
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 400,
                    cursor: "default",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#3bb77e",
                    },
                  }}
                  color="text.secondary"
                >
                  {lan == "uz"
                    ? "Biz haqimizda"
                    : lan == "en"
                    ? "About us"
                    : "О нас"}
                </Typography>
              </Grid2>
              <Grid2 xs={6}>
                <Typography
                  onClick={() => navigate("/album")}
                  sx={{
                    mb: 1,
                    fontSize: 16,
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 400,
                    cursor: "default",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#3bb77e",
                    },
                  }}
                  color="text.secondary"
                >
                  {lan == "uz"
                    ? "Fotogalareya"
                    : lan == "en"
                    ? "Photo gallery"
                    : "Фотогалерея"}
                </Typography>
                <Typography
                  onClick={() => navigate("/contact")}
                  sx={{
                    mb: 1,
                    fontSize: 16,
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 400,
                    cursor: "default",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#3bb77e",
                    },
                  }}
                  color="text.secondary"
                >
                  {lan == "uz"
                    ? "Aloqa"
                    : lan == "en"
                    ? "Contact us"
                    : "Контакт"}
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <Typography
              sx={{
                mb: 2,
                fontSize: 17,
                fontWeight: 600,
                fontFamily: "Nunito, sans-serif",
              }}
              color="text.primary"
            >
              {lan == "uz" ? "Aloqa" : lan == "en" ? "Contact us" : "Контакт"}
            </Typography>
            <Box
              sx={{
                mb: 1,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                whiteSpace: "wrap",
                float: "left",
              }}
            >
              <LocationOnIcon sx={{ mr: 1, color: "#3bb77e" }} />
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "Nunito,sans-serif",
                  fontWeight: "400",
                  color: "text.secondary",
                  cursor: "default",
                }}
              >
                {lan == "uz"
                  ? "Samarqand viloyati, Samarqand sh. Al Farobiy mahallasi, Ibn Xoldun ko'chasi, 1-uy"
                  : lan == "en"
                  ? "Samarkand region, Samarkand sh. Al Farabi quarter, Ibn Khaldoun street, 1 house"
                  : "Самаркандская область, Самаркандское ш. квартал Аль-Фараби, улица Ибн Халдуна, дом 1"}
              </Typography>
            </Box>
            <Box
              sx={{
                mb: 1,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                whiteSpace: "wrap",
                float: "left",
                "& a": {
                  fontSize: 16,
                  fontFamily: "Nunito,sans-serif",
                  fontWeight: "400",
                  color: "text.secondary",
                  textDecoration: "none",
                },
              }}
            >
              <PhoneIcon sx={{ mr: 1, color: "#3bb77e" }} />
              <a href="tel:+998973951945">+998 97 395 19 45</a>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                whiteSpace: "wrap",
                float: "left",
                "& a": {
                  fontSize: 16,
                  fontFamily: "Nunito,sans-serif",
                  fontWeight: "400",
                  color: "text.secondary",
                  textDecoration: "none",
                },
              }}
            >
              <EmailIcon sx={{ mr: 1, color: "#3bb77e" }} />
              <a href="mailto:shoxrux@mail.com">
                shoxrux@mail.com
              </a>
            </Box>
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <Typography
              sx={{
                mb: 2,
                fontSize: 17,
                fontWeight: 600,
                fontFamily: "Nunito, sans-serif",
              }}
              color="text.primary"
            >
              {lan == "uz"
                ? "Yo'nalish"
                : lan == "en"
                ? "Location"
                : "Направление"}
            </Typography>
            <Box style={{ position: "relative", overflow: "hidden" }}>
              <a
                href="https://yandex.uz/maps/10334/samarkand/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 0,
                }}
              >
                Samarqand
              </a>
              <a
                href="https://yandex.uz/maps/profile?l=pht&ll=66.902450%2C39.674180&utm_medium=mapframe&utm_source=maps&z=16"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 14,
                }}
              >
                Yandex Xarita
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/?l=pht&ll=66.902450%2C39.674180&mode=poi&poi%5Bpoint%5D=66.905725%2C39.678236&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D5541203078&z=16"
                width="100%"
                height="200px"
                style={{
                  position: "relative",
                  border: "none",
                  borderRadius: 12,
                  boxShadow:
                    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
