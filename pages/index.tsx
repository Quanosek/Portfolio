import Head from "next/head";
import Image from "next/image";

import { useEffect } from "react";

import styles from "@/styles/home.module.scss";

import TitleView from "@/components/title/TitleView";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  useEffect(() => {
    const parallax = document.getElementById("parallax") as HTMLElement;

    parallax.addEventListener("scroll", () => {
      const scrollButton = document.getElementById(
        "scrollButton"
      ) as HTMLInputElement;
      const scrollStyle = scrollButton.style;

      if (parallax.scrollTop > 250) {
        scrollStyle.visibility = "visible";
        scrollStyle.opacity = "0.8";
      } else {
        scrollStyle.visibility = "";
        scrollStyle.opacity = "";
      }
    });
  });

  return (
    <>
      <Head>
        <title>Portfolio | Jakub Kłało</title>
        <meta name="description" content="Strona Jakub Kłało." />
        <meta
          name="keywords"
          content="klalo, piesni.klalo.pl, metrum.klalo.pl, fonetyka.klalo.pl, Fonetyka, Quanosek, Jakub Kłało, Polska, Lublin, Politechnika Lubelska, pollub.tv, WEiI, Wydział Elektrotechniki i Informatyki, Multimedia.to, Inżynieria Multimediów, JavaScript, TypeScript, HTML, CSS, Python, frontend, deweloper, web developer, github, kontakt"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="parallax" className={`${styles.parallax}`}>
        <TitleView />

        <div className={`${styles.parallax_layer} ${styles.layer_back}`}>
          <ParticlesBackground />
        </div>

        <div className={`${styles.parallax_layer} ${styles.layer_base}`}>
          <p
            className={styles.scroll_snipped}
            onClick={() => {
              const element = document.getElementById("about") as HTMLElement;
              element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Kliknij, aby zjechać w dół.
          </p>
          <div id="about" className={styles.bright}>
            Jestem studentem Inżynierii Multimediów.
          </div>
          <div id="projects">I to jest moja piękna strona internetowa.</div>

          <footer>Wszelkie prawa zastrzeżone 2023</footer>
        </div>
      </main>

      <button
        onClick={() => {
          const parallax = document.getElementById("parallax") as HTMLElement;
          parallax.scrollTo({ top: 0, behavior: "smooth" });
        }}
        id="scrollButton"
        className={styles.scroll_button}
        title="Wróć na samą górę."
      >
        <Image src="/icons/arrow.svg" height={30} width={30} alt="up" />
      </button>
    </>
  );
}
