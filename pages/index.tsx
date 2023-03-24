import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import React, { useEffect } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import Wave from "react-wavify";
import Typewriter from "typewriter-effect";

import styles from "@/styles/index.module.scss";

import Navbar from "@/components/Navbar/script";
import ScrollButton from "@/components/ScrollButton/script";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function IndexPage() {
  function Reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;
      if (revealTop < window.innerHeight + 50) reveal.classList.add("active");
    });
  }

  useEffect(() => {
    Reveal(); // first time
    window.addEventListener("scroll", () => Reveal()); // every scroll
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
        <ParallaxBanner id="home" className={styles.home}>
          <ParallaxBannerLayer className={styles.background} speed={-30}>
            <ParticlesBackground />
          </ParallaxBannerLayer>

          <ParallaxBannerLayer className={styles.holder}>
            <div className={styles.content}>
              <Navbar />

              <section>
                <h1 className={styles.title}>Hej, nazywam się</h1>
                <h1 className={styles.name}>Jakub Kłało</h1>

                <h2>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      strings: [
                        'Programowanie to moja <span style="color: #ffffff;">pasja</span>',
                        "Front-End Developer",
                        "Pomysłowość to moje drugie imię",
                        "Zawsze służę chętnie pomocą!",
                        "Sprawdź wszystkie moje projekty",
                        "Daj znać, jak działa strona",
                        'Kreatywny, <span style="color: #ffffff;">twórczy</span>, niebanalny',
                        "Nic nie jest mi straszne!",
                        "Jestem tylko studentem...",
                        'Moim zdaniem to nie ma tak,<br/>że <span style="color: #20e22d;">dobrze</span> albo że <span style="color: #eb3030;">nie dobrze</span>.<br/>Gdybym miał powiedzieć, co cenię<br/>w życiu najbardziej, powiedziałbym,<br/>że ludzi. <b>Ekhm...</b> Ludzi, którzy<br/>podali mi pomocną dłoń...',
                        "Czy potrzebujesz pomocy<br/>przy serwerze Discord?",
                      ],
                    }}
                  />
                </h2>
              </section>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <div className={`${styles.holder} ${styles.white}`}>
          <div id="info" className={styles.info}>
            <p
              className={styles.snipped}
              onClick={() => {
                const element = document.getElementById("info") as HTMLElement;
                element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Kliknij, aby zjechać w dół
            </p>

            <section>
              <div className="reveal">
                <div className={styles.text}>
                  <h2>Strony internetowe</h2>

                  <Image
                    className={styles.programs}
                    alt="programs"
                    src="/images/programs/websites.webp"
                    width={679}
                    height={69}
                  />
                  <p>
                    Zaczynałem od bardzo prostych stron dla znajomych, ale
                    z&nbsp;czasem stawały się one coraz bardziej{" "}
                    <u>skomplikowane i&nbsp;wymagające</u>. Dlatego niezbędne
                    było nauczenie się <u>frameworków i&nbsp;bibliotek</u>.
                    Początkowo <b>Vue</b>, a&nbsp;teraz <b>React</b>, dają mi
                    ogromne możliwości, a&nbsp;dzięki tym narzędziom mogę
                    w&nbsp;pełni <b>uwolnić swoją wyobraźnię</b>. Z&nbsp;pomocą{" "}
                    <b>TypeScript</b> oraz <b>Sass</b> jestem w&nbsp;stanie
                    stworzyć <u>dowolny design</u>.
                  </p>
                </div>

                <Image
                  className={styles.image}
                  alt="websites"
                  src="/favicon/icon.svg"
                  width={350}
                  height={350}
                />
              </div>

              <div className={`${styles.reverse} reveal`}>
                <Image
                  className={styles.image}
                  alt="apps"
                  src="/images/apps.svg"
                  width={350}
                  height={350}
                />

                <div className={styles.text}>
                  <h2>Aplikacje</h2>

                  <Image
                    className={styles.programs}
                    alt="programs"
                    src="/images/programs/apps.webp"
                    width={752}
                    height={70}
                  />
                  <p>
                    Potrafię stworzyć różne aplikacje lub skrypty
                    w&nbsp;językach: <b>JavaScript</b>, <b>Pyton</b> czy nawet{" "}
                    <b>bash</b>! Największą szansę na kreatywne wykorzystanie
                    dostępnych możliwości daje mi <u>programowanie botów</u> na
                    różne serwery <b>Discord</b>, a&nbsp;strona, którą teraz
                    przeglądasz została postawiona na moim prywatnym serwerze{" "}
                    <b>Raspberry Pi</b>, którego odpowiednie skonfigurowanie
                    wymagało wiedzy w&nbsp;poruszaniu się po{" "}
                    <u>terminalu Linuxa</u>.
                  </p>
                </div>
              </div>

              <div className="reveal">
                <div className={styles.text}>
                  <h2>Fotografia i&nbsp;montaż filmów</h2>

                  <Image
                    className={styles.programs}
                    alt="programs"
                    src="/images/programs/photos.webp"
                    width={745}
                    height={70}
                  />
                  <p>
                    Hobbystycznie zajmuje się fotografią i&nbsp;montażem filmów.
                    Za każdym razem gdy gdzieś wyjeżdżam,{" "}
                    <u>muszę wziąć ze sobą swoją lustrzankę</u>, bo nigdy nie
                    wiem, co może mnie spotkać! Gdy w&nbsp;moim mieście
                    organizowane są różne wydarzenia, zawsze muszę tam być
                    i&nbsp;robić serie zdjęć, a dzięki mojemu{" "}
                    <b>doświadczeniu w&nbsp;obsłudze programów Adobe</b>, dalsza
                    obróbka zdjęć lub &quot;sklejenie&quot; filmów{" "}
                    <u>nie stanowi żadnego problemu</u>.
                  </p>
                </div>

                <Image
                  className={styles.image}
                  alt="clips"
                  src="/images/clips.svg"
                  width={350}
                  height={350}
                />
              </div>

              {/* <div className={`${styles.more} reveal`}>
                <h3>Chcesz dowiedzieć się o mnie jeszcze więcej?</h3>

                <Link href="/about" className="newButton">
                  <p>Informacje o mnie</p>
                </Link>
              </div> */}
            </section>
          </div>
        </div>

        <ParallaxBanner id="motto" className={styles.motto}>
          <ParallaxBannerLayer
            className={styles.background}
            image="/images/panorama.webp"
            speed={-20}
          />

          <ParallaxBannerLayer className={styles.holder} speed={-2}>
            <h2>
              ❝&nbsp;Bardziej niż cokolwiek innego – przygotowywanie się
              <br />
              jest sekretem do sukcesu.&nbsp;❞
            </h2>
            <p>~ Henry Ford</p>
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <div className={styles.holder}>
          <div id="projects" className={styles.projects}>
            <h2>Kilka z moich projektów:</h2>

            <div className={styles.grid}>
              <Link className="reveal" href="https://piesni.klalo.pl/">
                <Image
                  alt="Śpiewniki"
                  src="/images/projects/spiewniki.svg"
                  width={150}
                  height={150}
                />

                <div className={styles.text}>
                  <div className={styles.title}>
                    <h3>Śpiewniki</h3>
                    <h4>piesni.klalo.pl</h4>
                  </div>

                  <p>
                    Wszystkie śpiewniki Badaczy Pisma Świętego zebrane w jednym
                    miejscu.
                  </p>
                </div>
              </Link>

              <Link className="reveal" href="https://fonetyka.klalo.pl/">
                <Image
                  alt="Fonetyka"
                  src="/images/projects/fonetyka.svg"
                  width={150}
                  height={150}
                />

                <div className={styles.text}>
                  <div className={styles.title}>
                    <h3>Fonetyka</h3>
                    <h4>fonetyka.klalo.pl</h4>
                  </div>

                  <p>Autorski polski generator zapisu fonetycznego.</p>
                </div>
              </Link>

              <Link className="reveal" href="https://metrum.klalo.pl/">
                <Image
                  alt="Metrum"
                  src="/images/projects/metrum.webp"
                  width={150}
                  height={150}
                />

                <div className={styles.text}>
                  <div className={styles.title}>
                    <h3>Metrum</h3>
                    <h4>metrum.klalo.pl</h4>
                  </div>

                  <p>
                    Autorski zaawansowany bot muzyczny na platformę Discord.
                  </p>
                </div>
              </Link>

              <Link
                className="reveal"
                href="https://www.youtube.com/@NANIKESC/"
              >
                <Image
                  alt="NANIKESC"
                  src="/images/projects/nanikesc.webp"
                  width={150}
                  height={150}
                />

                <div className={styles.text}>
                  <div className={styles.title}>
                    <h3>NANIK ESC</h3>
                    <h4>@nanikesc</h4>
                  </div>

                  <p>
                    Mój kanał na platformie YouTube o tematyce Konkursu Piosenki
                    Eurowizji.
                  </p>
                </div>
              </Link>
            </div>

            <div className={`${styles.more} reveal`}>
              <h3>Resztę projektów możesz sprawdzić na moim Githubie:</h3>

              <Link href="https://github.com/Quanosek/" className="newButton">
                <p>Wszystkie projekty</p>
              </Link>
            </div>
          </div>
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

        <div className={`${styles.holder} ${styles.white}`}>
          <div id="contact" className={styles.contact}>
            <h2>Skontaktuj&nbsp;się ze&nbsp;mną!</h2>

            <div className={`${styles.columns} reveal`}>
              <div>
                <Link href={"tel:+48882461181"} className={styles.element}>
                  <div className={styles.image}>
                    <Image
                      alt="tel"
                      src={"/icons/phone.svg"}
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className={styles.text}>
                    <h3>Numer telefonu:</h3>
                    <p>+48 882 461 181</p>
                  </div>
                </Link>

                <Link
                  href={"mailto:kubaklalo@gmail.com"}
                  className={styles.element}
                >
                  <div className={styles.image}>
                    <Image
                      alt="mail"
                      src={"/icons/email.svg"}
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className={styles.text}>
                    <h3>Adres e-mail:</h3>
                    <p>kubaklalo@gmail.com</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link
                  href={"https://m.me/quanosek/"}
                  className={styles.element}
                >
                  <div className={styles.image}>
                    <Image
                      alt="fb"
                      src={"/icons/facebook.svg"}
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className={styles.text}>
                    <h3>Facebook</h3>
                    <p>@quanosek</p>
                  </div>
                </Link>

                <Link
                  href={
                    "https://twitter.com/messages/compose?recipient_id=@quanosek"
                  }
                  className={styles.element}
                >
                  <div className={styles.image}>
                    <Image
                      alt="tw"
                      src={"/icons/twitter.svg"}
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className={styles.text}>
                    <h3>Twitter</h3>
                    <p>@quanosek</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ScrollButton />
    </>
  );
}
