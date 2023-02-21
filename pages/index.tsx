import Head from "next/head";
import Image from "next/image";

import React, { useEffect } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Wave from "react-wavify";

import styles from "@/styles/home.module.scss";

import ParticlesBackground from "@/components/ParticlesBackground";
import TitleView from "@/components/title/TitleView";
import InfoView from "@/components/info/InfoView";
import ProjectsView from "@/components/projects/ProjectsView";
import ContactView from "@/components/contact/ContactView";

export default function Home() {
  function Reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;
      if (revealTop < window.innerHeight + 50) reveal.classList.add("active");
    });
  }

  useEffect(() => {
    // Reveal(); // first time check

    window.addEventListener("scroll", () => {
      // scroll-to-top
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

      Reveal(); // every scroll check
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

        <div className={styles.white_holder}>
          <div id="info" className={styles.info}>
            <p
              className={styles.scroll_snipped}
              onClick={() => {
                const element = document.getElementById("info") as HTMLElement;
                element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Kliknij, aby zjechać w dół
            </p>

            <InfoView />
          </div>
        </div>

        <ParallaxBanner id="motto" className={styles.motto}>
          <ParallaxBannerLayer
            className={styles.parallax_background}
            image="/images/panorama.webp"
            speed={-20}
          />

          <ParallaxBannerLayer className={styles.parallax_content} speed={-2}>
            <h2>
              ❝&nbsp;Bardziej niż cokolwiek innego – przygotowywanie się
              <br />
              jest sekretem do sukcesu.&nbsp;❞
            </h2>
            <p>~ Henry Ford</p>
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <div id="projects" className={styles.projects}>
          <ProjectsView />
        </div>

        <div className={styles.waves}>
          <Wave
            className={styles.wave1}
            fill="#ffffff"
            paused={false}
            options={{
              height: 60,
              amplitude: 30,
              speed: 0.08,
              points: 4,
            }}
          />
          <Wave
            className={styles.wave2}
            fill="#ffffff"
            paused={false}
            options={{
              height: 60,
              amplitude: 32,
              speed: 0.12,
              points: 3,
            }}
          />
        </div>

        <div className={styles.white_holder}>
          <div id="contact" className={styles.contact}>
            <ContactView />
          </div>
        </div>
      </main>

      <footer>
        <p>
          Stworzone z 💙 przez Jakuba Kłało &#169; 2023 Wszelkie prawa
          zastrzeżone.
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
