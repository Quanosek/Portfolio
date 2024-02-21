"use client";

import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Fade } from "react-awesome-reveal";

import styles from "@/styles/about.module.scss";
import DynamicTitle from "@/functions/dynamicTitle";

export type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function AboutPage() {
  DynamicTitle("O mnie - Portfolio / klalo.pl");

  // https://www.react-hook-form.com/get-started/

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("/api/email", { method: "POST", body: JSON.stringify(data) })
      .then((res) => res.json())
      .then((response) => alert(response.message))
      .catch((err) => alert(err));
  };

  const maxMsgLength = 5000;
  const [messageLength, setMsgLength] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Informacje o&nbsp;mnie:</h1>

      <p className={styles.soon}>Więcej informacji pojawi się wkrótce!</p>

      <div id="form" className={styles.formHandler}>
        <Fade triggerOnce>
          <h2>Skontaktuj się!</h2>

          <form
            className={styles.contactForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="name">
                Imię i nazwisko <span>*</span>
              </label>

              <input
                id="name"
                type="text"
                placeholder="Twoje dane"
                autoComplete="off"
                maxLength={988} // RFC 5322
                {...register("name", { required: true })}
              />

              {errors.name && <span>To pole jest wymagane!</span>}
            </div>

            <div>
              <label htmlFor="email">
                Adres e-mail <span>*</span>
              </label>

              <input
                id="email"
                type="text"
                placeholder="example@domain.com"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
                maxLength={320} // RFC 5321
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />

              {errors.email &&
                ((errors.email.type === "pattern" && (
                  <span>Nieprawidłowy adres e-mail!</span>
                )) || <span>To pole jest wymagane!</span>)}
            </div>

            <div>
              <label htmlFor="message">
                Wiadomość <span>*</span>
              </label>

              <div>
                <textarea
                  id="message"
                  placeholder="Przywitaj się!"
                  autoComplete="off"
                  maxLength={maxMsgLength}
                  {...register("message", { required: true })}
                  onInput={(e) => setMsgLength(e.currentTarget.value.length)}
                />

                <p className={styles.lengthInfo}>
                  {messageLength}/{maxMsgLength}
                </p>
              </div>

              {errors.message && <span>To pole jest wymagane!</span>}
            </div>

            <button>
              <p>Wyślij wiadomość</p>
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
}
