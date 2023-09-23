import {useTranslation} from "next-i18next";

const WebAppDevelopmentCategorySection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">{t('header.web_apps')}</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              {t('web_apps.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebAppDevelopmentCategorySection;
