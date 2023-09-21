import React, { useContext } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Context from "../Context";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const { lan } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Box sx={{ my: 8, width: "100%" }}>
      <Container maxWidth="xl">
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
              {lan == "uz"
                ? "Aloqa"
                : lan == "en"
                ? "Contact us"
                : "Контакт"}
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
      </Container>
    </Box>
  );
}
