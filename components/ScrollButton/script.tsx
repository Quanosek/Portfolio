import Image from "next/image";
import { useEffect } from "react";

import styles from "./styles.module.scss";

export default function ScrollButton() {
  useEffect(() => {
    window.onscroll = () => {
      const scrollButton = document.getElementById(
        "scrollButton"
      ) as HTMLInputElement;
      const scrollStyle = scrollButton.style;

      if (document.documentElement.scrollTop > 280) {
        scrollStyle.visibility = "visible";
        scrollStyle.opacity = "0.8";
      } else {
        scrollStyle.visibility = "";
        scrollStyle.opacity = "";
      }
    };
  });

  return (
    <button
      title="Wróć na samą górę."
      id="scrollButton"
      className={styles.scrollButton}
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
