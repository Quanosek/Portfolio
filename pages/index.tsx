import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";
import Typewriter from "typewriter-effect";

import styles from "@/styles/home.module.scss";
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
        <div className={styles.titleMenu}>
          <div className={styles.navbar}>
            <div>
              <Link href="">
                <button>CV</button>
              </Link>
              <Link href="#about">
                <button>Informacje o mnie</button>
              </Link>

              <Link href="#projects">
                <button>Wszystkie projekty</button>
              </Link>

              <Link href="">
                <button>Wesprzyj moją twórczość</button>
              </Link>
            </div>
            <div>
              <Link
                title="Github"
                href="https://github.com/Quanosek"
                target="_blank"
              >
                <button>
                  <Image
                    alt="github"
                    src="/icons/github.svg"
                    width={25}
                    height={25}
                  />
                </button>
              </Link>

              <Link
                title="Facebook"
                href="https://www.facebook.com/Quanosek/"
                target="_blank"
              >
                <button>
                  <Image
                    alt="facebook"
                    src="/icons/facebook.svg"
                    width={25}
                    height={25}
                  />
                </button>
              </Link>

              <Link
                title="Twitter"
                href="https://twitter.com/Quanosek"
                target="_blank"
              >
                <button>
                  <Image
                    alt="twitter"
                    src="/icons/twitter.svg"
                    width={25}
                    height={25}
                  />
                </button>
              </Link>

              <Link
                title="E-Mail"
                href="mailto:kubaklalo@gmail.com"
                target="_blank"
              >
                <button>
                  <Image
                    alt="email"
                    src="/icons/email.svg"
                    width={25}
                    height={25}
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.title}>
            <h1 className={styles.subtitle}>Hej, nazywam się</h1>
            <h1 className={styles.name}>Jakub Kłało</h1>
            <h2>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  strings: [
                    'Programowanie to moja <span style="color: #ffffff;">pasja</span>',
                    "Pomysłowość to moje drugie imię",
                    "Sprawdź wszystkie moje projekty",
                    "Daj znać, jak działa strona",
                    'Kreatywny, <span style="color: #ffffff;">twórczy</span>, niebanalny',
                    "Nic nie jest mi straszne!",
                    "Jestem tylko studentem...",
                    'Moim zdaniem to nie ma tak,<br/>że <span style="color: #20e22d;">dobrze</span> albo że <span style="color: #eb3030;">nie dobrze</span>.<br/>Gdybym miał powiedzieć, co cenię<br/>w życiu najbardziej, powiedziałbym,<br/>że ludzi. <strong>Ekhm...</strong> Ludzi, którzy<br/>podali mi pomocną dłoń...',
                  ],
                }}
              />
            </h2>
          </div>
        </div>

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
        className={styles.scrollButton}
        title="Wróć na samą górę."
      >
        <Image src="/icons/arrow.svg" height={30} width={30} alt="up" />
      </button>
    </>
  );
}
