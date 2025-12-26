'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import styles from './not-found.module.scss'

export default function NotFoundPage() {
  const router = useRouter()

  const [seconds, setSeconds] = useState<number>(10)

  useEffect(() => {
    const counter = setInterval(() => {
      setSeconds((prevSeconds: number) => prevSeconds - 1)
      if (seconds <= 1) router.push('/')
    }, 1000)

    return () => clearInterval(counter)
  }, [router, seconds])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nie znaleziono strony</h1>

      <p className={styles.description}>
        Pojawił się błąd przy próbie połączenia z&nbsp;wybraną stroną, za chwilę nastąpi powrót do
        strony głównej. <span>[{seconds}]</span>
      </p>
    </div>
  )
}
