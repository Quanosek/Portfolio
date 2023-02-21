import Image from "next/image";
import Link from "next/link";

import styles from "./contact.module.scss";

export default function ContactView() {
  return (
    <>
      <h2>Skontaktuj&nbsp;się ze&nbsp;mną!</h2>

      <div className={`${styles.columns_holder} reveal`}>
        {/* first column */}
        <div className={styles.column}>
          <Link href={"tel:+48882461181"} className={styles.element}>
            <div className={styles.image}>
              <Image
                alt="tel"
                src={"/icons/phone.svg"}
                width={100}
                height={100}
              />
            </div>

            <div className={styles.content}>
              <h3>Numer prywatny:</h3>
              <p>+48 882 461 181</p>
            </div>
          </Link>

          <Link href={"mailto:kubaklalo@gmail.com"} className={styles.element}>
            <div className={styles.image}>
              <Image
                alt="mail"
                src={"/icons/email.svg"}
                width={100}
                height={100}
              />
            </div>

            <div className={styles.content}>
              <h3>Adres e-mail:</h3>
              <p>kubaklalo@gmail.com</p>
            </div>
          </Link>
        </div>

        {/* second column */}
        <div className={styles.column}>
          <Link href={"https://m.me/quanosek/"} className={styles.element}>
            <div className={styles.image}>
              <Image
                alt="fb"
                src={"/icons/facebook.svg"}
                width={100}
                height={100}
              />
            </div>

            <div className={styles.content}>
              <h3>Facebook</h3>
              <p>@quanosek</p>
            </div>
          </Link>

          <Link
            href={"https://twitter.com/messages/compose?recipient_id=@quanosek"}
            className={styles.element}
          >
            <div className={styles.image}>
              <Image
                alt="tw"
                src={"/icons/twitter.svg"}
                width={100}
                height={100}
              />
            </div>

            <div className={styles.content}>
              <h3>Twitter</h3>
              <p>@quanosek</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
