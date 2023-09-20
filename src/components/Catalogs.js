import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import CatalogsItem from "./CatalogsItem";
import { useSelector } from "react-redux";
import Context from "../Context";

export default function Catalogs({ sortByCatalogs, setSortByCatalogs }) {
  const { lan } = useContext(Context);
  const catalogs = useSelector((state) => state.catalogs);
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        transition: "0.3s all",
        mt: 2,
      }}
    >
      <CatalogsItem
        value={"Barchasi"}
        sortByCatalogs={sortByCatalogs}
        title={lan=="uz" ? "Barchasi" : lan=="en" ? "All Products" : "Все продукты"}
        setSortByCatalogs={setSortByCatalogs}
      />
      {catalogs.map((el, index) => {
        return (
          <CatalogsItem
            value={el.id}
            title={el[`title_${lan}`]}
            url={el.img}
            key={index}
            setSortByCatalogs={setSortByCatalogs}
            sortByCatalogs={sortByCatalogs}
          />
        );
      })}
    </Box>
  );
}
