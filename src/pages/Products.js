import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useState } from "react";
import ProductsItem from "../components/ProductsItem";
import Catalogs from "../components/Catalogs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default function Products() {
  const { productsLoading, width, lan } = useContext(Context);
  const products = useSelector((state) => state.products);
  const catalogs = useSelector((state) => state.catalogs);
  const [sort, setSort] = React.useState("a-z");
  const [sortByCatalogs, setSortByCatalogs] = useState("Barchasi");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleCatalog = (event) => {
    setSortByCatalogs(event.target.value);
  };
  useEffect(() => {
    if (search == "") {
      if (sortByCatalogs === "Barchasi") {
        setData(products);
      } else {
        setData(products.filter((el) => el.category.id == sortByCatalogs));
      }
    } else {
      setSortByCatalogs("Barchasi");
      setData(
        products.filter((el) =>
          el[`title_${lan}`].toLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    }
  }, [sortByCatalogs, products.length, search]);

  const handleSort = (event) => {
    setSort(event.target.value);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [useNavigate()]);

  data.sort((a, b) => {
    if (sort == "a-z") {
      if (b.title > a.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      return 0;
    } else if (sort == "z-a") {
      if (a.title > b.title) {
        return -1;
      } else if (b.title > a.title) {
        return 1;
      }
      return 0;
    }
  });
  return (
    <Box>
      <Box
        component={"img"}
        src={width < 900 ? "/topxs.jpg" : "/top.jpg"}
        sx={{ width: "100%", minHeight: 200, objectFit: "cover" }}
      />
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            color: "#011a41",
            display: { xs: "none", md: "block" },
            mt: 2,
          }}
        >
          {lan == "uz" ? "Mahsulotlar" : lan == "en" ? "Products" : "Продукты"}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            my: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "calc(1.3125rem + 0.75vw)", lg: 30 },
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              color: "#011a41",
              mb: 3,
              mt: 2,
            }}
          >
            {lan == "uz"
              ? "Mahsulotlar"
              : lan == "en"
              ? "Products"
              : "Продукты"}
          </Typography>
          <TextField
            label={lan == "uz" ? "Qidiruv" : lan == "en" ? "Search" : "Поиск"}
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            sx={{
              ml: 1,
              display: { xs: "flex", md: "none" },
              "& .MuiInputBase-root": { borderRadius: 3 },
              "& .Mui-focused": {
                color: "#3bb77e !important",
                "& fieldset": {
                  borderColor: "#3bb77e !important",
                  borderWidth: 2,
                },
              },
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              color: "#011a41",
              display: { xs: "none", sm: "flex" },
            }}
          >
            Filter
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", sm: "auto" },
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label={lan == "uz" ? "Qidiruv" : lan == "en" ? "Search" : "Поиск"}
              variant="outlined"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              sx={{
                ml: 0,
                display: { xs: "none", md: "flex" },
                "& .MuiInputBase-root": { borderRadius: 3 },
                "& .Mui-focused": {
                  color: "#3bb77e !important",
                  "& fieldset": {
                    borderColor: "#3bb77e !important",
                    borderWidth: 2,
                  },
                },
              }}
            />

            <FormControl
              sx={{
                ml: { xs: 0, md: 1 },
                minWidth: 200,
                "& fieldset": { borderRadius: 3 },
                "& .Mui-focused": {
                  "& fieldset": {
                    borderColor: "#3bb77f !important",
                  },
                },
              }}
            >
              <Select value={sortByCatalogs} onChange={handleCatalog}>
                <MenuItem value={"Barchasi"}>
                  {lan == "uz"
                    ? "Barchasi"
                    : lan == "en"
                    ? "All Products"
                    : "Все продукты"}
                </MenuItem>
                {catalogs.map((el, index) => {
                  return (
                    <MenuItem key={index} value={el.id}>
                      {el[`title_${lan}`]}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <FormControl
                sx={{
                  ml: 1,
                  minWidth: 120,
                  "& fieldset": { borderRadius: 3 },
                  "& .Mui-focused": {
                    "& fieldset": {
                      borderColor: "#3bb77f !important",
                    },
                  },
                }}
              >
                <Select value={sort} onChange={handleSort}>
                  <MenuItem value={"a-z"}>
                    {lan == "uz" ? "Nomi" : lan == "en" ? "Name" : "Имя"} A
                    &#10140; Z
                  </MenuItem>
                  <MenuItem value={"z-a"}>
                    {lan == "uz" ? "Nomi" : lan == "en" ? "Name" : "Имя"} Z
                    &#10140; A
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>
        </Box>
        <Grid2 container spacing={{ md: 4 }}>
          <Grid2 xs={12} md={3} sx={{ display: { xs: "none", md: "flex" } }}>
            <Catalogs
              sortByCatalogs={sortByCatalogs}
              handleCatalog={handleCatalog}
              setSortByCatalogs={setSortByCatalogs}
            />
          </Grid2>
          <Grid2 xs={12} md={9}>
            <Box sx={{ width: "100%", mt: 2 }}>
              <Grid2 container spacing={2}>
                {productsLoading.status && data.length == 0 ? (
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      fontFamily: "Nunito, sans-serif",
                      textAlign: "left",
                    }}
                    color="error.main"
                  >
                    {lan == "uz"
                      ? "Mahsulot mavjud emas!"
                      : lan == "en"
                      ? "Product not available!"
                      : "Товар недоступен!"}
                  </Typography>
                ) : (
                  data.map((el, index) => {
                    return (
                      <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                        <ProductsItem
                          title={el[`title_${lan}`]}
                          category={el["category"][`title_${lan}`]}
                          miqdori={el[`miqdori_${lan}`]}
                          img={el.img}
                          id={el.id}
                        />
                      </Grid2>
                    );
                  })
                )}
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
