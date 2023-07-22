import Head from "next/head";
import { useEffect } from "react";

import styles from "@/styles/about.module.scss";

import Reveal from "@/scripts/Reveal";

import Navbar from "@/components/Navbar/script";
import ScrollButton from "@/components/ScrollButton/script";

export default function AboutPage() {
  useEffect(() => Reveal());

  return (
    <>
      <Head>
        <title>Informacje o mnie | Jakub Kłało</title>
      </Head>

      <main>
        <Navbar />

        <div className="holder">
          <div id="about" className={styles.about}>
            <h1>ABOUT</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis unde est minus cumque fugit voluptates nemo optio
              quae! Eum quas similique et nemo voluptates nam atque repellat
              ullam corrupti modi?
            </p>
          </div>
        </div>
      </main>

      <ScrollButton />
    </>
  );
}
