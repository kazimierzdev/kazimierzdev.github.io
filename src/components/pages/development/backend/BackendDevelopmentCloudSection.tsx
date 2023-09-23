import {useTranslation} from "next-i18next";

const BackendDevelopmentCloudSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold">{t('backend.cloud')}</h2>
        <div className="flex md:justify-end mt-12">
          <div className="md:w-2/3">
            <p className="relative leading-relaxed md:mr-12">
              {t('backend.cloud_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BackendDevelopmentCloudSection;
