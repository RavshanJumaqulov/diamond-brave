import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Header from "./components/Header";
import Carausel from "./components/Carausel";
import { BrowserRouter, Routes } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { Provider } from "react-redux";
import Context from "./Context";
import Footer from "./components/Footer";


const theme = () => createTheme({
  palette: {
    yashil: {
      main: '#3bb77e'
    }
  }
})
const navItems = ["Home", "About", "Contact"];
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  return (
    <ThemeProvider theme={theme}>

    <Context.Provider value={{
      
    }}>
      <Box>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <AllRoutes />
          <Footer />
        </BrowserRouter>
      </Box>
    </Context.Provider>
      </ThemeProvider>
  );
}

export default App;
