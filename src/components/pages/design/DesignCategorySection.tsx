import ServiceCard from "@/components/cards/service-card";
import UIDesignServiceImage from "@/images/services/UI_Design.jpg";
import UXDesignServiceImage from "@/images/services/UX_Design.jpg";
import ArchitectureServiceImage from "@/images/services/Architecture.jpg";
import {useTranslation} from "next-i18next";

const DesignCategorySection = () => {
  const { t } = useTranslation('common');

  const services = [
    {
      image: UIDesignServiceImage,
      title: t('header.ui_design'),
      description: t('header.ui_design_description')
    },
    {
      image: UXDesignServiceImage,
      title: t('header.ux_design'),
      description: t('header.ux_design_description')
    },
    {
      image: ArchitectureServiceImage,
      title: t('header.architecture_design'),
      description: t('header.architecture_design_description')
    }
  ]
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-center md:text-left text-9xl font-bold">{t('design.design')}</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              {t('design.design_description')}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-28 container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard image={service.image} title={service.title} description={service.description} key={`service-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignCategorySection;
