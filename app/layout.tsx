import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galácticos | Fútbol",
  description: "La pasión por el fútbol, llevada al siguiente nivel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}
