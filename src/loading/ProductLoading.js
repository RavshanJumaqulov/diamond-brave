import { Box, Container, Skeleton, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";

export default function ProductLoading() {
  const { width } = useContext(Context);
  const [panelWidth, setPanelWidth] = useState(0);
  const panelRef = useRef(null);
  useEffect(() => {
    if (panelRef.current !== null) {
      setPanelWidth(panelRef.current.clientWidth);
    }
  }, [width]);
  return (
    <Box sx={{ width: "100%", mt: { xs: 8, md: 10 } }}>
      <Container maxWidth="xl">
        <Grid2 container sx={{ width: "100%" }}>
          <Grid2 xs={12} lg={9}>
            <Box sx={{ width: "100%" }}>
              <Grid2
                container
                spacing={{ xs: 0, sm: 4 }}
                sx={{ width: "100%" }}
              >
                <Grid2 xs={12} sm={4} md={6} sx={{ y: 1 }}>
                  <Skeleton
                    ref={panelRef}
                    variant="rounded"
                    sx={{ width: "100%", height: panelWidth, borderRadius: 3 }}
                  />
                </Grid2>
                <Grid2
                  xs={12}
                  sm={8}
                  md={6}
                  sx={{
                    py: 1,
                    display: "flex",
                    flexDirection: { xs: "column-reverse", sm: "column" },
                  }}
                >
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: { xs: 26, sm: 32 }, maxWidth: 250 }}
                  />
                  <Skeleton variant="text" sx={{ fontSize: 18, mt: 2 }} />
                  <Stack direction="row" sx={{ mt: 2 }}>
                    <Skeleton
                      variant="rounded"
                      sx={{ width: 88, height: 88, borderRadius: 3, mr: 1 }}
                    />
                    <Skeleton
                      variant="rounded"
                      sx={{ width: 88, height: 88, borderRadius: 3, mr: 1 }}
                    />
                    <Skeleton
                      variant="rounded"
                      sx={{ width: 88, height: 88, borderRadius: 3 }}
                    />
                  </Stack>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={1} sx={{ mt: 2 }}>
          <Grid2 xs={6}>
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: 40, borderRadius: 3 }}
            />{" "}
          </Grid2>
          <Grid2 xs={6}>
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: 40, borderRadius: 3 }}
            />{" "}
          </Grid2>
        </Grid2>
        <Skeleton variant="text" sx={{ fontSize: 18, mt: 2 }} />
        <Skeleton variant="text" sx={{ fontSize: 18 }} />
        <Skeleton variant="text" sx={{ fontSize: 18 }} />
        <Skeleton variant="text" sx={{ fontSize: 18, width: '30%' }} />
      </Container>
    </Box>
  );
}
