"use client";

import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

import Wave from "react-wavify";
import Typewriter from "typewriter-effect";

import styles from "@/styles/home.module.scss";
import Particles from "../components/particles";

// motto font-face
const GentiumPlus = localFont({
  src: "../fonts/gentium_plus_bold.woff2",
  weight: "600",
  display: "swap",
});

export default function HomePage() {
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
              src={`/assets/info/programs/${name}.svg`}
              alt={name}
              width={60}
              height={60}
              draggable={false}
            />
          );
        })}
      </div>
    );
  };

  // my projects section quick tiles
  const ProjectTile = (params: { project: any }) => {
    const project = params.project;

    return (
      <Link href={`https://${project.link}/`} target="_blank">
        <Image
          alt={project.title}
          src={`/assets/projects/${project.img}`}
          width={125}
          height={125}
          draggable={false}
          onError={(e: any) => (e.target.src = "/assets/projects/vercel.svg")}
        />

        <div className={styles.text}>
          <div className={styles.title}>
            <h3>{project.title}</h3>
            <h4>{project.link}</h4>
          </div>

          <p>{project.description}</p>
        </div>
      </Link>
    );
  };

  // main page
  return (
    <main>
      <section>
        <div className="background">
          <Particles />
        </div>

        {/* --- HOME SECTION --- */}

        <div className={`${styles.home} content`}>
          <div className={styles.text}>
            <p>Hej, nazywam się</p>
            <h1>Jakub Kłało</h1>

            <div className={styles.typeWriter}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  strings: [
                    'Programowanie to moja <span style="color: #ffffff;">pasja</span>',
                    "Front-End Developer",
                    "Pomysłowość to moje drugie imię",
                    "Zawsze chętnie służę pomocą!",
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
            </div>
          </div>

          <button
            className={styles.snipped}
            onClick={() => {
              const element = document.getElementById("info") as HTMLElement;
              element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Kliknij, aby zjechać w dół
          </button>
        </div>
      </section>

      {/* --- INFO SECTION --- */}

      <section id="info" className="white">
        <div className={`${styles.info} content`}>
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
                <b>uwolnić swoją wyobraźnię</b>. Z&nbsp;pomocą <b>TypeScript</b>{" "}
                oraz <b>Sass</b> jestem w&nbsp;stanie stworzyć{" "}
                <u>dowolny design</u>.
              </p>
            </div>

            <Image
              className={styles.image}
              alt="websites"
              src="/assets/info/images/rocket.svg"
              width={330}
              height={330}
              draggable={false}
            />
          </div>

          <div className={styles.reverse}>
            <Image
              className={styles.image}
              alt="apps"
              src="/assets/info/images/apps.svg"
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
                Hobbystycznie zajmuje się fotografią i&nbsp;montażem filmów. Za
                każdym razem gdy gdzieś wyjeżdżam,{" "}
                <u>muszę wziąć ze sobą swoją lustrzankę</u>, bo nigdy nie wiem,
                co może mnie spotkać! Gdy w&nbsp;moim mieście organizowane są
                różne wydarzenia, zawsze muszę tam być i&nbsp;robić serie zdjęć,
                a dzięki mojemu{" "}
                <b>doświadczeniu w&nbsp;obsłudze programów Adobe</b>, dalsza
                obróbka zdjęć lub &quot;sklejenie&quot; filmów{" "}
                <u>nie stanowi żadnego problemu</u>.
              </p>
            </div>

            <Image
              className={styles.image}
              alt="clips"
              src="/assets/info/images/clips.svg"
              width={330}
              height={330}
              draggable={false}
            />
          </div>

          <div className={styles.more}>
            <Link href="/about">
              <p>Dowiedz się więcej!</p>
            </Link>
          </div>
        </div>
      </section>

      {/* --- MOTTO SECTION --- */}

      <section>
        <div
          className="background blur"
          style={{
            backgroundImage: "url(/assets/panorama.webp)",
          }}
        />

        <div className={`${styles.motto} ${GentiumPlus.className} content`}>
          <h2>
            ❝&nbsp;Bardziej niż cokolwiek innego – przygotowywanie się
            <br />
            jest sekretem do sukcesu.&nbsp;❞
          </h2>
          <p>~ Henry Ford</p>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}

      <section>
        <div className={`${styles.projects} content`}>
          <h2>Kilka z moich projektów:</h2>

          <div className={styles.grid}>
            <ProjectTile
              project={{
                link: "spiewniki.klalo.pl",
                img: "spiewniki.svg",
                title: "Śpiewniki",
                description:
                  "Zebrane w jednym miejscu śpiewniki i pieśni religijne",
              }}
            />

            <ProjectTile
              project={{
                link: "pogoda.klalo.pl",
                img: "pogoda.svg",
                title: "Pogoda",
                description: "Prosta aplikacja API pogody z wyszukiwarką",
              }}
            />

            <ProjectTile
              project={{
                link: "fonetyka.klalo.pl",
                img: "fonetyka.svg",
                title: "Fonetyka",
                description: "Polski generator zapisu fonetycznego",
              }}
            />

            <ProjectTile
              project={{
                link: "metrum.klalo.pl",
                img: "metrum.webp",
                title: "Metrum",
                description: "Zaawansowany bot muzyczny na platformę Discord",
              }}
            />
          </div>

          <div className={styles.more}>
            <h3>Resztę projektów możesz sprawdzić klikając w ten przycisk:</h3>

            <Link href="/projects">
              <p>Wszystkie projekty</p>
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.waves}>
        <Wave
          fill="#ffffff"
          paused={false}
          options={{
            height: 50,
            amplitude: 30,
            speed: 0.08,
            points: 4,
          }}
        />
        <Wave
          fill="#ffffff"
          paused={false}
          options={{
            height: 50,
            amplitude: 32,
            speed: 0.12,
            points: 3,
          }}
        />
      </div>

      {/* --- CONTACT SECTION --- */}

      <section className="white">
        <div className={`${styles.contact} content`}>
          <h2>Skontaktuj&nbsp;się ze&nbsp;mną!</h2>

          <div className={styles.columns}>
            <div>
              <Link href={"tel:+48882461181"} className={styles.element}>
                <div className={styles.image}>
                  <Image
                    src={"/icons/phone.svg"}
                    alt="phone"
                    width={40}
                    height={40}
                    draggable={false}
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
                    src={"/icons/email.svg"}
                    alt="email"
                    width={40}
                    height={40}
                    draggable={false}
                  />
                </div>

                <div className={styles.text}>
                  <h3>Adres e-mail:</h3>
                  <p>kubaklalo@gmail.com</p>
                </div>
              </Link>
            </div>

            <div>
              <Link href={"https://m.me/quanosek/"} className={styles.element}>
                <div className={styles.image}>
                  <Image
                    src={"/icons/messenger.svg"}
                    alt="messenger"
                    width={40}
                    height={40}
                    draggable={false}
                  />
                </div>

                <div className={styles.text}>
                  <h3>Messenger</h3>
                  <p>@quanosek</p>
                </div>
              </Link>

              <Link
                href={"https://x.com/messages/compose?recipient_id=@quanosek"}
                className={styles.element}
              >
                <div className={styles.image}>
                  <Image
                    src={"/icons/x.com.svg"}
                    alt="x.com"
                    width={40}
                    height={40}
                    draggable={false}
                  />
                </div>

                <div className={styles.text}>
                  <h3>X (Twitter)</h3>
                  <p>@quanosek</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
