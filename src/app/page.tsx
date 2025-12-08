'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import Typewriter from '@/components/typewriter'
import Wave from 'react-wavify'

import Particles from '@/components/particles'
import { GentiumPlus } from '@/utils/fonts'

import styles from './page.module.scss'

export default function HomePage() {
  const Waves = () => (
    <div className={styles.wavesHandler}>
      <div className={styles.waves}>
        <Wave
          paused={false}
          options={{
            height: 50,
            amplitude: 38,
            speed: 0.1,
            points: 4,
          }}
        />

        <Wave
          paused={false}
          options={{
            height: 50,
            amplitude: 52,
            speed: 0.08,
            points: 3,
          }}
        />
      </div>
    </div>
  )

  const Programs = ({ programs }: { programs: string[] }) => (
    <div className={styles.programs}>
      {programs.map((name: string, index: number) => (
        <Image
          key={index}
          title={name}
          src={`/icons/programs/${name}.svg`}
          alt={name}
          width={40}
          height={40}
          draggable={false}
        />
      ))}
    </div>
  )

  const ProjectTile = ({
    link,
    img,
    title,
    description,
  }: {
    link: string
    img: string
    title: string
    description: string
  }) => (
    <Link href={`https://${link}/`} target='_blank'>
      <Image
        src={`/assets/projects/${img}_icon.svg`}
        alt={title}
        width={125}
        height={125}
        draggable={false}
      />

      <div className={styles.text}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <h4>{link}</h4>
        </div>

        <p>{description}</p>
      </div>
    </Link>
  )

  return (
    <>
      <div className={styles.welcomeHandler}>
        <div className={styles.welcome}>
          <p>Hej, nazywam się</p>
          <h1>Jakub Kłało</h1>

          <div className={styles.typewriter}>
            <Typewriter
              text={[
                'Witaj na mojej stronie',
                'Programowanie to moja pasja',
                'Fullstack Developer',
                'Zawsze chętnie służę pomocą',
                'Sprawdź wszystkie moje projekty',
                'Daj znać jak działa strona',
                'Potrzebujesz bota Discord?',
              ]}
              typingSpeed={65}
              pauseTime={5_000}
              loop={true}
            />
          </div>

          <button
            className={styles.snipped}
            onClick={() => {
              const element = document.getElementById('info') as HTMLElement
              element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <p>Kliknij, aby zjechać w&nbsp;dół</p>
          </button>
        </div>

        <div className={styles.particlesBackground}>
          <Particles />
        </div>
      </div>

      <Waves />

      <div id='info' className={styles.infoHandler}>
        <div className={styles.info}>
          <Fade triggerOnce>
            <div>
              <div className={styles.text}>
                <h2>Strony internetowe</h2>

                <Programs
                  programs={[
                    'typescript',
                    'react',
                    'nextjs',
                    'prisma',
                    'sass',
                    'vue',
                    'vite',
                    'figma',
                  ]}
                />

                <p>
                  Zaczynałem od bardzo prostych stron dla znajomych, ale
                  z&nbsp;czasem stawały się one coraz bardziej skomplikowane
                  i&nbsp;wymagające. Dlatego niezbędne było nauczenie się
                  frameworków i&nbsp;bibliotek. Początkowo <b>Vue</b>,
                  a&nbsp;teraz <b>React</b>, dają mi ogromne możliwości,
                  a&nbsp;dzięki tym narzędziom mogę w&nbsp;pełni{' '}
                  <b>uwolnić swoją wyobraźnię</b>. Z&nbsp;pomocą{' '}
                  <b>TypeScript</b> oraz <b>Sass</b> jestem w&nbsp;stanie
                  stworzyć dowolny design.
                </p>
              </div>

              <Image
                className={styles.image}
                src='/assets/home/rocket.svg'
                alt='websites'
                width={330}
                height={330}
                draggable={false}
              />
            </div>

            <div className={styles.reverse}>
              <Image
                className={styles.image}
                src='/assets/home/apps.svg'
                alt='apps'
                width={330}
                height={330}
                draggable={false}
              />

              <div className={styles.text}>
                <h2>Aplikacje</h2>

                <Programs
                  programs={[
                    'raspberry-pi',
                    'vs-code',
                    'node-js',
                    'npm',
                    'python',
                    'github',
                    'git',
                    'discord',
                  ]}
                />

                <p>
                  Potrafię stworzyć różne aplikacje lub skrypty w&nbsp;językach:{' '}
                  <b>JavaScript</b>, <b>Pyton</b> czy nawet <b>bash</b>!
                  Największą szansę na kreatywne wykorzystanie dostępnych
                  możliwości daje mi programowanie botów na różne serwery{' '}
                  <b>Discord</b>, a&nbsp;strona, którą teraz przeglądasz została
                  postawiona na moim prywatnym serwerze <b>Raspberry Pi</b>,
                  którego odpowiednie skonfigurowanie wymagało wiedzy
                  w&nbsp;poruszaniu się po terminalu Linuxa.
                </p>
              </div>
            </div>

            <div>
              <div className={styles.text}>
                <h2>Fotografia i&nbsp;montaż filmów</h2>

                <Programs
                  programs={[
                    'photoshop',
                    'lightroom',
                    'illustrator',
                    'premiere-pro',
                    'after-effects',
                    'audition',
                    'gimp',
                    'audacity',
                  ]}
                />

                <p>
                  Hobbystycznie zajmuje się fotografią i&nbsp;montażem filmów.
                  Za każdym razem gdy gdzieś wyjeżdżam, muszę wziąć ze sobą
                  swoją lustrzankę, bo nigdy nie wiem, co może mnie spotkać! Gdy
                  w moim mieście organizowane są różne wydarzenia, zawsze muszę
                  tam być i&nbsp;robić serie zdjęć, a&nbsp;dzięki mojemu{' '}
                  <b>doświadczeniu w&nbsp;obsłudze programów Adobe</b>, dalsza
                  obróbka zdjęć lub montaż filmów nie stanowi żadnego problemu.
                </p>
              </div>

              <Image
                className={styles.image}
                src='/assets/home/clips.svg'
                alt='clips'
                width={330}
                height={330}
                draggable={false}
                style={{ scale: '0.95' }}
              />
            </div>

            <Link href='/about' className={styles.moreButton}>
              <p>Dowiedz się więcej</p>
            </Link>
          </Fade>
        </div>
      </div>

      <div className={styles.mottoHandler}>
        <div className={`${GentiumPlus.className} ${styles.motto}`}>
          <h2>
            „Bardziej niż cokolwiek innego – przygotowywanie się
            <br />
            jest sekretem do sukcesu.”
          </h2>

          <p>~ Henry Ford</p>
        </div>

        <div
          className={styles.parallaxBackground}
          style={{ backgroundImage: 'url(/assets/home/panorama.webp)' }}
        />
      </div>

      <div className={styles.projectsHandler}>
        <div className={styles.projects}>
          <h2>Najlepsze projekty:</h2>

          <Fade triggerOnce>
            <div className={styles.grid}>
              <Fade cascade damping={0.1} triggerOnce>
                <ProjectTile
                  link='spiewniki.klalo.pl'
                  img='spiewniki'
                  title='Śpiewniki'
                  description='Zebrane w&nbsp;jednym miejscu śpiewniki i&nbsp;pieśni religijne'
                />

                <ProjectTile
                  link='metrum.klalo.pl'
                  img='metrum'
                  title='Metrum'
                  description='Zaawansowany bot muzyczny na platformę Discord'
                />

                <ProjectTile
                  link='fonetyka.klalo.pl'
                  img='fonetyka'
                  title='Fonetyka'
                  description='Polski generator zapisu fonetycznego'
                />

                <ProjectTile
                  link='games.klalo.pl'
                  img='games'
                  title='Pokój gier'
                  description='Przeglądarkowe wersje znanych i&nbsp;lubianych gier'
                />
              </Fade>
            </div>

            <div className={styles.more}>
              <h3>
                Sprawdź więcej moich projektów klikając w&nbsp;ten przycisk:
              </h3>

              <Link href='/projects' className={styles.moreButton}>
                <p>Zobacz moje projekty</p>
              </Link>
            </div>
          </Fade>
        </div>
      </div>

      <Waves />

      <div className={styles.question}>
        <Fade cascade damping={0.1} triggerOnce>
          <div className={styles.title}>
            <h2>Masz jakieś pytanie?</h2>

            <p>
              Chętnie odpowiem na każde z&nbsp;nich, a&nbsp;jeżeli potrzebujesz
              pomocy, to jestem do Twojej dyspozycji.
            </p>
          </div>

          <div className={styles.button}>
            <Link href='/about#form' className={styles.moreButton}>
              <p>Przejdź do formularza</p>
            </Link>
          </div>
        </Fade>
      </div>
    </>
  )
}
