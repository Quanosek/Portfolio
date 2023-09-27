import localFont from "next/font/local";
import type { Metadata } from "next";
import Link from "next/link";

import "the-new-css-reset/css/reset.css";
import "@/styles/global.scss";

import Analytics from "../components/analytics";
import Loader from "../components/loader";
import Navigation from "../components/navigation";

// Global font-face
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

// Default metadata
export const metadata: Metadata = {
  title: "Moje portfolio / klalo.pl",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={Nexa.className}>
      <head>
        {/* Show logo */}
        <link rel="icon" href="/logo/favicon.ico" sizes="64x64" />
        <link rel="icon" href="/logo/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
      </head>

      <body>
        {/* Google Analytics */}
        {process.env.NODE_ENV !== "development" && <Analytics />}

        {/* Main content */}
        <Loader />
        <Navigation />
        {children}

        {/* Default footer */}
        <footer>
          <section>
            <p>
              Stworzone z <span>💙</span> przez{" "}
              <Link href="https://github.com/Quanosek">Jakuba Kłało</Link>
            </p>

            <p>Wszelkie prawa zastrzeżone &#169; 2023</p>
          </section>
        </footer>
      </body>
    </html>
  );
}
