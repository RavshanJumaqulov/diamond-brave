import { Box } from "@mui/material";
import React, { useState } from "react";
import Lottie from "lottie-react";
import bg from "../lottie/bg2.json";

export default function Background() {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)

  window.addEventListener('mousemove', (e)=>{
    setTop(e.clientY)
    setLeft(e.clientX)
  })
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
        background: {xs: "url(/background.jpg)", md: "#ffffff !important"},
        backdropFilter: "blur(20px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          background: "#ffffff3f",
          backdropFilter: "blur(80px)",
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          minWidth: "500px",
          minHeight: "500px",
          maxHeight: "500px",
          background: "#fb9a00",
          backdropFilter: "blur(200px)",
          filter: "blur(300px)",
          transform: "translateY(400px)",
          // animation: `animation1 15s infinite alternate`,
        }}
      ></Box>
      <Box
        sx={{
          minWidth: "300px",
          minHeight: "300px",
          maxHeight: "300px",
          background: "#3BB77E",
          backdropFilter: "blur(100px)",
          filter: "blur(300px)",
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          top: top - 100,
          left: left - 100,
          transition: '0.3s all',
          minWidth: "200px",
          minHeight: "200px",
          maxHeight: "300px",
          background: "#1bf5d8",
          backdropFilter: "blur(200px)",
          filter: "blur(200px)",
        }}
      ></Box>
    </Box>
  );
}
