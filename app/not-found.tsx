"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DynamicTitle from "@/lib/dynamicTitle";

import styles from "@/styles/not-found.module.scss";

export default function NotFoundPage() {
  DynamicTitle("Nie znaleziono strony / klalo.pl");

  const router = useRouter();
  const [seconds, setSeconds] = useState(10); // 10 seconds

  useEffect(() => {
    const counter = setInterval(() => {
      setSeconds((prevSeconds: number) => prevSeconds - 1);
      if (seconds === 1) router.push("/");
    }, 1000);

    return () => clearInterval(counter);
  }, [router, seconds]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nie znaleziono strony</h1>

      <p className={styles.description}>
        Pojawił się błąd przy próbie połączenia z&nbsp;wybraną stroną, za chwilę
        nastąpi powrót do strony głównej. <span>[{seconds}]</span>
      </p>
    </div>
  );
}
