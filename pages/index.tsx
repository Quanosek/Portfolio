import Head from "next/head";
import Image from "next/image";

import { useEffect } from "react";

import styles from "@/styles/home.module.scss";

import TitleView from "@/components/title/TitleView";
import ParticlesBackground from "@/components/ParticlesBackground";
import AboutView from "@/components/about/AboutView";
import ProjectsView from "@/components/projects/ProjectsView";

export default function Home() {
  useEffect(() => {
    const parallax = document.getElementById("parallax") as HTMLElement;

    // scroll-to-top
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
      </Head>

      <div id="parallax" className={`${styles.parallax}`} onScroll={() => {}}>
        {/* TITLE */}
        <div id="title" className={`${styles.title} ${styles.parallax_group}`}>
          <div
            className={`${styles.parallax_layer} ${styles.parallax_layer_base}`}
          >
            <TitleView />
          </div>

          <div
            className={`${styles.parallax_layer} ${styles.parallax_layer_back}`}
          >
            <ParticlesBackground />
          </div>
        </div>

        {/* ABOUT */}
        <div id="about" className={`${styles.about} ${styles.parallax_group}`}>
          <div
            className={`${styles.parallax_layer} ${styles.parallax_layer_base}`}
          >
            <p
              className={styles.scroll_snipped}
              onClick={() => {
                const element = document.getElementById("about") as HTMLElement;
                element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Kliknij, aby zjechać w dół.
            </p>

            <AboutView />
          </div>
        </div>

        {/* MOTTOM */}
        <div id="motto" className={`${styles.motto} ${styles.parallax_group}`}>
          <div
            className={`${styles.parallax_layer} ${styles.parallax_layer_base}`}
          >
            <p>Nie daj na siebie czekać!</p>
          </div>
          <div
            className={`${styles.parallax_layer} ${styles.parallax_layer_back}`}
          >
            <Image
              alt="wallpaper"
              src="/wallpaper.jpg"
              width={1920}
              height={1080}
            />
          </div>
        </div>

        {/* PROJECTS */}
        <div
          id="projects"
          className={`${styles.projects} ${styles.parallax_group}`}
        >
          <div
            className={`${styles.parallax_layer} ${styles.parallax_layer_base}`}
          >
            <ProjectsView />
          </div>
        </div>

        {/* FOOTER */}
        <div
          id="footer"
          className={`${styles.footer} ${styles.parallax_group}`}
        >
          <div
            className={`${styles.parallax_layer} ${styles.parallax_layer_base}`}
          >
            <p>
              Stworzone z 💙 przez Jakuba Kłało &#169; 2023 Wszelkie Prawa
              Zastrzeżone.
            </p>
          </div>
        </div>
      </div>

      {/* scroll-to-top */}
      <button
        onClick={() => {
          const parallax = document.getElementById("parallax") as HTMLElement;
          parallax.scrollTo({ top: 0, behavior: "smooth" });
        }}
        id="scrollButton"
        className={styles.scroll_button}
        title="Wróć na samą górę."
      >
        <Image
          className="icon"
          src="/icons/arrow.svg"
          width={30}
          height={30}
          alt="up"
        />
      </button>
    </>
  );
}
