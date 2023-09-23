import CedevitaImage from "@/images/design/cedevita.jpg";
import LogBookImage from "@/images/design/logbook.jpg";
import VendingImage from "@/images/design/vending.png";
import CaseCard from "@/components/cards/case-card";
import {useTranslation} from "next-i18next";

const DesignCaseStudiesSection = () => {
  const { t } = useTranslation('common');

  const caseItems = [
    {
      image: LogBookImage,
      title: t('projects.logbook'),
      type: t('projects.salzburg_university')
    },
    {
      image: CedevitaImage,
      title: t('projects.cedevita_point'),
      type: t('projects.cedevita')
    },
    {
      image: VendingImage,
      title: t('projects.vending_social'),
      type: t('projects.babos')
    }
  ];

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-center lg:text-left text-7xl xl:text-9xl font-bold mb-8">
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

export default DesignCaseStudiesSection;
