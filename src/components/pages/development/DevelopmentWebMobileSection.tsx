import {useTranslation} from "next-i18next";

const DevelopmentWebMobileSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold">{t('development.development')}</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="relative leading-relaxed md:mr-12">
              {t('development.development_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentWebMobileSection;
