import PrincipleCard from "@/components/cards/principle-card";
import {useTranslation} from "next-i18next";

const AboutUsGuideSection = () => {
  const { t } = useTranslation('common');

  const advantages = [
    {
      title: t('about_us.digital'),
      description: t('about_us.digital_description')
    },
    {
      title: t('about_us.strong_collaboration'),
      description: t('about_us.strong_collaboration_description')
    },
    {
      title: t('about_us.state_art_tech'),
      description: t('about_us.state_art_tech_description')
    },
    {
      title: t('about_us.simplicity_comes_first'),
      description: t('about_us.simplicity_comes_first_description')
    },
    {
      title: t('about_us.full_speed_ahead'),
      description: t('about_us.full_speed_ahead_description')
    },
    {
      title: t('about_us.our_customers_comes'),
      description: t('about_us.our_customers_comes_description')
    },
  ];

  return (
    <section className="bg-dark-purple py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-7xl xl:text-9xl font-bold text-center md:text-left lg:text-center mb-12">
          {t('about_us.our_guiding')}
        </h2>
      </div>
      <div className="container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {advantages.map((advantage, index) => (
            <PrincipleCard title={advantage.title} description={advantage.description} key={`advantage-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsGuideSection;
