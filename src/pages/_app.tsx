import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default appWithTranslation(App);
