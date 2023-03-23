import Image from "next/image";

import styles from "./style.module.scss";

export default function ScrollButton() {
  return (
    <button
      title="Wróć na samą górę."
      id="scrollButton"
      className={styles.scroll_button}
      onClick={() => {
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Image
        className="icon"
        alt="up"
        src="/icons/arrow.svg"
        width={30}
        height={30}
      />
    </button>
  );
}
