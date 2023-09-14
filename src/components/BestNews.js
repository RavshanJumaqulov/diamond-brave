import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import BestNewsContainer from "./BestNewsContainer";
import Context from "../Context";

export default function BestNews() {
  
  const { lan } = useContext(Context);

  return (
    <Box
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        direction="column"
        sx={{
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            alignItems: {
              xs: "center",
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
              mb: 1,
            }}
          >
            {lan == "uz"
              ? "Ko'p o'qilgan yangiliklar"
              : lan == "en"
              ? "Most read news"
              : "Самые читаемые новости"}
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            textAlign: { xs: "center", md: "left" },
          }}
          color="text.secondary"
        >
          {lan == "uz"
            ? `DIAMOND BRAVE WORLD PHARM kompaniyasining arxiviga muhrlangan
              lahzalari.`
            : lan == "en"
            ? `Sealed in the archives of DIAMOND BRAVE WORLD PHARM
              moments.`
            : `Запечатано в архиве DIAMOND BRAVE WORLD PHARM.
              моменты.`}
        </Typography>
      </Stack>
      <BestNewsContainer />
    </Box>
  );
}
