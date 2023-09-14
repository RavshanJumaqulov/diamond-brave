import { Box, Button, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default function About() {
  const navigate = useNavigate();
  const { lan } = useContext(Context);
  return (
    <Box sx={{ my: 8, width: "100%" }}>
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
          About us
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
            {lan == "uz" ? "Bizning kompaniya" : lan == "en" ? "Our company" : "Наша компания"}
          </Typography>
          <Button
            onClick={() => navigate(`/about`)}
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
            {lan == "uz" ? "Ko'proq" : lan == "en" ? "Read" : "далее"}
          </Button>
        </Stack>
      </Stack>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={6} lg={6}>
          {lan == "uz" ? (
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                fontFamily: "Nunito, sans-serif",
                fontWeight: 500,
                color: "#011a41",
                textIndent: 30,
              }}
            >
              <b>DIAMOND BRAVE WORLD PHARM</b> kompaniyasiga 2022 - yil
              G'ayratov Qo'rg'on Qo'chqorovich hamda turmush o'rtog'i Muxtorova
              Shaxnoza Baxronovna tomonidan asos solingan.
            </Typography>
          ) : lan == "en" ? (
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                fontFamily: "Nunito, sans-serif",
                fontWeight: 500,
                color: "#011a41",
                textIndent: 30,
              }}
            >
              <b>DIAMOND BRAVE WORLD PHARM</b> company was founded in 2022 by
              Gairatov Korgon Kochkarovich and his wife Mukhtorova Shakhnoza
              Bakhronovna.
            </Typography>
          ) : (
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                fontFamily: "Nunito, sans-serif",
                fontWeight: 500,
                color: "#011a41",
                textIndent: 30,
              }}
            >
              Компания <b>DIAMOND BRAVE WORLD PHARM</b> основана в 2022 году
              Гайратовым Коргоном Кочкаровичем и его женой Мухторовой Шахнозой
              Бахроновной.
            </Typography>
          )}
          {lan == "uz" ? (
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                fontFamily: "Nunito, sans-serif",
                fontWeight: 500,
                color: "#011a41",
                textIndent: 30,
              }}
            >
              O'zbekiston Respublikasida keyingi yillardagi dorivor
              o'simliklarni yetishtirish va qayta ishlab chiqarish sohasidagi
              faol islohotlar hamda keng imkoniyatlar sababli kompaniya
              farmaseftika bozoriga faol kirib bormoqda!
            </Typography>
          ) : lan == "en" ? (
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                fontFamily: "Nunito, sans-serif",
                fontWeight: 500,
                color: "#011a41",
                textIndent: 30,
              }}
            >
              Medicinal plants of the following years in the Republic of
              Uzbekistan active reforms in the field of production and
              reproduction and due to wide opportunities, the company is active
              in the pharmaceutical market coming in!
            </Typography>
          ) : (
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                fontFamily: "Nunito, sans-serif",
                fontWeight: 500,
                color: "#011a41",
                textIndent: 30,
              }}
            >
              Лекарственные растения последующих лет в Республике Узбекистан
              активные реформы в сфере производства и воспроизводства и
              благодаря широким возможностям компания активно работает на
              фармацевтическом рынке в ближайшие!
            </Typography>
          )}
          {lan == "uz" ? (
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                fontFamily: "Nunito, sans-serif",
                fontWeight: 500,
                color: "#011a41",
                textIndent: 30,
              }}
            >
              O'zbekiston Respublikasida keyingi yillardagi dorivor
              o'simliklarni yetishtirish va qayta ishlab chiqarish sohasidagi
              faol islohotlar hamda keng imkoniyatlar sababli kompaniya
              farmaseftika bozoriga faol kirib bormoqda!
            </Typography>
          ) : lan == "en" ? (
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                fontFamily: "Nunito, sans-serif",
                fontWeight: 500,
                color: "#011a41",
                textIndent: 30,
              }}
            >
              Medicinal plants of the following years in the Republic of
              Uzbekistan active reforms in the field of production and
              reproduction and due to wide opportunities, the company is active
              in the pharmaceutical market coming in!
            </Typography>
          ) : (
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                fontFamily: "Nunito, sans-serif",
                fontWeight: 500,
                color: "#011a41",
                textIndent: 30,
              }}
            >
              Лекарственные растения последующих лет в Республике Узбекистан
              активные реформы в сфере производства и воспроизводства и
              благодаря широким возможностям компания активно работает на
              фармацевтическом рынке в ближайшие!
            </Typography>
          )}
        </Grid2>
        <Grid2 xs={12} md={6} lg={6}>
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <Box
              component="img"
              src="/img/about1.jpg"
              sx={{
                position: "absolute",
                top: -50,
                left: 0,
                width: "60%",
                maxHeight: "100%",
                borderRadius: 3,
                objectFit: "cover",
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              }}
            />
            <Box
              component="img"
              src="/img/about2.jpg"
              sx={{
                position: "absolute",
                bottom: -50,
                right: 0,
                zIndex: 1,
                width: "50%",
                maxHeight: "100%",
                borderRadius: 3,
                objectFit: "cover",
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              }}
            />
          </Box>
        </Grid2>
      </Grid2>
      {/* <Grid2 container spacing={2}>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              borderRadius: 3,
              boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            }}
          >
            <Box
              component="img"
              src="/img/maqsad.jpg"
              sx={{ width: "100%", minHeight: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid2>
      </Grid2> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => navigate(`/about`)}
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
          {lan == "uz" ? "Ko'proq" : lan == "en" ? "Read" : "далее"}
        </Button>
      </Box>
    </Box>
  );
}
