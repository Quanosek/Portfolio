import Link from "next/link";
import Image from "next/image";

import styles from "./title.module.scss";

export default function NavigationButtons() {
  return (
    <>
      <div className={styles.main}>
        <Link href="">
          <button>CV</button>
        </Link>

        <Link href="#about">
          <button>Informacje o mnie</button>
        </Link>

        <Link href="#projects">
          <button>Wszystkie projekty</button>
        </Link>

        <Link href="">
          <button>Wesprzyj moją twórczość</button>
        </Link>
      </div>

      <div className={styles.icons}>
        <Link title="Github" href="https://github.com/Quanosek" target="_blank">
          <button>
            <Image
              alt="github"
              src="/icons/github.svg"
              width={25}
              height={25}
            />
          </button>
        </Link>

        <Link
          title="Facebook"
          href="https://www.facebook.com/Quanosek/"
          target="_blank"
        >
          <button>
            <Image
              alt="facebook"
              src="/icons/facebook.svg"
              width={25}
              height={25}
            />
          </button>
        </Link>

        <Link
          title="Twitter"
          href="https://twitter.com/Quanosek"
          target="_blank"
        >
          <button>
            <Image
              alt="twitter"
              src="/icons/twitter.svg"
              width={25}
              height={25}
            />
          </button>
        </Link>

        <Link title="E-Mail" href="mailto:kubaklalo@gmail.com" target="_blank">
          <button>
            <Image alt="email" src="/icons/email.svg" width={25} height={25} />
          </button>
        </Link>
      </div>
    </>
  );
}
