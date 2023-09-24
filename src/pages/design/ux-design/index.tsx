import Head from "next/head";
import UXDesignBannerSection from "@/components/pages/design/ux-design/UXDesignBannerSection";
import UXDesignCategorySection from "@/components/pages/design/ux-design/UXDesignCategorySection";
import UXDesignCostSection from "@/components/pages/design/ux-design/UXDesignCostSection";
import UXDesignProductSection from "@/components/pages/design/ux-design/UXDesignProductSection";
import UXDesignResultSection from "@/components/pages/design/ux-design/UXDesignResultSection";
import UXDesignAdvantagesSection from "@/components/pages/design/ux-design/UXDesignAdvantagesSection";
import UXDesignBlogSection from "@/components/pages/design/ux-design/UXDesignBlogSection";
import UXDesignNextServiceSection from "@/components/pages/design/ux-design/UXDesignNextServiceSection";
import Contactus from "@/components/contact-us";

export default function UxDesign() {
  return (
    <>
      <Head>
        <title>Web and Mobile App | UX Design</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <UXDesignBannerSection />
        <UXDesignCategorySection />
        <UXDesignCostSection />
        <UXDesignProductSection />
        <UXDesignResultSection />
        <UXDesignAdvantagesSection />
        <UXDesignBlogSection />
        <UXDesignNextServiceSection />
        <Contactus />
      </main>
    </>
  )
}
