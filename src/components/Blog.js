import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BlogFirstItem from "./BlogFirstItem";
import { Masonry } from "@mui/lab";
import BlogItem from "./BlogItemMD";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BlogItemSM from "./BlogItemSM";
import BlogItemMD from "./BlogItemMD";
export default function Blog() {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
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
          // mb: { xs: 8, md: 10 },
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            textAlign: { xs: "center", md: "left" },
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
              xs: "center",
              md: "center",
            },
            justifyContent: { xs: "space-between", md: "space-between" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40, md: 44, lg: 48 },
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              color: "#011a41",
              my: 3,
            }}
          >
            So'nggi yangiliklar
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
      <Box
        sx={{
          display: "grid",
          gap: { xs: "24px", md: "32px" },
          minWidth: "100%",
        }}
      >
          <Grid2 container sx={{display: {xs: 'none', md: 'flex'}}}>
            <Grid2 xs={12} sm={6}>
              <BlogFirstItem />
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
                <BlogItemMD order={1} />
                <BlogItemMD order={2} />
                <BlogItemMD order={3} />
                <BlogItemMD order={4} />
              </Masonry>
            </Grid2>
          </Grid2>
          <Grid2 container sx={{display: {xs: 'flex', md: 'none'}}}>
            <BlogItemSM index={1} />
            <BlogItemSM index={2} />
            <BlogItemSM index={3} />
            <BlogItemSM index={4} />
          </Grid2>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            my: 3,
          }}
        >
          <Button
            variant="light"
            disableElevation
            endIcon={<KeyboardArrowRightIcon />}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            Barchasi
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
