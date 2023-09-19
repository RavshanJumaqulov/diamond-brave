import {
  AppBar,
  Box,
  Button,
  Container,
  Fab,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  createSvgIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Context from "../Context";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const FacebookIcon = createSvgIcon(
  <svg height="1em" viewBox="0 0 320 512">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>,
  "FacebookIcon"
);

export default function Header() {
  const { lan, setLan, width } = useContext(Context);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  const handleLanguage = (event) => {
    setLan(event.target.value);
  };

  useEffect(()=>{
    setMobileOpen(false)
  },[navigate])

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
              justifyContent: { xs: "center", md: "flex-start" },
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
                  display: { xs: "block", md: "block" },
                  color: "text.primary",
                }}
              >
                {lan == "uz" ? "Bosh sahifa" : lan == "en" ? "Home" : "Главный"}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  display: { xs: "block", md: "inline-block" },
                  color: "text.primary",
                }}
              >
                {lan == "uz" ? "Bosh sahifa" : lan == "en" ? "Home" : "Главный"}
              </Typography>
            </NavLink>
            <NavLink to="/products">
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  color: "text.primary",
                }}
              >
                {lan == "uz"
                  ? "Mahsulotlar"
                  : lan == "en"
                  ? "Products"
                  : "Продукты"}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  color: "text.primary",
                }}
              >
                {lan == "uz"
                  ? "Mahsulotlar"
                  : lan == "en"
                  ? "Products"
                  : "Продукты"}
              </Typography>
            </NavLink>
            <NavLink to="/news">
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  color: "text.primary",
                }}
              >
                {lan == "uz" ? "Yangiliklar" : lan == "en" ? "News" : "Новости"}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  color: "text.primary",
                }}
              >
                {lan == "uz" ? "Yangiliklar" : lan == "en" ? "News" : "Новости"}
              </Typography>
            </NavLink>
            <NavLink to="/about">
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  color: "text.primary",
                }}
              >
                {lan == "uz"
                  ? "Biz haqimizda"
                  : lan == "en"
                  ? "About"
                  : "О нас"}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 16 },
                  color: "text.primary",
                }}
              >
                {lan == "uz"
                  ? "Biz haqimizda"
                  : lan == "en"
                  ? "About"
                  : "О нас"}
              </Typography>
            </NavLink>

            {width < 900 ? (
              mobileOpen ? (
                <>
                  <FormControl
                    sx={{
                      ml: 1,
                      minWidth: 100,
                      "& .MuiSelect-select": {
                        fontFamily: "Nunito, sans-serif",
                        fontSize: { xs: 18, md: 16 },
                        fontWeight: 700,
                        color: "#011a41",
                      },
                      "& fieldset": {
                        borderRadius: 3,
                        border: "none !important",
                      },
                      "& .Mui-focused": {
                        "& fieldset": {
                          border: "none !important",
                        },
                      },
                    }}
                  >
                    <Select value={lan} onChange={handleLanguage}>
                      <MenuItem
                        sx={{ fontSize: { xs: 18, md: 16 } }}
                        value={"uz"}
                      >
                        O'zbek
                      </MenuItem>
                      <MenuItem sx={{ fontWeight: 500 }} value={"ru"}>
                        Русский
                      </MenuItem>
                      <MenuItem sx={{ color: "text.primary" }} value={"en"}>
                        English
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: 150,
                  }}
                >
                  <Fab
                    component="a"
                    target="_blank"
                    href="tel:+998997565684"
                    elevation="0"
                    size="small"
                    sx={{ boxShadow: "none", background: 'none',  }}
                  >
                    <FacebookIcon
                      sx={{
                        fontSize: 24,
                        height: 24,
                        color: "#3bb77e",
                        fill: "#3bb77e",
                      }}
                    />
                  </Fab>
                  <Fab
                    component="a"
                    target="_blank"
                    elevation="0"
                    size="small"
                    sx={{ boxShadow: "none", background: 'none',  }}
                  >
                    <InstagramIcon
                      sx={{ fontSize: 24, height: 24, color: "#3bb77e" }}
                    />
                  </Fab>
                  <Fab
                    component="a"
                    target="_blank"
                    elevation="0"
                    size="small"
                    sx={{ boxShadow: "none", background: 'none',  }}
                  >
                    <YouTubeIcon
                      sx={{ fontSize: 24, height: 24, color: "#3bb77e" }}
                    />
                  </Fab>
                </Box>
                  <Button
                    component="a"
                    target="_blank"
                    variant={"contained"}
                    disableElevation
                    sx={{
                      py: 2,
                      background: "#3BB77E",
                      borderRadius: 3,
                      fontFamily: "Nunito, sans-serif",
                      textTransform: "uppercase !important",
                      fontSize: 16,
                      fontWeight: 700,
                      "&:hover": {
                        background: "#00aa67",
                      },
                    }}
                  >
                    {lan == "uz"
                      ? "QO'NG'IROQ"
                      : lan == "en"
                      ? "CALL PHONE"
                      : "Звоните"}
                  </Button>
                </>
              ) : (
                ""
              )
            ) : (
              <>
                <FormControl
                  sx={{
                    ml: 1,
                    minWidth: 100,
                    "& .MuiSelect-select": {
                      fontFamily: "Nunito, sans-serif",
                      fontSize: { xs: 18, md: 16 },
                      fontWeight: 700,
                      color: "#011a41",
                    },
                    "& fieldset": {
                      borderRadius: 3,
                      border: "none !important",
                    },
                    "& .Mui-focused": {
                      "& fieldset": {
                        border: "none !important",
                      },
                    },
                  }}
                >
                  <Select value={lan} onChange={handleLanguage}>
                    <MenuItem
                      sx={{ fontSize: { xs: 18, md: 16 } }}
                      value={"uz"}
                    >
                      O'zbek
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: 500 }} value={"ru"}>
                      Русский
                    </MenuItem>
                    <MenuItem sx={{ color: "text.primary" }} value={"en"}>
                      English
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: 150,
                  }}
                >
                  <Fab
                    component="a"
                    target="_blank"
                    href="tel:+998997565684"
                    elevation="0"
                    size="small"
                    sx={{ boxShadow: "none", background: 'none',  }}
                  >
                    <FacebookIcon
                      sx={{
                        fontSize: 24,
                        height: 24,
                        color: "#3bb77e",
                        fill: "#3bb77e",
                      }}
                    />
                  </Fab>
                  <Fab
                    component="a"
                    target="_blank"
                    elevation="0"
                    size="small"
                    sx={{ boxShadow: "none", background: 'none',  }}
                  >
                    <InstagramIcon
                      sx={{ fontSize: 24, height: 24, color: "#3bb77e" }}
                    />
                  </Fab>
                  <Fab
                    component="a"
                    target="_blank"
                    elevation="0"
                    size="small"
                    sx={{ boxShadow: "none", background: 'none',  }}
                  >
                    <YouTubeIcon
                      sx={{ fontSize: 24, height: 24, color: "#3bb77e" }}
                    />
                  </Fab>
                </Box> */}
                <Button
                  component="a"
                  target="_blank"
                  variant={"contained"}
                  disableElevation
                  sx={{
                    py: 2,
                    background: "#3BB77E",
                    borderRadius: 3,
                    fontFamily: "Nunito, sans-serif",
                    textTransform: "capitalize",
                    fontSize: 16,
                    fontWeight: 700,
                    "&:hover": {
                      background: "#00aa67",
                    },
                  }}
                >
                  {lan == "uz"
                    ? "Qo'ng'iroq"
                    : lan == "en"
                    ? "Call phone"
                    : "ЗВОНИТЕ"}
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
