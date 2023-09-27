"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "@/styles/components/navigation.module.scss";

export default function NavigationComponent() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const TopScroll = document.documentElement.scrollTop;
      const LeftScroll = document.documentElement.scrollLeft;

      window.onscroll = () => window.scrollTo(LeftScroll, TopScroll);
    } else window.onscroll = () => {};
  }, [active]);

  const Buttons = () => {
    return (
      <div className={styles.buttons}>
        <div className={styles.text}>
          <Link href="/CV_Jakub_Klalo.pdf" target="_blank">
            <p>CV</p>
          </Link>

          <Link href="/about">
            <p>Informacje o mnie</p>
          </Link>

          <Link href="/projects">
            <p>Wszystkie projekty</p>
          </Link>

          <Link href="https://ko-fi.com/Quanosek/" target="_blank">
            <p>Wesprzyj mnie</p>
          </Link>
        </div>

        <div className={styles.icons}>
          <Link
            title="Github"
            href="https://github.com/Quanosek/"
            target="_blank"
          >
            <Image
              src="/icons/github.svg"
              alt="github"
              width={25}
              height={25}
              draggable={false}
            />
          </Link>

          <Link
            title="Facebook"
            href="https://facebook.com/Quanosek/"
            target="_blank"
          >
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={25}
              height={25}
              draggable={false}
            />
          </Link>

          <Link
            title="X (Twitter)"
            href="https://x.com/Quanosek/"
            target="_blank"
          >
            <Image
              src="/icons/x.com.svg"
              alt="x.com"
              width={25}
              height={25}
              draggable={false}
            />
          </Link>

          <Link
            title="LinkedIn"
            href="https://linkedin.com/in/Quanosek/"
            target="_blank"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="email"
              width={25}
              height={25}
              draggable={false}
            />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <header>
      <div className={styles.navigation}>
        <section>
          <Link
            className={styles.title}
            title="Powrót do strony głównej"
            href="/"
          >
            Portfolio
          </Link>

          <Buttons />

          <button
            className={styles.hamburger}
            onClick={() => setActive(!active)}
          >
            <div className={active ? `${styles.active}` : ""} />
          </button>
        </section>
      </div>

      <div
        className={`${styles.mobile} ${active ? `${styles.active}` : ""}`}
        onClick={() => setActive(false)}
      >
        <div className={styles.menu}>
          <Buttons />
        </div>
      </div>
    </header>
  );
}
