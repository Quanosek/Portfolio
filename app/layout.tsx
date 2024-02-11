import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import Link from "next/link";

import "the-new-css-reset/css/reset.css";
import "@/styles/globals.scss";

import Analytics from "@/components/analytics";
import Header from "@/components/header";

// global font-face
const Nexa = localFont({
  src: [
    {
      path: "../fonts/nexa_light.woff2",
      weight: "200",
    },
    {
      path: "../fonts/nexa_regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/nexa_bold.woff2",
      weight: "800",
    },
  ],

  style: "normal",
  display: "swap",
});

// global metadata (default values)
export const metadata: Metadata = {
  title: "Moje portfolio / klalo.pl",
  description: "My personal website",
  icons: {
    icon: "/assets/info/images/rocket.svg",
  },
};

// global viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "black",
};

// app project layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={Nexa.className}>
      {process.env.NODE_ENV !== "development" && <Analytics />}

      <body>
        <Header />

        <section>
          <main>{children}</main>
        </section>

        <footer>
          <section>
            <p>
              Stworzone z 💙 przez{" "}
              <Link href="https://github.com/quanosek" target="_blank">
                Jakuba Kłało
              </Link>
            </p>

            <p>
              Wszelkie prawa zastrzeżone &#169; 2023-{new Date().getFullYear()}
            </p>
          </section>
        </footer>
      </body>
    </html>
  );
}
