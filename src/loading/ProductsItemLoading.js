import { Box, Skeleton } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";

export default function ProductsItemLoading() {
  const { width } = useContext(Context);
  const [skeletWidth, setSkeletWidth] = useState(0);
  const skeletRef = useRef(null);
  useEffect(() => {
    if (skeletRef.current !== null) {
      setSkeletWidth(skeletRef.current.clientWidth);
    }
  }, [width]);

  return (
    <Box sx={{ width: "100%", p: 1 }}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        ref={skeletRef}
        sx={{ borderRadius: 3, height: skeletWidth }}
      />
      <Skeleton sx={{}} />
      <Skeleton width="60%" />
    </Box>
  );
}
