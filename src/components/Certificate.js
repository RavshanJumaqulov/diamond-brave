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
            title="O'zbekiston Respublikasi Sog'liqni saqlash vazirligi ruxsatnomasi"
            img="/certificates/certificate_1.jpg"
            file="/certificates/certificate_1.pdf"
          />
          <CertificateItem
            title="O'zbekiston Respublikasi Sog'liqni saqlash vazirligi ruxsatnomasi"
            img="/certificates/certificate_2.jpg"
            file="/certificates/certificate_2.pdf"
          />
          <CertificateItem
            title="O'zbekiston Respublikasi Sog'liqni saqlash vazirligi ruxsatnomasi"
            img="/certificates/certificate_3.jpg"
            file="/certificates/certificate_3.pdf"
          />
          <CertificateItem
            title="O'zbekiston Respublikasi Sog'liqni saqlash vazirligi ruxsatnomasi"
            img="/certificates/certificate_4.jpg"
            file="/certificates/certificate_4.pdf"
          />
        </Grid2>
      </Box>
    </Box>
  );
}
