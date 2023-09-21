import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useRef, useState } from "react";
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
  const [photoGalaryLoading, setPhotoGalaryLoading] = useState({
    status: false,
    error: false,
    message: "",
  });

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });



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
        photoGalaryLoading,
        setPhotoGalaryLoading,
      }}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme()}>
          <Box ref={boxRef} sx={{ position: "relative", background: {xs: 'url(/background.jpg)', md: 'none'} }}>
            {width > 900 ? <Background /> : ""}
            <BrowserRouter>
              <CssBaseline />
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
