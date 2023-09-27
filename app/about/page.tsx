import type { Metadata } from "next";

import styles from "@/styles/about.module.scss";

export const metadata: Metadata = {
  title: "O mnie / Portfolio",
};

export default function AboutPage() {
  return (
    <main>
      <section>
        <div className={`${styles.about} content`}>
          <h1>Informacje o mnie</h1>
          <p>Strona chwilowo niedostępna. Zajrzyj tu wkrótce!</p>
        </div>
      </section>
    </main>
  );
}
