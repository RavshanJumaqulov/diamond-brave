import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ProductsContainer from './ProductsContainer';

export default function Products() {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        direction="column"
        sx={{
          justifyContent: "space-between",
          // mb: { xs: 8, md: 10 },
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
            textAlign: "left",
          }}
          color="text.secondary"
        >
          Products
        </Typography>
        {/* <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            alignItems: {
              xs: "center",
              md: "center",
            },
            justifyContent: { xs: "space-between", md: "space-between" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40, md: 44, lg: 48 },
              fontWeight: 700,
              fontFamily: "Nunito, sans-serif",
              color: "#011a41",
              my: 3,
            }}
          >
            Bizning mahsulotlar
          </Typography>
          <Button
            variant="light"
            disableElevation
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "Nunito, sans-serif",
              textTransform: "capitalize",
              fontSize: 16,
            }}
          >
            Barchasi
          </Button>
        </Stack> */}
      </Stack>
      <ProductsContainer />

      </Box>)
}
