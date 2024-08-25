import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/header/page";
import Navigation from "./components/navigation/page";
import Footer from "./components/footer/page";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio Website | Ajala Tolulope",
  description: "Frontdend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
      </head>
      <body className={inter.className}>
        <div className="preloader">
          <div className="banter-loader">
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
          </div>
        </div>

        <div className="progress">
          <div className="progress-bar" id="myBar"></div>
        </div>

        <div className="move-up" id="move-up">
          <span>
            <Link href="#home">
              <i className="fas fa-arrow-circle-up"></i>
            </Link>
          </span>
        </div>

        <div className="mousemove" id="mousemove"></div>

        <Header />

        <Navigation />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
