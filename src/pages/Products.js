import {
  Autocomplete,
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
import React, { useEffect, useState } from "react";
import ProductsItem from "../components/ProductsItem";
import Catalogs from "../components/Catalogs";
import { useSelector } from "react-redux";
import ProductsItemLoading from "../loading/ProductsItemLoading";
import Carausel from "../components/Carausel";

export default function Products() {
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
          el[`title_${"uz"}`].toLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    }
  }, [sortByCatalogs, products.length, search]);

  const handleSort = (event) => {
    setSort(event.target.value);
  };

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
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="xl">
        <Carausel />
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
          Mahsulotlar
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
            justifyContent: "space-between",
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
            Mahsulotlar
          </Typography>
          <Autocomplete
            sx={{
              width: 250,
              "& .MuiInputBase-root": { borderRadius: 3 },
              "& .Mui-focused": {
                color: "#3bb77f !important",
                "& fieldset": {
                  borderColor: "#3bb77f !important",
                },
              },
            }}
            options={products}
            autoHighlight
            getOptionLabel={(option) => option.title}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={option.img}
                  srcSet={option.img}
                  alt=""
                />
                {option[`title_${"uz"}`]}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                sx={{ borderRadius: 3 }}
                {...params}
                label="Qidiruv"
                type="search"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "false",
                }}
              />
            )}
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
            }}
          >
            Filter
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Autocomplete
              sx={{
                width: 250,
                display: { xs: "none", md: "flex" },
                "& .MuiInputBase-root": { borderRadius: 3 },
                "& .Mui-focused": {
                  color: "#3bb77f !important",
                  "& fieldset": {
                    borderColor: "#3bb77f !important",
                  },
                },
              }}
              options={products}
              autoHighlight
              getOptionLabel={(option) => option.title}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={option.img}
                    srcSet={option.img}
                    alt=""
                  />
                  {option[`title_${"uz"}`]}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  onChange={(el) => setSearch(el.target.value)}
                  sx={{ borderRadius: 3 }}
                  {...params}
                  label="Qidiruv"
                  type="search"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "false",
                  }}
                />
              )}
            />

            <FormControl
              sx={{
                ml: 1,
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
                <MenuItem value={"Barchasi"}>Barchasi</MenuItem>
                {catalogs.map((el, index) => {
                  return (
                    <MenuItem key={index} value={el.id}>
                      {el[`title_${"uz"}`]}
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
                  <MenuItem value={"a-z"}>Nomi A &#10140; Z</MenuItem>
                  <MenuItem value={"z-a"}>Nomi Z &#10140; A</MenuItem>
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
                {data.length == 0 ? (
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      fontFamily: "Nunito, sans-serif",
                      textAlign: "left",
                    }}
                    color="error.main"
                  >
                    Mahsulot mavjud emas!
                  </Typography>
                ) : (
                  data.map((el, index) => {
                    return (
                      <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                        <ProductsItem
                          title={el[`title_${"uz"}`]}
                          category={el["category"][`title_${"uz"}`]}
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
