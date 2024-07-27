"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Fade } from "react-awesome-reveal";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import DynamicTitle from "@/lib/dynamicTitle";

import styles from "@/styles/about.module.scss";

interface FormInput {
  email: string;
  title: string;
  message: string;
}

export default function AboutPage() {
  DynamicTitle("O mnie - Portfolio / klalo.pl");

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormInput>();

  const onSubmitHandler: SubmitHandler<FormInput> = (values) => {
    if (values.title.trim() === "" || values.message.trim() === "") {
      return alert("Pola nie mogą pozostać puste");
    }

    return axios
      .post("/api/email", values)
      .then(() => {
        alert("Wiadomość została wysłana!");
        reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const maxMsgLength = 5000;
  const [messageLength, setMsgLength] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Informacje o&nbsp;mnie</h1>

      <p className={styles.soon}>Więcej informacji już wkrótce</p>

      <div className={styles.formContainer}>
        <Fade triggerOnce>
          <h2>Skontaktuj się!</h2>

          <form
            id="form"
            className={styles.contactForm}
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <label htmlFor="email">
              <p>Adres e-mail:</p>

              <input
                placeholder="nazwa@mail.com"
                autoComplete="email"
                maxLength={320} // RFC 5321
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />

              {errors.email &&
                ((errors.email.type === "pattern" && (
                  <span>Nieprawidłowy adres e-mail</span>
                )) || <span>To pole jest wymagane</span>)}
            </label>

            <label>
              <p>Tytuł:</p>

              <input
                placeholder="Najlepszy tytuł!"
                autoComplete="off"
                maxLength={988} // RFC 5322
                {...register("title", { required: true })}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\s+/g, " ");
                }}
              />

              {errors.title && <span>To pole jest wymagane</span>}
            </label>

            <label>
              <p>Wiadomość:</p>

              <div>
                <TextareaAutosize
                  placeholder="Przywitaj się!"
                  {...register("message", { required: true })}
                  onChange={(e) => {
                    e.target.value = e.target.value
                      .replace("  ", " ")
                      .replace(/\n{3,}/g, "\n\n");
                    setMsgLength(e.currentTarget.value.length);
                  }}
                />

                <p className={styles.lengthInfo}>
                  {messageLength}/{maxMsgLength}
                </p>
              </div>

              {errors.message && <span>To pole jest wymagane</span>}
            </label>

            <button type="submit">
              <p>Wyślij wiadomość</p>
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
}
