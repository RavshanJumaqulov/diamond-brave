import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

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
          transition: "0.3s all !important",
          cursor: show ? "default" : "-webkit-zoom-in",
          cursor: show ? "default" : "zoom-in",
        }}
      >
        <Box
          sx={{
            background: show ? "rgba(0, 0, 0, 0.2)" : "none",
            display: show ? "block" : "none",
            width: "100%",
            height: "100vh",
            position: "absolute",
            zIndex: -1,
            transition: "0.3s all !important",
          }}
        ></Box>{" "}
        {show && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              zIndex: 1,
              top: 0,
              right: 0,
            }}
          >
            <Box
              onClick={() => setShow(false)}
              sx={{
                width: 50,
                height: 30,
                background: "rgba(0, 0, 0, 0.4)",
                transition: "0.3s all !important",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                cursor: "zoom-out",
                "&:hover": {
                  background: "red",
                  "& svg": {
                    transition: "0.3s all !important",
                    transform: "scale(1.05)",
                  },
                },
                "& svg": {
                  color: "#fff",
                },
              }}
            >
              <CloseIcon />
            </Box>
          </Box>
        )}
        <Box
          onClick={() => setShow(true)}
          component="img"
          src={props.img}
          sx={{
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
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
            transition: "0.3s all !important",
          }}
        />
        <Typography
          sx={{
            transition: "0.3s all !important",
            p: 1,
            fontFamily: "Public, sans-serif",
            fontSize: 18,
            fontWeight: 500,
            textAlign: "center",
            position: show ? "absolute" : "static",
            zIndex: 1,
            bottom: 0,
            width: show ? "100%" : "auto",
            background: show ? "rgba(0, 0, 0, 0.5)" : "none",
            color: show ? "#fff" : "text.primary",
          }}
        >
          {props.title}
        </Typography>
      </Box>
    </Grid2>
  );
}
