import { Box, Fab } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

import Context from "../Context";

export default function AlbumItem({ title, img }) {
  const { width, height } = useContext(Context);
  const [imgWidth, setImgWidth] = useState();
  const [imgHeight, setImgHeight] = useState();
  const [full, setFull] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current !== null) {
      setImgHeight(imgRef.current.clientHeight);
      setImgWidth(imgRef.current.clientWidth);
    }
  }, [imgRef, width]);
  return (
    <Box
      sx={{
        position: full ? "static" : "relative",
        overflow: "hidden",
        "&:hover": {
          "& button": { transform: "translateY(0px)" },
          "& a": { transform: "translateY(0px)" },
        },
      }}
    >
      {full && (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            top: 0,
            left: 0,
            position: "fixed",
            zIndex: 10000,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            onClick={() => setFull(false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 50,
              height: 30,
              background: "rgba(0, 0, 0, 0.4)",
              transition: "0.3s all !important",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
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
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              top: 0,
              left: 0,
              position: "absolute",
              zIndex: 1,
              background: "rgba(0, 0, 0, 0.2)",
            }}
          />
          <Box
            component="img"
            src={img}
            sx={{
              width: width / height > imgWidth / imgHeight ? "auto" : "90%",
              height: width / height > imgWidth / imgHeight ? "95vh" : "auto",
              borderRadius: 3,
            }}
          />
        </Box>
      )}
      <Box
        component="img"
        ref={imgRef}
        src={img}
        sx={{ width: "100%", borderRadius: 3 }}
      />
      <Fab
        onClick={() => setFull(true)}
        size="medium"
        sx={{
          display: { xs: "none", md: "flex" },
          borderRadius: 3,
          boxShadow: "none",
          position: "absolute",
          left: 20,
          bottom: 20,
          background: "#fff",
          transition: "0.3s all",
          transform: "translateY(80px)",
        }}
      >
        <FullscreenIcon />
      </Fab>
      <Fab
        component="a"
        href={img}
        download
        size="medium"
        sx={{
          display: { xs: "none", md: "flex" },
          borderRadius: 3,
          boxShadow: "none",
          position: "absolute",
          right: 20,
          bottom: 20,
          background: "#fff",
          transition: "0.3s all",
          transform: "translateY(80px)",
        }}
      >
        <DownloadIcon />
      </Fab>
      <Box
        component="a"
        target="_blank"
        href={img}
        download
        sx={{ display: "inline" }}
      >
        <DownloadIcon
          sx={{
            display: { xs: "flex", md: "none" },
            borderRadius: 3,
            position: "absolute",
            right: 20,
            bottom: 20,
            color: "#fff",
          }}
        />
      </Box>
    </Box>
  );
}
