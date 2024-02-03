import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

import dynamic from "next/dynamic";
const ToastifyContainer = dynamic(() => import("./components/ToastContainer"), {
  ssr: false,
});

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataCakra",
  description: "Technical Test for DataCakra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ToastifyContainer />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
