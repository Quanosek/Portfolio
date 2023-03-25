import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./styles.module.scss";

export default function Navbar() {
  const [state, setState] = useState(false);

  useEffect(() => {
    // hide menu on scroll
    window.addEventListener("scroll", () => {
      if (state) setState(!state);
    });
  }, [state]);

  return (
    <div className={styles.navbar}>
      <nav>
        <Buttons />

        <button
          title="Otwórz menu"
          className={styles.hamburger}
          onClick={() => setState(!state)}
        >
          <div className={state ? `${styles.active}` : ""} />
        </button>
      </nav>

      <div
        className={`${styles.mobile} ${state ? `${styles.active}` : ""}`}
        onClick={() => {
          if (state) setState(!state);
        }}
      >
        <div className={`${styles.menu} ${state ? `${styles.active}` : ""}`}>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className={styles.buttons}>
      <div className={styles.text}>
        <Link href="/CV_Jakub_Klalo.pdf" target="_blank">
          <p>CV</p>
        </Link>

        <Link href="/#info">
          <p>Informacje o mnie</p>
        </Link>

        <Link href="/#projects">
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
            className="icon"
            alt="github"
            src="/icons/github.svg"
            width={25}
            height={25}
          />
        </Link>

        <Link
          title="Facebook"
          href="https://www.facebook.com/Quanosek/"
          target="_blank"
        >
          <Image
            className="icon"
            alt="facebook"
            src="/icons/facebook.svg"
            width={25}
            height={25}
          />
        </Link>

        <Link
          title="Twitter"
          href="https://twitter.com/Quanosek/"
          target="_blank"
        >
          <Image
            className="icon"
            alt="twitter"
            src="/icons/twitter.svg"
            width={25}
            height={25}
          />
        </Link>

        <Link title="E-Mail" href="mailto:kubaklalo@gmail.com" target="_blank">
          <Image
            className="icon"
            alt="email"
            src="/icons/email.svg"
            width={25}
            height={25}
          />
        </Link>
      </div>
    </div>
  );
}
