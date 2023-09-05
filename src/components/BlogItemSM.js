import { Box, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export default function BlogItemSM({index}) {
  return (
    <Grid2 xs={12} sm={6}>
      <Box
        sx={{
          width: "100%",
          pl: {xs: 0, sm: index%2 == 0 ? 1.5 : 0},
          pr: {xs: 0, sm: index%2 == 0 ? 1.5 : 0},
          mb: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          component={"img"}
          src="https://zone-ui.vercel.app/assets/images/career/career_1.jpg"
          sx={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: 3,
            mr: 2,
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            sx={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: "600",
              fontSize: { xs: 17, sm: 18 },
              width: "auto",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              cursor: 'default',
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.dddddd
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              opacity: 0.72,
              alignItems: "center",
              fontSize: 12,
              fontFamily: "Nunito, sans-serif",
              fontWeight: "700",
              cursor: 'default',
            }}
          >
            25 Avg 2023
            <Box
              sx={{
                mx: 2,
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "currentColor",
              }}
            ></Box>
            21 user read
          </Stack>
        </Box>
      </Box>
    </Grid2>
  );
}
