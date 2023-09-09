import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { Provider } from "react-redux";
import Context from "./Context";
import Footer from "./components/Footer";
import store from "./redux/store";

const theme = () =>
  createTheme({
    palette: {
      yashil: {
        main: "#3bb77e",
      },
    },
  });
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <Context.Provider value={{ width }}>
      <Provider store={store}>
        <ThemeProvider theme={theme()}>
          <Box>
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
