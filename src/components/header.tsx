'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './header.module.scss'

const HeaderComponent = () => {
  const [mobileMenu, showMobileMenu] = useState<boolean>(false)

  useEffect(() => {
    if (mobileMenu) {
      const top = document.documentElement.scrollTop
      const left = document.documentElement.scrollLeft

      window.onscroll = () => window.scrollTo(left, top)
    } else window.onscroll = () => {}
  }, [mobileMenu])

  const Buttons = () => (
    <div className={styles.buttons}>
      <div className={styles.text}>
        <Link href='/about'>
          <p>O&nbsp;mnie</p>
        </Link>

        <Link href='/projects'>
          <p>Projekty</p>
        </Link>

        <Link href='https://buycoffee.to/kubaklalo/' target='_blank'>
          <p>Wesprzyj</p>
        </Link>
      </div>

      <div className={styles.icons}>
        <Link title='Github' href='https://github.com/Quanosek/' target='_blank'>
          <Image src='/icons/github.svg' alt='github' width={25} height={25} draggable={false} />
        </Link>

        <Link title='LinkedIn' href='https://linkedin.com/in/Quanosek/' target='_blank'>
          <Image src='/icons/linkedin.svg' alt='email' width={25} height={25} draggable={false} />
        </Link>

        <Link title='Facebook' href='https://facebook.com/Quanosek/' target='_blank'>
          <Image
            src='/icons/facebook.svg'
            alt='facebook'
            width={25}
            height={25}
            draggable={false}
          />
        </Link>
      </div>
    </div>
  )

  return (
    <>
      <section>
        <Link
          href='/'
          className={styles.title}
          onClick={() => setTimeout(() => showMobileMenu(false), 200)}
        >
          <h1>Portfolio</h1>
        </Link>

        <Buttons />

        <button className={styles.hamburger} onClick={() => showMobileMenu(!mobileMenu)}>
          <div className={mobileMenu ? `${styles.active}` : ''} />
        </button>
      </section>

      <div
        className={`${styles.mobile} ${mobileMenu ? `${styles.active}` : ''}`}
        onClick={() => setTimeout(() => showMobileMenu(false), 200)}
      >
        <div className={styles.menu}>
          <Buttons />
        </div>
      </div>
    </>
  )
}

export default HeaderComponent
