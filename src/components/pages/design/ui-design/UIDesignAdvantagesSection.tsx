import AdvantageCard from "@/components/cards/advantage-card";
import {useTranslation} from "next-i18next";

const UIDesignAdvantagesSection = () => {
  const { t } = useTranslation('common');

  const advantages = [
    {
      title: t('your_advantages.joy_creating'),
      description: t('your_advantages.joy_creating_description')
    },
    {
      title: t('your_advantages.advantage_design'),
      description: t('your_advantages.advantage_design_description')
    },
    {
      title: t('your_advantages.everything_budget'),
      description: t('your_advantages.everything_budget_description')
    },
    {
      title: t('your_advantages.user_centered'),
      description: t('your_advantages.user_centered_description')
    },
    {
      title: t('your_advantages.engineering_art'),
      description: t('your_advantages.engineering_art_description')
    },
    {
      title: t('your_advantages.good_investment'),
      description: t('your_advantages.good_investment_description')
    },
  ];

  return (
    <section className="bg-dark-purple py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-7xl xl:text-9xl font-bold lg:text-center mb-8">
          {t('your_advantages.title')}
        </h2>
      </div>
      <div className="container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {advantages.map((advantage, index) => (
            <AdvantageCard title={advantage.title} description={advantage.description} key={`advantage-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UIDesignAdvantagesSection;
