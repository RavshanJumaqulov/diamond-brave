import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CertificateItem from "./CertificateItem";

export default function Certificate() {
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
            textAlign: 'left',
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
              fontSize: { xs: 'calc(1.3125rem + 0.75vw)', lg: 30 },
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              color: "#011a41",
              mb: 3,
              mt: 2
            }}
          >
            Bizning sertefikatlarimiz
          </Typography>
          <Button
            variant="light"
            disableElevation
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "Nunito, sans-serif",
              textTransform: "capitalize",
              fontSize: 16,
            }}
          >
            Barchasi
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <Grid2 container>
          <CertificateItem img='/img/certificates/certificate_1.jpg' file='/img/certificates/certificate_1.pdf' />
          <CertificateItem img='/img/certificates/certificate_2.jpg' file='/img/certificates/certificate_1.pdf' />
          <CertificateItem img='/img/certificates/certificate_3.jpg' file='/img/certificates/certificate_1.pdf' />
          <CertificateItem img='/img/certificates/certificate_4.jpg' file='/img/certificates/certificate_1.pdf' />
        </Grid2>
      </Box>
    </Box>
  );
}
