import { Box, Container, Skeleton } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";

export default function NewsIdLoading() {
  const { width } = useContext(Context);
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  useEffect(() => {
    if (boxRef.current !== null) {
      setBoxWidth(boxRef.current.clientWidth);
    }
  }, [boxRef, width]);
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 10, width: "100%" }}>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} md={8}>
            <Skeleton
              variant="text"
              sx={{
                maxWidth: "90%",
                fontSize: { xs: 20, sm: 24, md: 32, lg: 32 },
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                maxWidth: "40%",
                fontSize: { xs: 20, sm: 24, md: 32, lg: 32 },
              }}
            />

            <Skeleton
              variant="text"
              sx={{
                mt: 2,
                width: 250,
                fontSize: 18,
              }}
            />
            <Skeleton
              variant="rounded"
              ref={boxRef}
              component={"div"}
              sx={{
                mt: 2,
                minWidth: "100%",
                height: (boxWidth * 9) / 16,
                borderRadius: 3,
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                mt: 2,
                width: "100%",
                fontSize: 18,
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                width: "100%",
                fontSize: 18,
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                width: "100%",
                fontSize: 18,
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                width: "30%",
                fontSize: 18,
              }}
            />
          </Grid2>
          <Grid2
            xs={12}
            md={4}
            sx={{
              position: { xs: "static", md: "relative" },
              overflow: "hidden",
              mb: 2,
            }}
          >
            <Skeleton
              variant="text"
              sx={{
                fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
                width: 300,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  width: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  minWidth: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  height: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  minHeight: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  borderRadius: 3,
                }}
              />
              <Box sx={{width: '100%'}}>
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '100%',
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '40%',
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  width: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  minWidth: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  height: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  minHeight: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  borderRadius: 3,
                }}
              />
              <Box sx={{width: '100%'}}>
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '100%',
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '40%',
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  width: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  minWidth: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  height: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  minHeight: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  borderRadius: 3,
                }}
              />
              <Box sx={{width: '100%'}}>
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '100%',
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '40%',
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  width: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  minWidth: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  height: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  minHeight: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  borderRadius: 3,
                }}
              />
              <Box sx={{width: '100%'}}>
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '100%',
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '40%',
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  width: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  minWidth: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  height: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  minHeight: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  borderRadius: 3,
                }}
              />
              <Box sx={{width: '100%'}}>
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '100%',
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '40%',
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  width: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  minWidth: {
                    xs: width > 450 ? 150 : 120,
                    sm: width < 750 ? 120 : 150,
                    md: 100,
                    lg: 150,
                  },
                  height: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  minHeight: {
                    xs: width > 450 ? (150 * 9) / 16 : (120 * 9) / 16,
                    sm: width < 750 ? (120 * 9) / 16 : (150 * 9) / 16,
                    md: (100 * 9) / 16,
                    lg: (150 * 9) / 16,
                  },
                  borderRadius: 3,
                }}
              />
              <Box sx={{width: '100%'}}>
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '100%',
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 20,
                    maxWidth: '40%',
                  }}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}
