import Image from "next/image";
import DomenicoImage from "@/images/development/domenico.jpg";
import {useTranslation} from "next-i18next";

const WebAppDevelopmentSoftwareSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DomenicoImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <div className="lg:w-5/6">
              <h4 className="text-4xl font-bold mb-8">{t('web_apps.future_software')}</h4>
              <p className="leading-relaxed">
                {t('web_apps.future_software_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebAppDevelopmentSoftwareSection;
