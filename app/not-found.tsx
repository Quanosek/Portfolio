import type { Metadata } from "next";

import styles from "@/styles/not-found.module.scss";

export const metadata: Metadata = {
  title: "Nie znaleziono strony / Portfolio",
};

export default function NotFound() {
  return (
    <main>
      <section>
        <div className={`${styles.error} content`}>
          <h1>Błąd 404</h1>
          <p>Nie udało się odnaleźć wybranej strony!</p>
        </div>
      </section>
    </main>
  );
}
