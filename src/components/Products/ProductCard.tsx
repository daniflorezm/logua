import React from "react";
import Image from "next/image";
import { Card, Box, CardContent, Typography } from "@mui/material";
import loguaimage from "@/app/public/logua-logo.png";

export const ProductCard = ({ title }: { title: string }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box position="relative" width="100%" height="150px">
        <Image
          src={loguaimage}
          alt="Producto"
          fill
          style={{ objectFit: "contain", aspectRatio: "1/1" }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
