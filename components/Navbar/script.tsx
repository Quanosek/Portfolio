import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./styles.module.scss";

export default function Navbar() {
  let [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsActive((current) => {
        if (current) current = !current;
        return current;
      });
    });
  });

  return (
    <>
      <div className={styles.navbar}>
        <Buttons />

        <button
          title="Otwórz menu"
          className={styles.hamburger}
          onClick={() => setIsActive((current) => !current)}
        >
          <div className={isActive ? `${styles.active}` : ""} />
        </button>
      </div>

      <div
        className={`${styles.mobile} ${isActive ? `${styles.active}` : ""}`}
        onClick={() => setIsActive((current) => !current)}
      >
        <Buttons />
      </div>
    </>
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
