import { useState } from "react";
import Typewriter from "typewriter-effect";

import styles from "./title.module.scss";
import NavigationButtons from "./NavigationButtons";

export default function TitleView() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((current) => !current);
  }

  return (
    <>
      <div className={styles.title_view}>
        <div className={styles.navbar}>
          <NavigationButtons />

          <button className={styles.hamburger} onClick={handleClick}>
            <div
              className={`${styles.bar} ${isActive ? `${styles.active}` : ""}`}
            ></div>
          </button>
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

      <div
        className={`${styles.mobile_menu} ${
          isActive ? `${styles.active}` : ""
        }`}
      >
        <NavigationButtons />
      </div>
    </>
  );
}
