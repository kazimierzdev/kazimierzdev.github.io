import {useTranslation} from "next-i18next";

const AboutUsOverviewSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col lg:flex-row gap-40">
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-[11.5rem] leading-tight font-bold lg:w-2/5">{t('about_us.what_we_do')}</h2>
          <div>
            <h4 className="text-black text-4xl font-bold mb-8">{t('about_us.what_we_competing')}</h4>
            <p className="text-xl text-light-grey mt-4 mb-12">{t('about_us.what_we_competing_description')}</p>
            <h4 className="text-black text-4xl font-bold mb-8">{t('about_us.touching_people')}</h4>
            <p className="text-xl text-light-grey mt-4 mb-12">{t('about_us.touching_people_description')}</p>
            <h4 className="text-black text-4xl font-bold mb-8">{t('about_us.handmade_by')}</h4>
            <p className="text-xl text-light-grey mt-4 mb-12">{t('about_us.handmade_by_description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsOverviewSection;
