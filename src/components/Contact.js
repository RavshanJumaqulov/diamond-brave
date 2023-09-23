import React, { useContext } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Context from "../Context";
import { useNavigate } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Fade, Slide } from "react-awesome-reveal";

export default function Contact() {
  const { lan } = useContext(Context);
  return (
    <Box sx={{ my: 8, width: "100%" }}>
      <Container maxWidth="xl">
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
            Contact
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
              {lan == "uz" ? "Aloqa" : lan == "en" ? "Contact us" : "Контакт"}
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
              ? "Siz bilan bog'lanishimiz uchun ma'lumotlaringizni qoldiring"
              : lan == "en"
              ? "Leave your information so we can contact you"
              : "Оставьте свои данные, чтобы мы могли связаться с вами"}
          </Typography>
        </Stack>
        <Grid2
          container
          spacing={2}
          sx={{ mt: 2, flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid2 xs={12} md={6}>
            <Slide direction="up">
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
            </Slide>
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
                  mt: { xs: 0, md: -20, lg: -25 },
                  maxWidth: { xs: "90%", sm: "80%" },
                }}
              />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
