"use client";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import { ItemsDrawer } from "@/components/Drawer/ItemsDrawer";
import { RopaItem } from "@/app/urbanstore/types";
import { ServiciosItem } from "@/app/barberlogua/types";
import { AccesoriosItem } from "@/app/tecnologua/types";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const urbanStoreItem: RopaItem = {
    titulo: "Urban Store",
    subitem: ["Todo", "Chaquetas", "Camisetas", "Zapatillas"],
  };
  const barberLoguaItem: ServiciosItem = {
    titulo: "Barber Logua",
    subitem: ["Reparación móvil", "Reparación ordenadores", "Asesoria"],
  };
  const tecnoLoguaItem: AccesoriosItem = {
    titulo: "Tecno Logua",
    subitem: ["Todo", "Perfumes", "Relojes", "Otros productos"],
  };
  const servicesItem: AccesoriosItem = {
    titulo: "Otros servicios",
    subitem: ["Todo", "Perfumes", "Relojes", "Otros productos"],
  };
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Box display="flex" minHeight="100vh">
            <Box width="250px" p={1}>
              <Drawer open={true} variant="persistent">
                <ItemsDrawer title={"Home"} path="/" isHome />
                <ItemsDrawer
                  title={urbanStoreItem.titulo}
                  subtitle={urbanStoreItem.subitem}
                  path="/urbanstore"
                />
                <ItemsDrawer
                  title={barberLoguaItem.titulo}
                  subtitle={barberLoguaItem.subitem}
                  path="/barberlogua"
                />
                <ItemsDrawer
                  title={tecnoLoguaItem.titulo}
                  subtitle={tecnoLoguaItem.subitem}
                  path="/tecnologua"
                />
                <ItemsDrawer
                  title={servicesItem.titulo}
                  subtitle={servicesItem.subitem}
                  path="/services"
                />
              </Drawer>
            </Box>
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {children}
            </Box>
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
