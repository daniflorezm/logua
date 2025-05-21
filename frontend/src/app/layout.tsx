"use client";
import React, { useState, useEffect } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ItemsLogua } from "@/components/ItemsHeader/ItemsLogua";
import styles from "./styles.module.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobile, setMobile] = useState<boolean>(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  window.addEventListener("resize", () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    setMobile(isMobile);
  });
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setMobile(true);
    }
  }, []);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <div className={styles.maindiv}>
            {mobile ? (
              <div className={styles.menumobile}>
                {!openMobileMenu ? (
                  <a
                    className={styles.menumobileabrir}
                    onClick={() => setOpenMobileMenu(true)}
                  >
                    <img src="/assets/menuabrir.svg" alt="abrir" />
                  </a>
                ) : (
                  <a
                    className={styles.menumobilecerrar}
                    onClick={() => setOpenMobileMenu(false)}
                  >
                    <img src="/assets/menucerrar.svg" alt="cerrar" />
                  </a>
                )}
              </div>
            ) : (
              <div className={styles.headerdiv}>
                <img
                  src="/assets/logualogo.jpeg"
                  alt="Logo"
                  className={styles.headerlogo}
                />
                <ItemsLogua title="UrbanStore" path="/urbanstore" />
                <ItemsLogua title="TecnoLogua" path="/tecnologua" />
                <ItemsLogua title="BarberLogua" path="/barberlogua" />
                <ItemsLogua title="Servicios" path="/services" />
              </div>
            )}
            {mobile && openMobileMenu ? (
              <div className={styles.menumobilediv}>
                <ItemsLogua title="UrbanStore" path="/urbanstore" />
                <ItemsLogua title="TecnoLogua" path="/tecnologua" />
                <ItemsLogua title="BarberLogua" path="/barberlogua" />
                <ItemsLogua title="Servicios" path="/services" />
              </div>
            ) : (
              children
            )}
            <footer className={styles.footerLogua}>
              <div className={styles.footersocialnetwork}>
                <div className={styles.socialnetwork}>
                  <img
                    src="/assets/instagram.svg"
                    alt="instagram"
                    className={styles.footerlogo}
                  />
                  <h2>tecno_logua</h2>
                </div>
                <div className={styles.socialnetwork}>
                  <img
                    src="/assets/whatsapp.svg"
                    alt="whatsapp"
                    className={styles.footerlogo}
                  />
                  <h2>+34 645 63 28 18</h2>
                </div>
                <div className={styles.socialnetwork}>
                  <img
                    src="/assets/gmail.svg"
                    alt="gmail"
                    className={styles.footerlogo}
                  />
                  <h2>logua@gmail.com</h2>
                </div>
              </div>
              <p className={styles.footertext}>
                © 2025 Logua. Todos los derechos reservados.
              </p>
            </footer>
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
