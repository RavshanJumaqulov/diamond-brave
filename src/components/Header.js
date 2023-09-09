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
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = ["Home", "About", "Contact"];
export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <AppBar
      component="nav"
      sx={{
        background: {
          xs: mobileOpen ? "rgba(255, 255, 255, 0.2)" : "none",
          md: "none",
        },
        backdropFilter: {
          xs: mobileOpen || scrollY > 10 ? "blur(20px)" : "none",
          md: scrollY > 10 ? "blur(20px)" : "none",
        },
        transition: "0.3s all linear",
        minWidth: "100%",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { md: "center" },
            background: "none",
            transition: "0.3s all linear",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "0.3s all linear",
            }}
          >
            <img src="/img/logo.png" alt="" style={{ height: 50 }} />
            <IconButton
              onClick={handleDrawerToggle}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { md: "none" }, ml: 2, color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: { xs: "center" },
              height: { xs: mobileOpen ? 500 : 0, md: "auto" },
              transition: "all 0.3s linear",

              "& a": {
                height: "22px",
                lineHeight: "22px",
                textDecoration: "none",
                overflow: "hidden",
                my: { xs: 2, md: "auto" },
                mr: 2,
                "& .MuiTypography-root": {
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  color: "#011a41",
                },
                "&:hover": {
                  "& .MuiTypography-root": {
                    transition: "0.2s all !important",
                    transform: {
                      xs: "translateY(-27px)",
                      md: "translateY(-25px)",
                    },
                    textAlign: "center",
                    color: "#289c2885",
                  },
                },
              },
            }}
          >
            <NavLink to="/">
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  fontWeight: 506,
                  display: { xs: "block", md: "block" },
                  color: "text.primary",
                }}
              >
                Bosh sahifa
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  fontWeight: 506,
                  display: { xs: "block", md: "inline-block" },
                  color: "text.primary",
                }}
              >
                Bosh sahifa
              </Typography>
            </NavLink>
            <NavLink to="/products">
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                Mahsulotlar
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                Mahsulotlar
              </Typography>
            </NavLink>
            <NavLink to="/news">
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                Yangiliklar
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                Yangiliklar
              </Typography>
            </NavLink>
            <NavLink to="/about">
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                Biz haqimizda
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                Biz haqimizda
              </Typography>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
