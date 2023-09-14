import { Box } from "@mui/material";
import React from "react";
import ProductWithId from "../components/ProductWithId";
import ProductLoading from "../loading/ProductLoading";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PageNotFound from "./PageNotFound";

export default function Product() {
  const params = useParams();
  const products = useSelector((state) => state.products);
  console.log(products.filter((el) => el.id == +params.product));
  return (
    <Box sx={{ width: "100%" }}>
      {products.length == 0 ? (
        <ProductLoading />
      ) : products.filter((el) => el.id == +params.product).length > 0 ? (
        <ProductWithId />
      ) : (
        <PageNotFound />
      )}
    </Box>
  );
}
