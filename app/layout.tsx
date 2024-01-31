import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Navbar from "./Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme accentColor="violet">
          <Navbar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
