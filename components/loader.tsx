"use client";

import { useState, useEffect } from "react";

import styles from "@/styles/components/loader.module.scss";

export default function Loader() {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageReady(true);
    }
  }, []);

  return (
    <div
      className={styles.loader}
      style={{
        visibility: pageReady ? "hidden" : "visible",
        opacity: pageReady ? 0 : 1,
      }}
    >
      <div className={styles.spinner} />
    </div>
  );
}
