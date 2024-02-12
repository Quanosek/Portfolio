import type { Metadata } from "next";

import styles from "@/styles/about.module.scss";

export const metadata: Metadata = {
  title: "O mnie / Portfolio",
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Informacje o mnie:</h1>

      <p className={styles.description}>
        Strona w trakcie budowy. Zajrzyj tu wkrótce!
      </p>
    </div>
  );
}
