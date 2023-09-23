import Link from "next/link";
import {useTranslation} from "next-i18next";

const AboutUsApplySection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          <h2 className="text-6xl md:text-7xl lg:text-8xl leading-tight font-bold lg:w-1/3 lg:pr-20">{t('about_us.apply_now')}</h2>
          <div className="lg:w-2/3">
            <h4 className="text-black text-4xl mb-8 leading-normal lg:pl-8">{t('about_us.apply_now_description')}</h4>
            <Link href="/career" className="text-secondary font-bold uppercase text-lg mt-4 lg:pl-8">
              <span className="border-b-2 border-secondary">{t('more_info')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsApplySection;
