import Image from "next/image";

import styles from "./info.module.scss";

export default function InfoView() {
  return (
    <div className={styles.info}>
      <div className={`${styles.websites} reveal`}>
        <div className={styles.text}>
          <h2>Strony internetowe</h2>
          {Programs([
            "html",
            "css",
            "javascript",
            "typescript",
            "sass",
            "react",
            "vue",
            "vite",
          ])}
          <p>
            Zaczynałem od bardzo prostych stron dla znajomych, ale z&nbsp;czasem
            stawały się one coraz bardziej{" "}
            <u>skomplikowane i&nbsp;wymagające</u>. Dlatego niezbędne było
            nauczenie się <u>frameworków i&nbsp;bibliotek</u>. Początkowo{" "}
            <b>Vue</b>, a&nbsp;teraz <b>React</b>, dają mi ogromne możliwości,
            a&nbsp;dzięki tym narzędziom mogę w&nbsp;pełni{" "}
            <b>uwolnić swoją wyobraźnię</b>. Z&nbsp;pomocą <b>TypeScript</b>{" "}
            oraz <b>Sass</b> jestem w&nbsp;stanie stworzyć <u>dowolny design</u>
            .
          </p>
        </div>

        <div className={styles.image}>
          <Image
            alt="websites"
            src="/favicon/icon.svg"
            width={350}
            height={350}
          />
        </div>
      </div>

      <div className={`${styles.apps} reveal`}>
        <div className={styles.image}>
          <Image alt="apps" src="/images/apps.svg" width={350} height={350} />
        </div>

        <div className={styles.text}>
          <h2>Aplikacje</h2>
          {Programs([
            "node-js",
            "npm",
            "json",
            "python",
            "github",
            "git",
            "discord",
          ])}
          <p>
            Potrafię stworzyć różne aplikacje lub skrypty w&nbsp;językach:{" "}
            <b>JavaScript</b>, <b>Pyton</b> czy nawet <b>bash</b>! Największą
            szansę na kreatywne wykorzystanie dostępnych możliwości daje mi{" "}
            <u>programowanie botów</u> na różne serwery <b>Discord</b>,
            a&nbsp;strona, którą teraz przeglądasz została postawiona na moim
            prywatnym serwerze <b>Raspberry Pi</b>, którego odpowiednie
            skonfigurowanie wymagało wiedzy w&nbsp;poruszaniu się po{" "}
            <u>terminalu Linuxa</u>.
          </p>
        </div>
      </div>

      <div className={`${styles.photos} reveal`}>
        <div className={styles.text}>
          <h2>Fotografia i&nbsp;montaż filmów</h2>
          {Programs([
            "adobe-cc",
            "photoshop",
            "lightroom",
            "illustrator",
            "premiere-pro",
            "after-effects",
            "gimp",
            "inkspace",
          ])}
          <p>
            Hobbystycznie zajmuje się fotografią i&nbsp;montażem filmów. Za
            każdym razem gdy gdzieś wyjeżdżam,{" "}
            <u>muszę wziąć ze sobą swoją lustrzankę</u>, bo nigdy nie wiem, co
            może mnie spotkać! Gdy w&nbsp;moim mieście organizowane są różne
            wydarzenia, zawsze muszę tam być i&nbsp;robić serie zdjęć, a dzięki
            mojemu <b>doświadczeniu w&nbsp;obsłudze programów Adobe</b>, dalsza
            obróbka zdjęć lub &quot;sklejenie&quot; filmów{" "}
            <u>nie stanowi żadnego problemu</u>.
          </p>
        </div>

        <div className={`${styles.image} ${styles.clips}`}>
          <Image alt="clips" src="/images/clips.svg" width={350} height={350} />
        </div>
      </div>
    </div>
  );
}

function Programs(list: string[]) {
  return (
    <div className={styles.icons}>
      {list.map((img: string) => (
        <Image
          key={img}
          title={img}
          alt={img}
          src={`/icons/${img}.svg`}
          width={65}
          height={65}
        />
      ))}
    </div>
  );
}
