import ServiceCard from "@/components/cards/service-card";
import WebAppServiceImage from "@/images/services/Web_app.jpg";
import BackendServiceImage from "@/images/services/Backend.jpg";
import MobileAppServiceImage from "@/images/services/Mobile_app.jpg";
import {useTranslation} from "next-i18next";

const DevelopmentCategorySection = () => {
  const { t } = useTranslation('common');

  const services = [
    {
      image: WebAppServiceImage,
      title: t('header.web_apps'),
      description: t('header.web_apps_description')
    },
    {
      image: BackendServiceImage,
      title: t('header.backend'),
      description: t('header.backend_description')
    },
    {
      image: MobileAppServiceImage,
      title: t('header.mobile_apps'),
      description: t('header.mobile_apps_description')
    }
  ]
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">{t('header.development')}</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              {t('development.description')}
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

export default DevelopmentCategorySection;
