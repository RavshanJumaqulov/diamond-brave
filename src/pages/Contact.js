import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import Context from "../Context";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Contact() {
  const { lan, width } = useContext(Context);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        component={"img"}
        src={width < 900 ? "/topxs.jpg" : "/top.jpg"}
        sx={{ width: "100%", minHeight: 200, objectFit: "cover" }}
      />
      <Container maxWidth="xl">
        <Box sx={{ mt: 5 }}>
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
              {lan == "uz" ? "Kontakt" : lan == "en" ? "Contact us" : "Контакт"}
            </Typography>
          </Stack>
        </Box>
        <Grid2
          container
          spacing={2}
          sx={{ mt: 2, flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid2 xs={12} md={6}>
            <Box>
              <TextField
                label={
                  lan == "uz"
                    ? "Ismingiz"
                    : lan == "en"
                    ? "First name"
                    : "Ваше имя"
                }
                variant="outlined"
                sx={{
                  mt: 2,
                  display: "flex",
                  "& .MuiInputBase-root": { borderRadius: 3 },
                  "& .Mui-focused": {
                    color: "#3bb77e !important",
                    "& fieldset": {
                      borderColor: "#3bb77e !important",
                      borderWidth: 2,
                    },
                  },
                }}
              />
              <TextField
                label={
                  lan == "uz"
                    ? "Familiyangiz"
                    : lan == "en"
                    ? "Second name"
                    : "Ваша фамилия"
                }
                variant="outlined"
                sx={{
                  mt: 2,
                  display: "flex",
                  "& .MuiInputBase-root": { borderRadius: 3 },
                  "& .Mui-focused": {
                    color: "#3bb77e !important",
                    "& fieldset": {
                      borderColor: "#3bb77e !important",
                      borderWidth: 2,
                    },
                  },
                }}
              />

              <TextField
                label={
                  lan == "uz"
                    ? "Telefon raqamingiz"
                    : lan == "en"
                    ? "Your phone number"
                    : "Ваш номер телефона"
                }
                variant="outlined"
                sx={{
                  mt: 2,
                  display: "flex",
                  "& .MuiInputBase-root": { borderRadius: 3 },
                  "& .Mui-focused": {
                    color: "#3bb77e !important",
                    "& fieldset": {
                      borderColor: "#3bb77e !important",
                      borderWidth: 2,
                    },
                  },
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "center", md: "end" },
                }}
              >
                <Button
                  component="a"
                  target="_blank"
                  variant={"contained"}
                  disableElevation
                  sx={{
                    mt: 2,
                    background: "#3BB77E",
                    borderRadius: 3,
                    fontFamily: "Nunito, sans-serif",
                    textTransform: "capitalize",
                    fontSize: 16,
                    fontWeight: 700,
                    width: { xs: "90%", sm: "50%" },
                    "&:hover": {
                      background: "#00aa67",
                    },
                  }}
                >
                  {lan == "uz"
                    ? "Yuborish"
                    : lan == "en"
                    ? "Sending"
                    : "Отправка"}
                </Button>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component={"img"}
              src="/Contact.svg"
              sx={{
                mt: { xs: 0, md: -20, lg: -20 },
                maxWidth: { xs: "90%", sm: "80%", md: '90%' },
              }}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
