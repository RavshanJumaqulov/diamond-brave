import { Box } from "@mui/material";
import Lottie from "lottie-react";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import error from "../lottie/error-404.json";

export default function PageNotFound(props) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: 500, mt: 10 }}>
        <Lottie
          style={{ overflow: "inherit" }}
          animationData={!!props.data ? props.data : error}
        />
      </Box>
    </Box>
  );
}
