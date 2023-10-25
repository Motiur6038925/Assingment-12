"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbarr from "../component/Mymenu";
import Footer from "../component/Footer";
import NextNProgress from "nextjs-progressbar";
const inter = Inter({ subsets: ["latin"] });

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbarr />
        {children}
        <Footer />

        <ProgressBar
          height="23px"
          color="red"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
