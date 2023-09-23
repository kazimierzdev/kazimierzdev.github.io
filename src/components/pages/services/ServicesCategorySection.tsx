import ServiceCard from "@/components/cards/service-card";
import DesignServiceImage from "@/images/services/Design.jpg";
import DevelopmentServiceImage from "@/images/services/Development.jpg";
import PowerUpServiceImage from "@/images/services/Power_up.jpg";
import {useTranslation} from "next-i18next";

const ServicesCategorySection = () => {
  const { t } = useTranslation('common');

  const services = [
    {
      image: DesignServiceImage,
      title: t('header.design'),
      description: t('header.design_description'),
      flows: [t('header.ui_design'), t('header.ux_design'), t('header.architecture_design')]
    },
    {
      image: DevelopmentServiceImage,
      title: t('header.development'),
      description: t('header.development_description'),
      flows: [t('header.web_apps'), t('header.backend'), t('header.mobile_apps')]
    },
    {
      image: PowerUpServiceImage,
      title: t('header.power_up'),
      description: t('header.power_up_description'),
      flows: [t('header.apps'), t('header.devOps'), t('header.infrastructure')]
    }
  ]
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">{t('services.service_manufacturer')}</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              {t('services.service_manufacturer_description')}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-28 container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard image={service.image} title={service.title} description={service.description} flows={service.flows} key={`service-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCategorySection;
