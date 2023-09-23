import Head from "next/head";
import DevelopmentBannerSection from "@/components/pages/development/DevelopmentBannerSection";
import DevelopmentCategorySection from "@/components/pages/development/DevelopmentCategorySection";
import DevelopmentWebMobileSection from "@/components/pages/development/DevelopmentWebMobileSection";
import DevelopmentInvestmentSection from "@/components/pages/development/DevelopmentInvestmentSection";
import DevelopmentAdvantageSection from "@/components/pages/development/DevelopmentAdvantageSection";
import DevelopmentBlogSection from "@/components/pages/development/DevelopmentBlogSection";
import DevelopmentNextServiceSection from "@/components/pages/development/DevelopmentNextServiceSection";
import Contactus from "@/components/contact-us";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Development() {
  return (
    <>
      <Head>
        <title>Web and Mobile App | Development</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <DevelopmentBannerSection />
        <DevelopmentCategorySection />
        <DevelopmentWebMobileSection />
        <DevelopmentInvestmentSection />
        <DevelopmentAdvantageSection />
        <DevelopmentBlogSection />
        <DevelopmentNextServiceSection />
        <Contactus />
      </main>
    </>
  )
}

export async function getStaticProps(context: any) {
  const { locale } = context

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}
