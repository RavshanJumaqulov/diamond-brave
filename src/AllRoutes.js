import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import News from "./pages/News";
import NewsId from "./pages/NewsId";
import Products from "./pages/Products";
import { useDispatch } from "react-redux";
import { getCatalogs, getNews, getPhotoGalary, getProducts } from "./api";
import {
  GET_CATALOGS,
  GET_NEWS,
  GET_PHOTO_GALLARY,
  GET_PRODUCTS,
} from "./redux/action";
import Context from "./Context";
import About from "./pages/About";
import Album from "./pages/Album";

export default function AllRoutes() {
  const dispatch = useDispatch();
  const {
    setProductsLoading,
    setNewsLoading,
    setCatalogsLoading,
    setPhotoGalaryLoading,
    setMobileOpen,
  } = useContext(Context);
  useEffect(() => {
    const res = async () => {
      const data = await getProducts();
      if (Object.keys(data).includes("code")) {
        setProductsLoading({
          status: true,
          error: true,
          message: data.message,
        });
      } else {
        if (data.data.length == 0) {
          setProductsLoading({
            status: true,
            error: true,
            message: "Mahsulotlar mavjud emas",
          });
        } else {
          setProductsLoading({
            status: true,
            error: false,
            message: "",
          });
          dispatch({ type: GET_PRODUCTS, payload: data.data });
        }
      }
    };
    res();
  }, []);

  useEffect(() => {
    const res = async () => {
      const data = await getCatalogs();
      if (Object.keys(data).includes("code")) {
        setCatalogsLoading({
          status: true,
          error: true,
          message: data.message,
        });
      } else {
        if (data.data.length == 0) {
          setCatalogsLoading({
            status: true,
            error: true,
            message: "Kataloglar mavjud emas",
          });
        } else {
          setCatalogsLoading({
            status: true,
            error: false,
            message: "",
          });
          dispatch({ type: GET_CATALOGS, payload: data.data });
        }
      }
    };
    res();
  }, []);

  useEffect(() => {
    const res = async () => {
      const data = await getNews(1);
      if (Object.keys(data).includes("code")) {
        setNewsLoading({
          status: true,
          error: true,
          message: data.message,
        });
      } else {
        if (data.data.results.length == 0) {
          setNewsLoading({
            status: true,
            error: true,
            message: "Yangiliklar mavjud emas",
          });
        } else if (data.data.results.length > 0) {
          setNewsLoading({
            status: true,
            error: false,
            message: "",
          });
          dispatch({ type: GET_NEWS, payload: data.data.results });
        }
      }
    };
    res();
  }, []);

  useEffect(() => {
    const res = async () => {
      const data = await getPhotoGalary(1);
      if (Object.keys(data).includes("code")) {
        setPhotoGalaryLoading({
          status: true,
          error: true,
          message: data.message,
        });
      } else {
        if (data.data.results.length == 0) {
          setPhotoGalaryLoading({
            status: true,
            error: true,
            message: "Yangiliklar mavjud emas",
          });
        } else if (data.data.results.length > 0) {
          setPhotoGalaryLoading({
            status: true,
            error: false,
            message: "",
          });
          dispatch({ type: GET_PHOTO_GALLARY, payload: data.data.results });
        }
      }
    };
    res();
  }, []);
  return (
    <Routes onClick={() => setMobileOpen(false)}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/album" element={<Album />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:product" element={<Product />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:new" element={<NewsId />} />
    </Routes>
  );
}
