import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BlogFirstItem from "./BlogFirstItem";
import { Masonry } from "@mui/lab";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BlogItemSM from "./BlogItemSM";
import BlogItemMD from "./BlogItemMD";
import Context from "../Context";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Blog() {
  const navigate = useNavigate();
  const { width, lan } = useContext(Context);
  const news = useSelector((state) => state.news);
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
          Blog
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
              ? "So'nggi yangiliklar"
              : lan == "en"
              ? "Latest news"
              : "Последние новости"}
          </Typography>
          <Button
            onClick={() => navigate("/news")}
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
            {lan == "uz"
              ? "Barchasi"
              : lan == "en"
              ? "All news"
              : "Все новости"}
          </Button>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "grid",
          gap: { xs: "16px", md: "32px" },
          minWidth: "100%",
        }}
      >
        {width > 900 ? (
          <Grid2 container>
            <Grid2 xs={12} sm={6}>
              <BlogFirstItem el={news[0]} />
            </Grid2>
            <Grid2 sm={12} md={6}>
              <Masonry
                columns={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexFlow: "column wrap",
                  alignContent: "flex-start",
                  boxSizing: "border-box",
                  mt: "-8px !important",
                }}
              >
                {news.slice(1, 5).map((el, index) => {
                  return <BlogItemMD order={index + 1} key={index} item={el} />;
                })}
              </Masonry>
            </Grid2>
          </Grid2>
        ) : (
          <Grid2 container>
            {news.slice(0, 4).map((el, index) => {
              return <BlogItemSM index={index + 1} key={index} item={el} />;
            })}
          </Grid2>
        )}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            my: 1,
          }}
        >
          <Button
            variant="light"
            disableElevation
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              display: { xs: "flex", md: "none" },
              fontFamily: "Nunito, sans-serif",
              textTransform: "capitalize",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {lan == "uz"
              ? "Barchasi"
              : lan == "en"
              ? "All news"
              : "Все новости"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
