import type { Metadata } from "next";

import styles from "@/styles/projects.module.scss";

export const metadata: Metadata = {
  title: "Projekty / Portfolio",
};

export default function ProjectsPage() {
  return (
    <main>
      <section>
        <div className={`${styles.projects} content`}>
          <h1>Wszystkie projekty</h1>
          <p>Strona chwilowo niedostępna. Zajrzyj tu wkrótce!</p>
        </div>
      </section>
    </main>
  );
}
