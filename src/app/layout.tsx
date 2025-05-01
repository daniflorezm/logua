"use client";
import React from "react";
import { theme } from "@/themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Box } from "@mui/material";
import { ItemsLogua } from "@/components/Items/ItemsLogua";
import { SectionItem } from "@/types/types";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const urbanStoreItem: SectionItem = {
    titulo: "Urban Store",
    subitem: ["Todo", "Chaquetas", "Camisetas", "Zapatillas"],
  };
  const barberLoguaItem: SectionItem = {
    titulo: "Barber Logua",
    subitem: ["Reparación móvil", "Reparación ordenadores", "Asesoria"],
  };
  const tecnoLoguaItem: SectionItem = {
    titulo: "Tecno Logua",
  };
  const servicesItem: SectionItem = {
    titulo: "Otros servicios",
    subitem: ["Todo", "Perfumes", "Relojes", "Otros productos"],
  };
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box
              display="flex"
              flexDirection={"column"}
              minHeight="100vh"
              sx={{ backgroundColor: "#1e1e1e" }}
            >
              <Box
                display="flex"
                justifyContent={"space-evenly"}
                p={1}
                sx={{
                  backgroundColor: "#a20000",
                }}
                flexWrap="wrap-reverse"
              >
                <ItemsLogua
                  title={servicesItem.titulo}
                  subtitle={servicesItem.subitem}
                  path="/services"
                />
                <ItemsLogua
                  title={barberLoguaItem.titulo}
                  subtitle={barberLoguaItem.subitem}
                  path="/barberlogua"
                />
                <ItemsLogua title={tecnoLoguaItem.titulo} path="/tecnologua" />
                <ItemsLogua
                  title={urbanStoreItem.titulo}
                  subtitle={urbanStoreItem.subitem}
                  path="/urbanstore"
                />
                <ItemsLogua title={"Home"} path="/" isHome />
              </Box>
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
