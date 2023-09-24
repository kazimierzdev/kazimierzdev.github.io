import Head from "next/head";
import DevOpsBannerSection from "@/components/pages/power-up/devops/DevOpsBannerSection";
import DevOpsCategorySection from "@/components/pages/power-up/devops/DevOpsCategorySection";
import DevOpsInteractionSection from "@/components/pages/power-up/devops/DevOpsInteractionSection";
import DevOpsAdvantageSection from "@/components/pages/power-up/devops/DevOpsAdvantageSection";
import DevOpsNextServiceSection from "@/components/pages/power-up/devops/DevOpsNextServiceSection";
import Contactus from "@/components/contact-us";

export default function DevOps() {
  return (
    <>
      <Head>
        <title>Web and Mobile App | DevOps</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <DevOpsBannerSection />
        <DevOpsCategorySection />
        <DevOpsInteractionSection />
        <DevOpsAdvantageSection />
        <DevOpsNextServiceSection />
        <Contactus />
      </main>
    </>
  )
}
