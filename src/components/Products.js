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
      </Stack>
      <ProductsContainer />

      </Box>)
}
