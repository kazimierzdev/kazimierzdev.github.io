import AppsServiceImage from "@/images/services/Apps.jpg";
import DevOpsServiceImage from "@/images/services/Dev_Ops.jpg";
import InfrastructureServiceImage from "@/images/services/Web_and_backend.jpg";
import ServiceCard from "@/components/cards/service-card";
import {useTranslation} from "next-i18next";

const PowerUpCategorySection = () => {
  const { t } = useTranslation('common');

  const services = [
    {
      image: AppsServiceImage,
      title: t('header.apps'),
      description: t('header.apps_description')
    },
    {
      image: DevOpsServiceImage,
      title: t('header.devOps'),
      description: t('header.devOps_description')
    },
    {
      image: InfrastructureServiceImage,
      title: t('header.infrastructure'),
      description: t('header.infrastructure_description')
    }
  ]
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">{t('header.power_up')}</h2>
        <div className="flex flex-col md:flex-row md:justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              {t('power_up.description')}
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

export default PowerUpCategorySection;
