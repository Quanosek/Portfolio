"use client";

import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import DynamicTitle from "@/lib/dynamicTitle";

import styles from "@/styles/projects.module.scss";

interface ProjectProps {
  name: string;
  title: string;
  githubLink: string;
  websiteLink: string;
  description: React.ReactNode;
  technologies: string[];
  watermarkStyle?: React.CSSProperties;
}

export default function ProjectsPage() {
  DynamicTitle("Projekty - Portfolio / klalo.pl");

  const Project = ({
    name,
    title,
    githubLink,
    websiteLink,
    description,
    technologies,
    watermarkStyle,
  }: ProjectProps) => (
    <Link href={websiteLink} className={styles.project}>
      <Image
        className={styles.websiteImage}
        src={`/assets/projects/${name}.webp`}
        alt="project"
        width={500}
        height={300}
        draggable={false}
      />

      <div className={styles.mobileBackground}>
        <Image
          src={`/assets/projects/${name}.webp`}
          alt="project"
          width={500}
          height={300}
          draggable={false}
          priority={true}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.topDiv}>
          <div className={styles.projectTitle}>
            <div>
              <Image
                src={`/assets/projects/${name}_icon.svg`}
                alt="watermark"
                width={200}
                height={200}
                draggable={false}
                style={watermarkStyle}
              />
            </div>

            <h2>{title}</h2>
          </div>

          <Link href={githubLink} legacyBehavior>
            <div className={styles.githubLink}>
              <Image
                title="Kod źródłowy Github"
                src="/icons/github_2.svg"
                alt="github"
                width={40}
                height={40}
                draggable={false}
              />
            </div>
          </Link>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.technologies}>
          {technologies.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>
      </div>

      <Image
        className={styles.watermark}
        src={`/assets/projects/${name}_icon.svg`}
        alt="watermark"
        width={200}
        height={200}
        draggable={false}
        style={watermarkStyle}
      />
    </Link>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wszystkie moje projekty</h1>

      <div className={styles.projectsList}>
        <Fade triggerOnce className={styles.centerDiv}>
          <Project
            name="spiewniki"
            title="Śpiewniki"
            description={
              <>
                Niezawodna aplikacja internetowa, działająca również
                w&nbsp;trybie offline, zawierająca bogatą bazę danych{" "}
                <b>ponad 1000</b> różnych pieśni. Umożliwia bardzo proste
                wyszukiwanie pieśni po jej <b>tytule lub treści tekstu</b>,
                następnie np. wyświetlenie jej wraz <b>z&nbsp;akordami</b>{" "}
                w&nbsp;formie prezentacji jako pojedyncze zwrotki.
              </>
            }
            technologies={["Next.js", "React", "TypeScript", "PWA", "Sass"]}
            githubLink="https://github.com/Quanosek/spiewniki-next"
            websiteLink="https://spiewniki.klalo.pl/"
            watermarkStyle={{
              opacity: "18%",
              scale: "1.1",
            }}
          />

          <Project
            name="metrum"
            title="Metrum"
            description={
              <>
                Zaawansowany bot muzyczny na platformie Discord, umożliwiający
                odtwarzanie dowolnych materiałów z&nbsp;<b>YouTube, Spotify</b>{" "}
                i&nbsp;wielu innych popularnych serwisów. Posiada{" "}
                <b>rozbudowany system komend</b>, dzięki którym możliwe jest
                m.in.: <b>zarządzanie kolejką</b> czy <b>wyświetlanie tekstu</b>{" "}
                obecnie granego utworu.
              </>
            }
            technologies={[
              "Node.js",
              "Discord.js",
              "Distube",
              "JavaScript",
              "Vue",
            ]}
            githubLink="https://github.com/Quanosek/Metrum.js"
            websiteLink="https://metrum.klalo.pl/"
            watermarkStyle={{
              rotate: "-8deg",
              scale: "0.85",
            }}
          />

          <Project
            name="fonetyka"
            title="Fonetyka"
            description={
              <>
                Aplikacja internetowa o&nbsp;bardzo prostym i&nbsp;intuicyjnym
                interfejsie, służąca do <b>konwersji dowolnych słów</b>{" "}
                w&nbsp;języku polskim na dwa rodzaje zapisu fonetycznego -{" "}
                <b>AS</b> i&nbsp;<b>IPA</b>. Aplikacja posiada również{" "}
                <b>wbudowaną historię</b> wcześniej wpisach słów wraz z&nbsp;ich
                wygenerowanym zapisem fonetycznym.
              </>
            }
            technologies={["Next.js", "React", "TypeScript", "PWA", "Sass"]}
            githubLink="https://github.com/Quanosek/Fonetyka"
            websiteLink="https://fonetyka.klalo.pl/"
          />

          <Project
            name="games"
            title="Pokój gier"
            description={
              <>
                Platforma zawierająca <b>wiele prostych gier</b> do
                samodzielnego <b>uzupełnienia</b> o&nbsp;pytania lub hasła,
                możliwe później do wyświetlenia na <b>zewnętrznym ekranie</b>{" "}
                np. rzutniku. Strona oferuje nie tylko gry typu <b>quiz</b>, ale
                również dokładnie odwzorowane kopie znanych i&nbsp;lubianych
                przez wszystkich <b>teleturniejów</b>.
              </>
            }
            technologies={["Next.js", "React", "TypeScript", "Sass"]}
            githubLink="https://github.com/Quanosek/Games"
            websiteLink="https://games.klalo.pl/"
          />

          <Project
            name="weather"
            title="Pogoda"
            description={
              <>
                Prosta aplikacja pogodowa, wykorzystująca darmowe <b>API</b> do
                wyświetlania aktualnej pogody <b>w&nbsp;dowolnym miejscu</b> na
                świecie na podstawie <b>dynamicznego wyszukiwania</b> lub{" "}
                <b>obecnej lokalizacji</b>. Aplikacja pokazuje również mapę
                pogodową dla wybranego obszaru oraz prognozę na najbliższe dni.
              </>
            }
            technologies={["Next.js", "React", "API", "TypeScript", "Sass"]}
            githubLink="https://github.com/Quanosek/Weather"
            websiteLink="https://weather.klalo.pl/"
            watermarkStyle={{
              bottom: "-1rem",
            }}
          />
        </Fade>
      </div>
    </div>
  );
}
