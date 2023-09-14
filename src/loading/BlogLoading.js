import { Masonry } from "@mui/lab";
import { Box, Skeleton, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useRef, useState } from "react";

export default function BlogLoading() {
  const [sk, setSk] = useState(0);
  const skRef = useRef(null);
  useEffect(() => {
    if (skRef.current !== null) {
      setSk(skRef.current.clientWidth);
    }
  }, [skRef]);
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
        <Skeleton
          variant="text"
          sx={{
            fontSize: 16,
            fontWeight: 700,
            mb: 1,
            maxWidth: 70,
          }}
        />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Skeleton
            variant="text"
            sx={{
              fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 40 },
              mb: 1,
              width: "100%",
              maxWidth: 400,
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: 22,
              fontWeight: 700,
              minWidth: 90,
              mr: 2,
            }}
          />
        </Stack>
        <Grid2
          container
          spacing={2}
          sx={{ mt: 1, display: { xs: "none", md: "flex" } }}
        >
          <Grid2 xs={12} sm={6} sx={{ position: "relative" }}>
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: "100%", borderRadius: 3 }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                bottom: 0,
                left: 0,
                p: 5,
              }}
            >
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
              <Skeleton
                variant="text"
                sx={{
                  fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 40 },
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 40 },

                  maxWidth: 300,
                  mt: -2,
                  mb: 2,
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  fontSize: 18,

                  maxWidth: "100%",
                  mt: -1,
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  fontSize: 18,
                  maxWidth: "40%",
                  mt: -1,
                }}
              />
            </Box>
          </Grid2>
          <Grid2 xs={12} sm={6}>
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
              <Box>
                <Skeleton
                  ref={skRef}
                  variant="rounded"
                  sx={{ width: "100%", height: sk, borderRadius: 3 }}
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
                <Skeleton variant="text" sx={{ fontSize: 22, mt: 1 }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: 22, maxWidth: "60%" }}
                />
              </Box>
              <Box>
                <Skeleton
                  variant="rounded"
                  sx={{ width: "100%", height: (sk * 9) / 16, borderRadius: 3 }}
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
                <Skeleton variant="text" sx={{ fontSize: 22, mt: 1 }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: 22, maxWidth: "60%" }}
                />
              </Box>
              <Box>
                <Skeleton
                  variant="rounded"
                  sx={{ width: "100%", height: sk, borderRadius: 3 }}
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
                <Skeleton variant="text" sx={{ fontSize: 22, mt: 1 }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: 22, maxWidth: "60%" }}
                />
              </Box>
              <Box>
                <Skeleton
                  variant="rounded"
                  sx={{ width: "100%", height: (sk * 9) / 16, borderRadius: 3 }}
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
                <Skeleton variant="text" sx={{ fontSize: 22, mt: 1 }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: 22, maxWidth: "60%" }}
                />
              </Box>
            </Masonry>
          </Grid2>
        </Grid2>
      </Stack>
    </Box>
  );
}
