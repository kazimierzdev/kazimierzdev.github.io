import Image from "next/image";
import DomenicaImage from "@/images/infrastructure/domenico.jpg";
import {useTranslation} from "next-i18next";

const InfrastructurePublishingSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-black text-5xl font-semibold mb-12 text-white">{t('infrastructure.publishing')}</h4>
            <p className="text-lg mt-4 mb-12 text-white">{t('infrastructure.publishing_description1')}</p>
            <p className="text-lg mt-4 mb-12 text-white">{t('infrastructure.publishing_description2')}</p>
            <p className="text-lg mt-4 mb-12 text-white">{t('infrastructure.publishing_description3')}</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              {t('inquire_for_free')}
            </button>
          </div>
          <div className="flex-1">
            <Image src={DomenicaImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfrastructurePublishingSection;
