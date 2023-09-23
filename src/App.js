import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { Provider } from "react-redux";
import Context from "./Context";
import Footer from "./components/Footer";
import store from "./redux/store";
import Background from "./components/Background";

const theme = () =>
  createTheme({
    palette: {
      yashil: {
        main: "#3bb77e",
      },
    },
  });
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [logoAnime, setLogoAnime] = useState(true);
  const [lan, setLan] = useState("uz");
  const boxRef = useRef(null);
  const [productsLoading, setProductsLoading] = useState({
    status: false,
    error: false,
    message: "",
  });
  const [catalogsLoading, setCatalogsLoading] = useState({
    status: false,
    error: false,
    message: "",
  });
  const [newsLoading, setNewsLoading] = useState({
    status: false,
    error: false,
    message: "",
  });
  const [bestNewsLoading, setBestNewsLoading] = useState({
    status: false,
    error: false,
    message: "",
  });
  const [photoGalaryLoading, setPhotoGalaryLoading] = useState({
    status: false,
    error: false,
    message: "",
  });

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  useEffect(() => {
    if (logoAnime) {
      setTimeout(() => {
        setLogoAnime(false);
      }, 3000);
    }
  }, []);
  return (
    <Context.Provider
      value={{
        lan,
        setLan,
        width,
        height,
        mobileOpen,
        setMobileOpen,
        productsLoading,
        setProductsLoading,
        catalogsLoading,
        setCatalogsLoading,
        newsLoading,
        setNewsLoading,
        bestNewsLoading,
        setBestNewsLoading,
        photoGalaryLoading,
        setPhotoGalaryLoading,
      }}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme()}>
          <Box
            ref={boxRef}
            sx={{
              position: "relative",
              background: { xs: "url(/background.jpg)", md: "none" },
            }}
          >
            {width > 900 ? <Background /> : ""}
            <BrowserRouter>
              <CssBaseline />
              {logoAnime && (
                <Box
                  sx={{
                    width: "100%",
                    height: "100vh",
                    top: 0,
                    left: 0,
                    position: "absolute",
                    zIndex: 100000,
                    background: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "0.3s all",
                    animation: "box 3s linear forwards",
                  }}
                >
                  <Box
                    component="img"
                    src="/img/logo.png"
                    sx={{
                      width: { xs: "90%", xs: "80%", md: 400 },
                      opacity: 0,
                      transition: "0.3s all",
                      animation: "logo 3s linear",
                    }}
                  />
                </Box>
              )}
              <Header />
              <AllRoutes />
              <Footer />
            </BrowserRouter>
          </Box>
        </ThemeProvider>
      </Provider>
    </Context.Provider>
  );
}

export default App;
