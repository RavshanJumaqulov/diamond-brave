import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";

export default function CertificateItem(props) {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  window.addEventListener("resize", () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  });

  return (
    <Grid2 xs={12} sm={6} md={3} sx={{ p: 1 }}>
      <Box
        sx={{
          position: show ? "fixed" : "static",
          width: show ? "100%" : "auto",
          height: show ? "100vh" : "auto",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000000,
          transition: "0.3s all",
        }}
      >
        <Box
          onClick={() => setShow(false)}
          sx={{
            background: show ? "rgba(0, 0, 0, 0.2)" : "none",
            display: show ? "block" : "none",
            width: "100%",
            height: "100vh",
            position: "absolute",
            zIndex: -1,
            transition: "0.3s all",
          }}
        ></Box>{" "}
        {
          show && <Box sx={{position: 'absolute', zIndex: 1, top: 0, right: 0, width: 40, height: 40, background: 'red',}} ></Box>
        }
        <Box
          onClick={() => setShow(true)}
          component="img"
          src={props.img}
          sx={{
            width: show
              ? windowHeight / windowWidth < 16 / 9
                ? "auto"
                : "100%"
              : "100%",
            height: show
              ? windowHeight / windowWidth < 16 / 9
                ? "95vh"
                : "auto"
              : "auto",
            transition: "0.3s all",
          }}
        />
        <Typography
          sx={{
            transition: "0.3s all",
            p: 1,
            fontFamily: "Public, sans-serif",
            fontSize: 18,
            fontWeight: 500,
            textAlign: "center",
            position: show ? 'absolute' : 'static',
            zIndex: 1, 
            bottom: 0,
            width: show ? '100%' : 'auto',
            background: show ? 'rgba(0, 0, 0, 0.5)' : 'none',
            color: show ? '#fff' : 'text.primary',
          }}
        >
          Lorem, ipsum dolor.
        </Typography>
      </Box>
    </Grid2>
  );
}
