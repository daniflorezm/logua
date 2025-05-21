"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
export const ItemsLogua = ({
  path,
  title,
}: {
  path: string;
  title: string;
}) => {
  const router = useRouter();
  const goToPage = () => {
    router.push(path);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  return (
    <header className={styles.headerdiv}>
      <a className={styles.headerbutton} onClick={() => goToPage()}>
        {title}
      </a>
    </header>
  );
};
