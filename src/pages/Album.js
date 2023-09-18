import { Box, Button, Container, Fab, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Context from "../Context";
import { Masonry } from "@mui/lab";
import DownloadIcon from "@mui/icons-material/Download";
export default function Album() {
  const { lan, width } = useContext(Context);

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
        <Masonry columns={{ xs: 2, md: 3 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/flat-lay-natural-medicinal-spices-herbs_23-2148776507.jpg?size=626&ext=jpg&uid=R33141185&ga=GA1.2.1704063591.1694238238&semt=ais"
              sx={{ width: "100%" }}
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
        </Masonry>
      </Box>
    </Container>
  );
}
