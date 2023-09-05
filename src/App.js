import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Header from "./components/Header";
import Carausel from "./components/Carausel";
import { BrowserRouter, Routes } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { Provider } from "react-redux";
import Context from "./Context";

const navItems = ["Home", "About", "Contact"];
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <Context.Provider value={{
      
    }}>
      <Box>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <AllRoutes />
        </BrowserRouter>
      </Box>
    </Context.Provider>
  );
}

export default App;
