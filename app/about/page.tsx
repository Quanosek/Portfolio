"use client";

import styles from "@/styles/about.module.scss";
import DynamicTitle from "@/functions/dynamicTitle";

export default function AboutPage() {
  DynamicTitle("O mnie / klalo.pl");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Informacje o&nbsp;mnie:</h1>

      <p className={styles.description}>
        Strona w&nbsp;trakcie budowy. Zajrzyj tu wkrótce!
      </p>
    </div>
  );
}
