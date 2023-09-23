import Image from "next/image";
import MobileAppsImage from "@/images/development/Apps_2.jpg";
import {useTranslation} from "next-i18next";

const MobileAppDevelopmentSoftwareSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <div className="lg:w-5/6">
              <h4 className="text-4xl font-bold mb-8">{t('mobile_apps.seamlessly_integrated')}</h4>
              <p className="leading-relaxed">
                {t('mobile_apps.seamlessly_integrated_description')}
              </p>
              <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-8">
                {t('inquire_for_free')}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Image src={MobileAppsImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppDevelopmentSoftwareSection;
