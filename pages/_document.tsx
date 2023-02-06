import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <link rel="icon" href="/favicon/icon.ico" sizes="any" />
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </Head>

      <body>
        <div id={"globalLoader"} className="globalLoader">
          <div className="loader">
            <div />
            <div />
          </div>
        </div>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
