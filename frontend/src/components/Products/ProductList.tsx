import React from "react";
import { Container, Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useStore } from "../../store/useStore";

export const ProductList = () => {
  const { producto } = useStore();
  console.log("Producto", producto);

  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Grid container spacing={4}>
        {producto.map((product, index) => (
          <Grid key={index} size={{ xs: 6, sm: 3, md: 3, lg: 3 }}>
            <ProductCard
              title={product.oferta}
              image_1={product.imagen_1}
              image_2={product.imagen_2}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
