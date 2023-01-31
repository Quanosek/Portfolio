import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import styles from "./title.module.scss";
import NavigationButtons from "./NavigationButtons";

export default function TitleView() {
  let [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // scroll-to-top
    document.addEventListener("scroll", () => {
      setIsActive((current) => {
        if (current) current = !current;
        return current;
      });
    });
  });

  return (
    <>
      <div className={styles.title_view}>
        {/* navbar */}
        <div className={styles.navbar}>
          <NavigationButtons />

          <button
            title="menu"
            className={styles.hamburger}
            onClick={() => {
              setIsActive((current) => !current);
            }}
          >
            <div
              className={`${styles.bar} ${isActive ? `${styles.active}` : ""}`}
            ></div>
          </button>
        </div>

        {/* animated title */}
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
        </div>
      </div>

      {/* mobile-only menu-buttons */}
      <div
        className={`${styles.mobile_menu} ${
          isActive ? `${styles.active}` : ""
        }`}
        onClick={() => {
          setIsActive((current) => !current);
        }}
      >
        <NavigationButtons />
      </div>
    </>
  );
}
