import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import News from "./pages/News";
import NewsId from "./pages/NewsId";
import Products from "./pages/Products";
import { useDispatch } from "react-redux";
import { getCatalog, getProducts } from "./api";
import { GET_CATALOGS, GET_PRODUCTS } from "./redux/action";
import Context from "./Context";

export default function AllRoutes() {
  const dispatch = useDispatch();
  const { setProductsLoading, setNewsLoading } = useContext(Context);
  useEffect(() => {
    const res = async () => {
      const data = await getProducts();
      if (Object.keys(data).includes("code")) {
        setProductsLoading({
          status: false,
          error: true,
          message: data.message,
        });
      } else {
        if (data.data.length == 0) {
          setProductsLoading({
            status: false,
            error: true,
            message: "Mahsulotlar mavjud emas",
          });
        } else {
          dispatch({ type: GET_PRODUCTS, payload: data.data });
        }
      }
    };
    res();
  }, []);

  useEffect(() => {
    const res = async () => {
      const data = await getCatalog();
      if (Object.keys(data).includes("code")) {
        setNewsLoading({
          status: false,
          error: true,
          message: data.message,
        });
      } else {
        if (data.data.length == 0) {
          setNewsLoading({
            status: false,
            error: true,
            message: "Yangiliklar mavjud emas",
          });
        } else {
          dispatch({ type: GET_CATALOGS, payload: data.data });
        }
      }
    };
    res();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/products" element={<Products />} />
      <Route path="/news" element={<News />} />
      <Route path="/news_id" element={<NewsId />} />
    </Routes>
  );
}
