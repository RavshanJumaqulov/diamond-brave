import { Box, Skeleton, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext } from "react";
import Context from "../Context";

export default function AllNewsLoading() {
  const { width } = useContext(Context);
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="column"
        sx={{
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Skeleton
          variant="text"
          sx={{
            fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 40 },
            fontWeight: 700,
            mb: 1,
            maxWidth: 400,
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: 16,
            fontWeight: 700,
            mb: 1,
            maxWidth: 700,
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            display: { md: "none" },
            fontSize: 16,
            fontWeight: 700,
            maxWidth: 300,
          }}
        />
      </Stack>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{
                width: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                minWidth: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                height: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                minHeight: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                borderRadius: 3,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 2,
                width: "100%",
              }}
            >
              <Skeleton
                variant="text"
                sx={{ width: "90%", mt: 1, fontSize: 20 }}
              />
              <Skeleton
                variant="text"
                sx={{ width: "50%", mt: 1, fontSize: 20 }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    mr: 2,
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{
                width: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                minWidth: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                height: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                minHeight: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                borderRadius: 3,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 2,
                width: "100%",
              }}
            >
              <Skeleton
                variant="text"
                sx={{ width: "90%", mt: 1, fontSize: 20 }}
              />
              <Skeleton
                variant="text"
                sx={{ width: "50%", mt: 1, fontSize: 20 }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    mr: 2,
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{
                width: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                minWidth: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                height: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                minHeight: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                borderRadius: 3,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 2,
                width: "100%",
              }}
            >
              <Skeleton
                variant="text"
                sx={{ width: "90%", mt: 1, fontSize: 20 }}
              />
              <Skeleton
                variant="text"
                sx={{ width: "50%", mt: 1, fontSize: 20 }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    mr: 2,
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{
                width: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                minWidth: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                height: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                minHeight: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                borderRadius: 3,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 2,
                width: "100%",
              }}
            >
              <Skeleton
                variant="text"
                sx={{ width: "90%", mt: 1, fontSize: 20 }}
              />
              <Skeleton
                variant="text"
                sx={{ width: "50%", mt: 1, fontSize: 20 }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    mr: 2,
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{
                width: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                minWidth: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                height: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                minHeight: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                borderRadius: 3,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 2,
                width: "100%",
              }}
            >
              <Skeleton
                variant="text"
                sx={{ width: "90%", mt: 1, fontSize: 20 }}
              />
              <Skeleton
                variant="text"
                sx={{ width: "50%", mt: 1, fontSize: 20 }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    mr: 2,
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{
                width: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                minWidth: {
                  xs: width > 450 ? 150 : 120,
                  sm: width < 750 ? 200 : 250,
                  md: 150,
                  lg: 200,
                },
                height: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                minHeight: {
                  xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                  sm: width < 750 ? (200 * 9) / 16 : (250 * 9) / 16,
                  md: (150 * 9) / 16,
                  lg: (200 * 9) / 16,
                },
                borderRadius: 3,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 2,
                width: "100%",
              }}
            >
              <Skeleton
                variant="text"
                sx={{ width: "90%", mt: 1, fontSize: 20 }}
              />
              <Skeleton
                variant="text"
                sx={{ width: "50%", mt: 1, fontSize: 20 }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                    mr: 2,
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    width: "30%",
                    mt: 1,
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 16 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
