import Head from "next/head";
import MobileAppDevelopmentBannerSection
  from "@/components/pages/development/mobile-apps/MobileAppDevelopmentBannerSection";
import MobileAppDevelopmentCategorySection
  from "@/components/pages/development/mobile-apps/MobileAppDevelopmentCategorySection";
import MobileAppDevelopmentSoftwareSection
  from "@/components/pages/development/mobile-apps/MobileAppDevelopmentSoftwareSection";
import MobileAppDevelopmentCloudSection
  from "@/components/pages/development/mobile-apps/MobileAppDevelopmentCloudSection";
import MobileAppDevelopmentAdvantageSection
  from "@/components/pages/development/mobile-apps/MobileAppDevelopmentAdvantageSection";
import MobileAppDevelopmentCaseSection
  from "@/components/pages/development/mobile-apps/MobileAppDevelopmentCaseSection";
import MobileAppDevelopmentBlogSection
  from "@/components/pages/development/mobile-apps/MobileAppDevelopmentBlogSection";
import MobileAppDevelopmentNextServiceSection
  from "@/components/pages/development/mobile-apps/MobileAppDevelopmentNextServiceSection";
import Contactus from "@/components/contact-us";
import MobileAppDevelopmentSolutionSection
  from "@/components/pages/development/mobile-apps/MobileAppDevelopmentSolutionSection";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function MobileAppDevelopment() {
  return (
    <>
      <Head>
        <title>Web and Mobile App | Mobile Apps</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <MobileAppDevelopmentBannerSection />
        <MobileAppDevelopmentCategorySection />
        <MobileAppDevelopmentSoftwareSection />
        <MobileAppDevelopmentCloudSection />
        <MobileAppDevelopmentAdvantageSection />
        <MobileAppDevelopmentSolutionSection />
        <MobileAppDevelopmentCaseSection />
        <MobileAppDevelopmentBlogSection />
        <MobileAppDevelopmentNextServiceSection />
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
