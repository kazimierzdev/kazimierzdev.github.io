import MankidoImage from "@/images/mankido.jpg";
import LogBookImage from "@/images/logbook.jpg";
import BuyingImage from "@/images/buying.jpg";
import CaseCard from "@/components/cards/case-card";
import {useTranslation} from "next-i18next";

const CaseSection = () => {
  const { t } = useTranslation('common');

  const caseItems = [
    {
      image: MankidoImage,
      title: t('projects.mankido_app'),
      type: t('projects.mankido')
    },
    {
      image: LogBookImage,
      title: t('projects.logbook'),
      type: t('projects.salzburg_university')
    },
    {
      image: BuyingImage,
      title: t('projects.needit_gmbh'),
      type: t('projects.needit_rent')
    }
  ];

  return (
    <section className="bg-dark-purple py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-center lg:text-left text-7xl xl:text-9xl font-bold mb-8">
          <span className="block">{t('case')}</span>
          <span className="block">{t('studies')}</span>
        </h2>
      </div>
      <div className="container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {caseItems.map((item, index) => (
            <CaseCard image={item.image} title={item.title} type={item.type} key={`case-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseSection;
