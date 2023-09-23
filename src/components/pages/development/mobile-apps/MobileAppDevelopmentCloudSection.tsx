import {useTranslation} from "next-i18next";

const MobileAppDevelopmentCloudSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold">{t('mobile_apps.what_app')}</h2>
        <div className="flex md:justify-end mt-12">
          <div className="md:w-2/3">
            <p className="relative leading-relaxed mr-12">
              {t('mobile_apps.what_app_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppDevelopmentCloudSection;
