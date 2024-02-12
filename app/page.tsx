"use client";

import Link from "next/link";
import Image from "next/image";

import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

import Particles from "@/components/particles";
import Waves from "@/components/waves";
import DynamicTitle from "@/functions/dynamicTitle";
import styles from "@/styles/home.module.scss";

// motto font-face
import localFont from "next/font/local";
const GentiumPlus = localFont({
  src: "../fonts/gentium_plus_bold.woff2",
  display: "swap",
});

export default function HomePage() {
  DynamicTitle("Moje portfolio / klalo.pl");

  // interactive programs icons by names
  const Programs = (params: { programs: string[] }) => {
    const programs = params.programs;

    return (
      <div className={styles.programs}>
        {programs.map((name: string, index: number) => {
          return (
            <Image
              key={index}
              title={name}
              src={`/icons/programs/${name}.svg`}
              alt={name}
              width={40}
              height={40}
              draggable={false}
            />
          );
        })}
      </div>
    );
  };

  // my projects section quick tiles
  const ProjectTile = ({ link, img, title, description }: any) => {
    return (
      <Link href={`https://${link}/`} target="_blank">
        <Image
          src={`/assets/projects/${img}_icon.svg`}
          alt={title}
          width={125}
          height={125}
          draggable={false}
        />

        <div className={styles.text}>
          <div className={styles.title}>
            <h3>{title}</h3>
            <h4>{link}</h4>
          </div>

          <p>{description}</p>
        </div>
      </Link>
    );
  };

  // main page
  return (
    <>
      <div className={styles.welcomeHandler}>
        <div className={styles.welcome}>
          <p>Hej, nazywam się</p>
          <h1>Jakub Kłało</h1>

          <div className={styles.typeWriter}>
            <Typewriter
              options={{
                strings: [
                  "Witaj na mojej stronie!",
                  'Programowanie to moja <span style="color: #ffffff;">pasja</span>',
                  "Front-End Developer",
                  "Pomysłowość to moje drugie imię",
                  "Zawsze chętnie służę pomocą!",
                  "Sprawdź wszystkie moje projekty",
                  "Daj znać, jak działa strona",
                  'Kreatywny, <span style="color: #ffffff;">twórczy</span>, niebanalny...',
                  "Nic nie jest mi straszne!",
                  "Potrzebujesz bota Discord?",
                ],
                loop: true,
                autoStart: true,
              }}
            />
          </div>

          <button
            className={styles.snipped}
            onClick={() => {
              const element = document.getElementById("info") as HTMLElement;
              element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Kliknij, aby zjechać w&nbsp;dół
          </button>
        </div>

        <div className={styles.particlesBackground}>
          <Particles />
        </div>
      </div>

      <Waves />

      <div id="info" className={styles.infoHandler}>
        <div className={styles.info}>
          <Fade triggerOnce>
            <div>
              <div className={styles.text}>
                <h2>Strony internetowe</h2>

                <Programs
                  programs={[
                    "adobe-xd",
                    "html-5",
                    "css-3",
                    "javascript",
                    "typescript",
                    "sass",
                    "react",
                    "vue",
                    "vite",
                  ]}
                />

                <p>
                  Zaczynałem od bardzo prostych stron dla znajomych, ale
                  z&nbsp;czasem stawały się one coraz bardziej{" "}
                  <u>skomplikowane i&nbsp;wymagające</u>. Dlatego niezbędne było
                  nauczenie się <u>frameworków i&nbsp;bibliotek</u>. Początkowo{" "}
                  <b>Vue</b>, a&nbsp;teraz <b>React</b>, dają mi ogromne
                  możliwości, a&nbsp;dzięki tym narzędziom mogę w&nbsp;pełni{" "}
                  <b>uwolnić swoją wyobraźnię</b>. Z&nbsp;pomocą{" "}
                  <b>TypeScript</b> oraz <b>Sass</b> jestem w&nbsp;stanie
                  stworzyć <u>dowolny design</u>.
                </p>
              </div>

              <Image
                className={styles.image}
                src="/assets/home/rocket.svg"
                alt="websites"
                width={330}
                height={330}
                draggable={false}
              />
            </div>

            <div className={styles.reverse}>
              <Image
                className={styles.image}
                src="/assets/home/apps.svg"
                alt="apps"
                width={330}
                height={330}
                draggable={false}
              />

              <div className={styles.text}>
                <h2>Aplikacje</h2>

                <Programs
                  programs={[
                    "raspberry-pi",
                    "vs-code",
                    "node-js",
                    "npm",
                    "python",
                    "github",
                    "git",
                    "discord",
                  ]}
                />

                <p>
                  Potrafię stworzyć różne aplikacje lub skrypty w&nbsp;językach:{" "}
                  <b>JavaScript</b>, <b>Pyton</b> czy nawet <b>bash</b>!
                  Największą szansę na kreatywne wykorzystanie dostępnych
                  możliwości daje mi <u>programowanie botów</u> na różne serwery{" "}
                  <b>Discord</b>, a&nbsp;strona, którą teraz przeglądasz została
                  postawiona na moim prywatnym serwerze <b>Raspberry Pi</b>,
                  którego odpowiednie skonfigurowanie wymagało wiedzy
                  w&nbsp;poruszaniu się po <u>terminalu Linuxa</u>.
                </p>
              </div>
            </div>

            <div>
              <div className={styles.text}>
                <h2>Fotografia i&nbsp;montaż filmów</h2>

                <Programs
                  programs={[
                    "gimp",
                    "photoshop",
                    "lightroom",
                    "illustrator",
                    "premiere-pro",
                    "after-effects",
                    "audition",
                    "audacity",
                  ]}
                />

                <p>
                  Hobbystycznie zajmuje się fotografią i&nbsp;montażem filmów.
                  Za każdym razem gdy gdzieś wyjeżdżam,{" "}
                  <u>muszę wziąć ze sobą swoją lustrzankę</u>, bo nigdy nie
                  wiem, co może mnie spotkać! Gdy w moim mieście organizowane są
                  różne wydarzenia, zawsze muszę tam być i&nbsp;robić serie
                  zdjęć, a&nbsp;dzięki mojemu{" "}
                  <b>doświadczeniu w&nbsp;obsłudze programów Adobe</b>, dalsza
                  obróbka zdjęć lub montaż filmów{" "}
                  <u>nie stanowi żadnego problemu</u>.
                </p>
              </div>

              <Image
                className={styles.image}
                src="/assets/home/clips.svg"
                alt="clips"
                width={330}
                height={330}
                draggable={false}
                style={{
                  scale: "0.95",
                }}
              />
            </div>

            <div>
              <Link href="/about" className={styles.more}>
                <p>Dowiedz się więcej</p>
              </Link>
            </div>
          </Fade>
        </div>
      </div>

      <div className={styles.mottoHandler}>
        <div className={`${GentiumPlus.className} ${styles.motto}`}>
          <h2>
            „Bardziej niż cokolwiek innego – przygotowywanie się
            <br />
            jest sekretem do sukcesu.”
          </h2>

          <p>~ Henry Ford</p>
        </div>

        <div
          className={styles.parallaxBackground}
          style={{ backgroundImage: "url(/assets/home/panorama.webp)" }}
        />
      </div>

      <div className={styles.projectsHandler}>
        <div className={`${styles.projects} content`}>
          <h2>Kilka z&nbsp;moich projektów:</h2>

          <Fade triggerOnce>
            <div className={styles.grid}>
              <Fade cascade damping={0.1} triggerOnce>
                <ProjectTile
                  link="spiewniki.klalo.pl"
                  img="spiewniki"
                  title="Śpiewniki"
                  description="Zebrane w&nbsp;jednym miejscu śpiewniki i&nbsp;pieśni religijne"
                />

                <ProjectTile
                  link="metrum.klalo.pl"
                  img="metrum"
                  title="Metrum"
                  description="Zaawansowany bot muzyczny na platformę Discord"
                />

                <ProjectTile
                  link="fonetyka.klalo.pl"
                  img="fonetyka"
                  title="Fonetyka"
                  description="Polski generator zapisu fonetycznego"
                />

                <ProjectTile
                  link="games.klalo.pl"
                  img="games"
                  title="Pokój gier"
                  description="Przeglądarkowe wersje znanych i&nbsp;lubianych gier"
                />
              </Fade>
            </div>

            <div className={styles.more}>
              <h3>
                Resztę projektów możesz sprawdzić klikając w&nbsp;ten przycisk:
              </h3>

              <Link href="/projects">
                <p>Zobacz moje projekty!</p>
              </Link>
            </div>
          </Fade>
        </div>
      </div>

      <Waves />

      <div className={styles.question}>
        <Fade cascade damping={0.1} triggerOnce>
          <div className={styles.title}>
            <h2>Masz jakieś pytanie?</h2>

            <p>
              Chętnie odpowiem na każde z&nbsp;nich, a&nbsp;jeżeli potrzebujesz
              pomocy, to jestem do Twojej dyspozycji!
            </p>
          </div>

          <div className={styles.button}>
            <Link href="/about#form">
              <p>Przejdź do formularza</p>
            </Link>
          </div>
        </Fade>
      </div>
    </>
  );
}
