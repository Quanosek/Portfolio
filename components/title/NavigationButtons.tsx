import Link from "next/link";
import Image from "next/image";

import styles from "./title.module.scss";

export default function NavigationButtons() {
  return (
    <>
      {/* big buttons */}
      <div className={styles.main}>
        <Link href="/CV_Jakub_Klalo.pdf" tabIndex={-1} target="_blank">
          <button>CV</button>
        </Link>

        <Link href="#info" tabIndex={-1}>
          <button>Informacje o mnie</button>
        </Link>

        <Link href="#projects" tabIndex={-1}>
          <button>Wszystkie projekty</button>
        </Link>

        <Link href="https://ko-fi.com/Quanosek/" target="_blank" tabIndex={-1}>
          <button>Wesprzyj mnie</button>
        </Link>
      </div>

      {/* small buttons */}
      <div className={styles.icons}>
        <Link
          title="Github"
          href="https://github.com/Quanosek/"
          target="_blank"
          tabIndex={-1}
        >
          <button>
            <Image
              className="icon"
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
          tabIndex={-1}
        >
          <button>
            <Image
              className="icon"
              alt="facebook"
              src="/icons/facebook.svg"
              width={25}
              height={25}
            />
          </button>
        </Link>

        <Link
          title="Twitter"
          href="https://twitter.com/Quanosek/"
          target="_blank"
          tabIndex={-1}
        >
          <button>
            <Image
              className="icon"
              alt="twitter"
              src="/icons/twitter.svg"
              width={25}
              height={25}
            />
          </button>
        </Link>

        <Link
          title="E-Mail"
          href="mailto:kubaklalo@gmail.com"
          target="_blank"
          tabIndex={-1}
        >
          <button>
            <Image
              className="icon"
              alt="email"
              src="/icons/email.svg"
              width={25}
              height={25}
            />
          </button>
        </Link>
      </div>
    </>
  );
}
