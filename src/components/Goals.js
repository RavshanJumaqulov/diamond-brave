import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext } from "react";
import Slider from "react-slick";
import Context from "../Context";

export default function Goals() {
  const { lan } = useContext(Context);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  return (
    <Grid2
      container
      spacing={2}
      sx={{ flexDirection: { xs: "column", md: "row-reverse" } }}
    >
      <Grid2 xs={12} md={6} sx={{ alignSelf: "center" }}>
        <Slider {...settings}>
          <Box
            sx={{
              height: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
                fontWeight: 700,
                fontFamily: "Nunito, sans-serif",
                color: "#011a41",
              }}
            >
              {lan == "uz"
                ? "Bizning maqsadimiz"
                : lan == "en"
                ? "Our goal"
                : "Наша цель"}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                fontFamily: "Nunito, sans-serif",
                color: "#011a41",
              }}
            >
              {lan == "uz"
                ? "Dorivor o`simliklar xom ashyo bazasidan samarali foydalanish, qayta ishlashni qo`llab-quvvatlash orqali qo`shimcha qiymat zanjirini yaratish va davolashda ulardan keng foydalanishni tashkil etish."
                : lan == "en"
                ? "Эффективное использование сырьевой базы лекарственных растений, создание цепочки добавленной стоимости за счет поддержки переработки и организации их широкого использования в лечении."
                : "Effective use of raw material base of medicinal plants, creation of added value chain by supporting processing and organizing their wide use in treatment."}
            </Typography>
          </Box>
          <Box
            sx={{
              height: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
                fontWeight: 700,
                fontFamily: "Nunito, sans-serif",
                color: "#011a41",
              }}
            >
              {lan == "uz"
                ? "Bizning vazifamiz"
                : lan == "en"
                ? "Our mission"
                : "Наша миссия"}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                fontFamily: "Nunito, sans-serif",
                color: "#011a41",
              }}
            >
              {lan == "uz"
                ? "Insonlarni yanada sog'lomroq yashashlari uchun innovatsion bio-faol mahsulotlarini taklif qilish hamda mas'uliyat, tezlik, jamoaviy mehnat orqali mahsulotlarimizni hamyonbob narxlarda yetqazib berishdir."
                : lan == "en"
                ? "It is to offer innovative bio-active products for people to live healthier and to deliver our products at affordable prices through responsibility, speed and teamwork."
                : "Целью нашей компании является предложение инновационных биоактивных продуктов, позволяющих людям вести более здоровый образ жизни, и поставка нашей продукции по доступным ценам благодаря ответственности, скорости и командной работе."}
            </Typography>
          </Box>
        </Slider>
      </Grid2>
      <Grid2 xs={12} md={6} sx={{ alignSelf: "center" }}>
        <Slider {...settings} style={{ maxHeight: 400, minHeight: 400 }}>
          <Box
            sx={{
              width: "50%",
              borderRadius: 3,
              p: 1,
            }}
            >
            <Box
              component="img"
              src="/bizning_vaz.jpg"
              sx={{
                width: "100%",
                maxHeight: 400,
                objectFit: "cover",
                borderRadius: 3,
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "50%",
              borderRadius: 3,
              p:1
            }}
            >
            <Box
              component="img"
              src="/bizning_maq.jpg"
              sx={{
                width: "100%",
                maxHeight: 400,
                objectFit: "cover",
                borderRadius: 3,
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              }}
            />
          </Box>
        </Slider>
      </Grid2>
    </Grid2>
  );
}
