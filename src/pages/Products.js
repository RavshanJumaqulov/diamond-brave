import {
  Autocomplete,
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ProductsItem from "../components/ProductsItem";
import Catalogs from "../components/Catalogs";
import { useSelector } from "react-redux";
import ProductsItemLoading from "../components/ProductsItemLoading";

export default function Products() {
  const products = useSelector((state) => state.products);
  const [sort, setSort] = React.useState("nom");

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="xl">
        <Grid2 container spacing={{ md: 4 }}>
          <Grid2 xs={12} md={3} lg={2}>
            <Catalogs />
          </Grid2>
          <Grid2 xs={12} md={9} lg={10}>
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
                    "& .MuiInputBase-root": { borderRadius: 3 },
                  }}
                  options={products}
                  autoHighlight
                  getOptionLabel={(option) => option.name}
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
                      {option.name}
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
                        autoComplete: 'false',
                      }}
                    />
                  )}
                />
                <FormControl
                  sx={{
                    ml: 1,
                    minWidth: 120,
                    "& fieldset": { borderRadius: 3 },
                  }}
                >
                  <Select value={sort} onChange={handleChange}>
                    <MenuItem value={"nom"}>Nomi</MenuItem>
                    <MenuItem value={"sana"}>Sanasi</MenuItem>
                    <MenuItem value={"narx"}>Narxi</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Grid2 container>
                {products.map((el) => {
                  return (
                    <Grid2 xs={12} sm={6} md={4} lg={3} key={el.id}>
                        <ProductsItem name={el.name} img={el.img} />
                    </Grid2>
                  );
                })}
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
