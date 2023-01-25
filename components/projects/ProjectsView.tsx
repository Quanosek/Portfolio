import Link from "next/link";
import Image from "next/image";

import styles from "./projects.module.scss";

export default function ProjectsView() {
  return (
    <>
      <h2 className={styles.header}>Wszystkie moje projekty</h2>

      <div className={styles.grid}>
        <Link className={styles.project} href="https://piesni.klalo.pl/">
          <Image
            alt="Śpiewniki"
            src="/images/spiewniki.svg"
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

        <Link className={styles.project} href="https://fonetyka.klalo.pl/">
          <Image
            alt="Fonetyka"
            src="/images/fonetyka.svg"
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

        <Link className={styles.project} href="https://metrum.klalo.pl/">
          <Image
            alt="Metrum"
            src="/images/metrum.png"
            width={150}
            height={150}
          />
          <div className={styles.text}>
            <div className={styles.title}>
              <h3>Metrum</h3>
              <h4>metrum.klalo.pl</h4>
            </div>
            <p>Autorski zaawansowany bot muzyczny Discord.</p>
          </div>
        </Link>

        <Link
          className={styles.project}
          href="https://www.youtube.com/@NANIKESC/"
        >
          <Image
            alt="NANIKESC"
            src="/images/nanikesc.jpg"
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

      <div className={styles.more}>
        <h3>Resztę moich projektów możesz sprawdzić na moim Githubie:</h3>
        <button>Zobacz więcej!</button>
      </div>
    </>
  );
}
