import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import React from "react";
import TopNewsItem from "./TopNewsItem";
import { Stack, Typography } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';

export default function TopNews() {
  return (
    <Box sx={{ width: "100%" }}>
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
             So'nggi yangiliklar
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
          DIAMOND BRAVE WORLD PHARM kompaniyasida sodir bo'lib kelayotgan
          so'nggi yangiliklar
        </Typography>
      </Stack>
      <Grid2 container>
        <Grid2
          xs={12}
          md={6}
          lg={7}
          sx={{
            px: 1,
            mb: { xs: 2, md: 0 },
            minHeight: { xs: "300px", sm: 400, md: "100%" },
          }}
        >
          <Box
            sx={{
              display: "block",
              overflow: "hidden",
              background:
                "url(https://blogzine.webestica.com/assets/images/blog/16by9/05.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: 3,
              minHeight: "100%",
              position: "relative",
              "&::before": {
                content: "''",
                position: "absolute",
                height: "50%",
                width: "100%",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundImage:
                  "-webkit-gradient(linear, left top, left bottom, from(transparent), to(black))",
                backgroundImage: "linear-gradient(180deg, transparent, black)",
                zIndex: 1,
              },
              "&:hover":{
                "& .MuiTypography-root": {
                    backgroundSize: "100% 3%",
                  },
              }
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                position: "absolute",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                p: { xs: 1, sm: 6 },
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mt: { sm: 2, md: 1, lg: 2 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    fontWeight: "400",
                    color: "#fff",
                    fontFamily: "Nunito, sans-serif",
                    cursor: 'defalut'
                  }}
                >
                  102 users read
                </Typography>
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: 4,
                    height: 4,
                    background: "#fff   ",
                    mx: 1,
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    fontWeight: "400",
                    color: "#fff",
                    fontFamily: "Nunito, sans-serif",
                    cursor: 'defalut'
                  }}
                >
                  1022 users read
                </Typography>
              </Box>
              <Typography
                component="span"
                sx={{
                  display: "inline !important",
                  whiteSpace: "pre-wrap",
                  mt: 1,
                  fontSize: { xs: 20, sm: 24, md: 32, lg: 32 },
                  fontWeight: 400,
                  fontFamily: "Nunito, sans-serif",
                  color: "#fff",
                  maxWidth: 600,
                  width: "auto",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  background:
                    "-webkit-gradient(linear, left top, right top, from(#3bb77e), to(#3bb77e))",
                  background:
                    "linear-gradient(to right, #3bb77e 0%, #3bb77e 100%)",
                  backgroundSize: "100px 3%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left 100%",
                  WebkitTransitionDuration: "0.5s",
                  transitionDuration: "0.5s",
                  cursor: "pointer",
                  wordWrap:'break-word',
                  "&:hover": {
                    backgroundSize: "100% 3%",
                  },
                }}
              >
                The pros and const of busines agency Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} lg={5} sx={{ px: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TopNewsItem />
            <TopNewsItem />
            <TopNewsItem />
            <TopNewsItem />
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} lg={5} sx={{ px: 1 }}>

        </Grid2>
      </Grid2>
    </Box>
  );
}
