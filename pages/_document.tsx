import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="Strona Jakub Kłało." />

        <link rel="icon" href="/favicon/icon.ico" sizes="any" />
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </Head>

      <body>
        <div id="globalLoader" className="globalLoader">
          <div className="loader">
            <div />
            <div />
          </div>
        </div>

        <Main />

        <footer>
          <p>
            Stworzone z 💙 przez Jakuba Kłało &#169; 2023 Wszelkie prawa
            zastrzeżone.
          </p>
        </footer>

        <NextScript />
      </body>
    </Html>
  );
}
