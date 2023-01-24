import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
