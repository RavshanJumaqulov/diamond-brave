import { Box, Button, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function About() {
  return (
    <Box sx={{ my: 8, minHeight: "100vh", width: "100%" }}>
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
            textAlign: 'left',
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
              fontSize: { xs: 'calc(1.3125rem + 0.75vw)', lg: 30 },
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              color: "#011a41",
              mb: 3,
              mt: 2,
            }}
          >
            Bizning kompaniya
          </Typography>
          <Button
            variant="light"
            disableElevation
            endIcon={<KeyboardArrowRightIcon />}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Ko'proq
          </Button>
        </Stack>
      </Stack>
      <Grid2 container>
        <Grid2 xs={12} md={6} lg={5}>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            labore sequi! Nesciunt qui recusandae nobis, eum laboriosam mollitia
            aspernatur, debitis sint impedit totam, reprehenderit laudantium
            officia laborum vitae quaerat provident.
          </Typography>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            labore sequi! Nesciunt qui recusandae nobis.
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={6} lg={7}></Grid2>
      </Grid2>
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
          variant="light"
          disableElevation
          endIcon={<KeyboardArrowRightIcon />}
          sx={{ display: { xs: "flex", md: "none" }, my: 3 }}
        >
          Ko'proq
        </Button>
      </Box>
    </Box>
  );
}
