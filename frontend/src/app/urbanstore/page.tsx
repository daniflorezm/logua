"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { ProductList } from "@/components/ProductsList/ProductList";
import { useUrbanStore } from "../../hooks/useUrbanStore";
import { useStore } from "../../store/useStore";

export default function Ropa() {
  const { getOfertaLogua } = useUrbanStore();
  const { setProducto } = useStore();
  useEffect(() => {
    const getUrbanProducts = async () => {
      const response = await getOfertaLogua();
      setProducto(response);
    };
    getUrbanProducts();
  }, []);

  return (
    <Box>
      <ProductList />
    </Box>
  );
}
