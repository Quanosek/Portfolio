import Head from "next/head";
import Image from "next/image";

import { useEffect } from "react";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import styles from "@/styles/home.module.scss";

import ParticlesBackground from "@/components/ParticlesBackground";
import TitleView from "@/components/title/TitleView";
import AboutView from "@/components/about/AboutView";
import ProjectsView from "@/components/projects/ProjectsView";

export default function Home() {
  useEffect(() => {
    // scroll-to-top
    document.addEventListener("scroll", () => {
      const scrollButton = document.getElementById(
        "scrollButton"
      ) as HTMLInputElement;
      const scrollStyle = scrollButton.style;

      if (document.documentElement.scrollTop > 280) {
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

      <main>
        <ParallaxBanner id="title" className={styles.title}>
          <ParallaxBannerLayer
            className={styles.parallax_background}
            speed={-30}
          >
            <ParticlesBackground />
          </ParallaxBannerLayer>

          <ParallaxBannerLayer className={styles.parallax_content}>
            <TitleView />
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <div id="about" className={styles.about}>
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

        <ParallaxBanner id="motto" className={styles.motto}>
          <ParallaxBannerLayer
            className={styles.parallax_background}
            speed={-20}
          >
            <Image
              alt="wallpaper"
              src="/images/wallpaper.jpg"
              width={1920}
              height={1080}
            />
          </ParallaxBannerLayer>

          <ParallaxBannerLayer className={styles.parallax_content}>
            <h2>Uwierz w siebie!</h2>
            <p>~ Ktoś mądry</p>
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <div id="projects" className={styles.projects}>
          <ProjectsView />
        </div>
      </main>

      <footer>
        <p>
          Stworzone z 💙 przez Jakuba Kłało &#169; 2023 Wszelkie Prawa
          Zastrzeżone.
        </p>
      </footer>

      {/* scroll-to-top */}
      <button
        title="Wróć na samą górę."
        id="scrollButton"
        className={styles.scroll_button}
        onClick={() => {
          document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Image
          className="icon"
          alt="up"
          src="/icons/arrow.svg"
          width={30}
          height={30}
        />
      </button>
    </>
  );
}
