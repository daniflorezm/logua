"use client";
import React from "react";
import styles from "./styles.module.css";

export default function Accesorios() {
  return (
    <main>
      <section className={styles.maintecnologua}>
        <div className={styles.tecnologuaheader}>
          <video muted autoPlay loop>
            <source src="/videos/tecnologuaheader.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <h1>Servicios TecnoLogua</h1>
          <h2>Donde la tecnología revive</h2>
        </div>
        <div className={styles.tecnologuabody}>
          <div className={styles.tecnologuabodytext}>
            <p>¿POR QUÉ TECNOLOGUA?</p>
            <h1>Nos adaptamos a tus necesidades</h1>
            <p>
              En tecnologua te ofrecemos la mejor atención y calidad en
              cualquier servicio de reparación o consultoría que puedas tener,
              asegurándote un servicio rápido y eficaz.
            </p>
            <img
              src="assets/terminal.svg"
              alt="terminal logo"
              className={styles.tecnologuabodyicon}
            />
          </div>
          <img
            className={styles.tecnologuabodyimg}
            src="/assets/tecnologuanetwork.png"
            alt="Tecnologua"
          />
        </div>
        <div className={styles.tecnologuaservicessection}>
          <h1 className={styles.tecnologuaservicestitle}>Servicios</h1>
          <div className={styles.tecnologuaservices}>
            <div className={styles.tecnologuaservicesitemone}>
              <img
                src="assets/tecnologuamobile.png"
                alt="mobile"
                className={styles.tecnologuaservicesimg}
              />
              <h1>Reparación de dispositivos móviles</h1>
            </div>
            <div className={styles.tecnologuaservicesitemtwo}>
              <h1>Montaje de PC&apos;s y setups</h1>
              <img
                src="assets/tecnologuaservicesetup.png"
                alt="mobile"
                className={styles.tecnologuaservicesimg}
              />
            </div>
            <div className={styles.tecnologuaservicesitemthree}>
              <img
                src="assets/tecnologuaservicesia.png"
                alt="mobile"
                className={styles.tecnologuaservicesimg}
              />
              <h1>Servicios con IA</h1>
            </div>
            <div className={styles.tecnologuaservicesitemfour}>
              <h1>Consultorías y dudas</h1>
              <img
                src="assets/tecnologuaservicesaskmark.png"
                alt="mobile"
                className={styles.tecnologuaservicesimg}
              />
            </div>
          </div>
        </div>
        <div className={styles.tecnologuafooter}>
          <div className={styles.tecnologuafootervideo}>
            <video muted autoPlay controls>
              <source src="/videos/tecnologuavideo.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <div className={styles.tecnologuafootertext}>
            <h1>No juegues con la suerte</h1>
            <p>
              No te arriesgues y deja tus dispositivos en las mejores manos, te
              garantizamos un servicio profesional y eficiente
            </p>
            <ul>
              <li>
                Soluciones personalizadas: servicios adaptados específicamente a
                tus necesidades
              </li>
              <br />
              <li>
                Garantía de calidad: servicios realizados por profesionales con
                experiencia y conocimientos técnicos actualizados
              </li>
              <br />
              <li>
                Respuesta inmediata: soporte técnico oportuno para minimizar el
                tiempo de inactividad
              </li>
            </ul>
            <div className={styles.tecnologuafootertextimg}>
              <img src="assets/circuito.png" alt="circuito" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
