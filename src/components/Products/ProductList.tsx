import React from "react";
import { Container, Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const products = [
    { title: "Producto 1" },
    { title: "Producto 2" },
    { title: "Producto 3" },
    { title: "Producto 4" },
    { title: "Producto 5" },
    { title: "Producto 6" },
    { title: "Producto 7" },
    { title: "Producto 8" },
    { title: "Producto 9" },
    { title: "Producto 10" },
    { title: "Producto 10" },
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ProductCard title={product.title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
