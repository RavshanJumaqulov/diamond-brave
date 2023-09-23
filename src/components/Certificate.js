import React, { useContext } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CertificateItem from "./CertificateItem";
import Context from "../Context";
export default function Certificate() {
  const { lan } = useContext(Context);
  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
      }}
    >
      <Stack
        direction="column"
        sx={{
          justifyContent: "space-between",
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
          Certificate
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
              ? "Bizning sertefikatlarimiz"
              : lan == "en"
              ? "Our certificates"
              : "Наши сертификаты"}
          </Typography>
          {/* <Button
            variant="light"
            disableElevation
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              display: "none",
              display: { xs: "none", md: "flex" },
              fontFamily: "Nunito, sans-serif",
              textTransform: "capitalize",
              fontSize: 16,
            }}
          >
            {lan == "uz"
              ? "Barchasi"
              : lan == "en"
              ? "Our certificates"
              : "Наши сертификаты"}
          </Button> */}
        </Stack>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <Grid2 container>
          <CertificateItem
            title={
              lan == "uz"
                ? "O'zbekiston Respublikasi Sog'liqni saqlash vazirligi ruxsatnomasi"
                : lan == "en"
                ? "Permit of the Ministry of Health of the Republic of Uzbekistan"
                : "Разрешение Министерства здравоохранения Республики Узбекистан"
            }
            img="/certificates/certificate_1.jpg"
            file="/certificates/certificate_1.pdf"
            index={1}
          />
          <CertificateItem
            title={
              lan == "uz"
                ? "Sanitariya-Epidemiologiya xulosasi"
                : lan == "en"
                ? "Sanitary and Epidemiological Conclusion"
                : "Санитарно-Эпидемиологическое заключение"
            }
            img="/certificates/certificate_2.jpg"
            file="/certificates/certificate_2.pdf"
            index={2}
          />
          <CertificateItem
            title={lan=="uz" ? "Yuridik shaxsning davlat ro'yxatidan o'tkazilganlik to'g'risidagi guvohnoma" : lan=="en" ? "Certificate of state registration of legal entity" : "Свидетельство о государственной регистрации юридического лица"}
            img="/certificates/certificate_3.jpg"
            file="/certificates/certificate_3.pdf"
            index={3}
          />
          <CertificateItem
            title={
              lan == "uz" ?
              "Muvofiqlik sertifikati" : lan =="en" ? "Certificate of conformity" : "Сертификат соответствия"
            }
            img="/certificates/certificate_4.jpg"
            file="/certificates/certificate_4.pdf"
            index={4}
          />
        </Grid2>
      </Box>
    </Box>
  );
}
