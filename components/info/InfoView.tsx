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
            wykorzystanie <u>frameworku</u>. Początkowo <b>Vue</b>, a&nbsp;teraz{" "}
            <b>React</b>, dają ogromne możliwości i&nbsp;dzięki tym narzędziom
            mogę w&nbsp;pełni <b>uwolnić swoją wyobraźnię</b>. Z&nbsp;pomocą{" "}
            <b>TypeScript</b> oraz <b>Sass</b> jestem w&nbsp;stanie stworzyć{" "}
            <u>dowolny design</u>.
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
          <Image
            alt="apps"
            src="/images/info/apps.svg"
            width={350}
            height={350}
          />
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
            Tworzę również aplikacje lub skrypty w&nbsp;językach: <b>Python</b>,{" "}
            <b>JavaScript</b> czy nawet <b>bash</b>! Najlepszą możliwością na
            kreatywne wykorzystanie dostępnych możliwości daje mi{" "}
            <u>programowanie botów</u> na różne serwery <b>Discord</b>,
            a&nbsp;strona, którą teraz widzisz została postawiona na moim
            prywatnym serwerze uruchomionym na <b>Raspberry Pi</b>, które
            korzysta ze zmodyfikowanej{" "}
            <u>dystrybucji Linuxa na bazie Debiana</u>.
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
            Hobbystycznie zajmuje się fotografią i&nbsp;montowaniem filmów. Za
            każdym razem gdy gdzieś wyjeżdżam,{" "}
            <u>biorę ze sobą swoją lustrzankę</u>, bo nigdy nie wiesz, co może
            Cię spotkać. Gdy w moim mieście są organizowane wydarzenia, zawsze
            muszę tam być i&nbsp;robić serie zdjęć! Oprócz tego,{" "}
            <b>mam doświadczenie w&nbsp;obsłudze programów Adobe</b>, więc
            dalsza obróbka zdjęć lub &quot;sklejenie&quot; filmu{" "}
            <u>nie stanowi żadnego problemu</u>.
          </p>
        </div>

        <div className={styles.image}>
          <Image
            alt="photos"
            src="/images/info/photos.svg"
            width={350}
            height={350}
          />
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
