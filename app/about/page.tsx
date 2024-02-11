import type { Metadata } from "next";

import styles from "@/styles/about.module.scss";

export const metadata: Metadata = {
  title: "O mnie / Portfolio",
};

export default function AboutPage() {
  return (
    <>
      <h1>Informacje o mnie</h1>

      <p>Strona w trakcie budowy. Zajrzyj tu wkrótce!</p>
    </>
  );
}
