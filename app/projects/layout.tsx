import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekty / Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
