import Image from "next/image";
import WebBackendImage from "@/images/infrastructure/Web_and_backend.jpg";
import {useTranslation} from "next-i18next";

const InfrastructureCloudSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={WebBackendImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-5xl font-semibold mb-8">{t('infrastructure.cloud')}</h4>
            <p className="text-lg mt-4 mb-12">{t('infrastructure.cloud_description')}</p>
            <h4 className="text-black text-lg font-bold mb-12">{t('infrastructure.advantage')}</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('infrastructure.advantage1')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('infrastructure.advantage2')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('infrastructure.advantage3')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('infrastructure.advantage4')}</li>
            </ul>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              {t('inquire_now')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfrastructureCloudSection;
