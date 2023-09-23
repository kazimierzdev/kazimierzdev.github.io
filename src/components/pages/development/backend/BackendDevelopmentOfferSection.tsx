import Image from "next/image";
import DevelopmentWebBackendImage from "@/images/development/Web_and_backend.jpg";
import {useTranslation} from "next-i18next";

const BackendDevelopmentOfferSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DevelopmentWebBackendImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">{t('backend.what_offer')}</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer1')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer2')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer3')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer4')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer5')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer6')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer7')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer8')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer9')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer10')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.what_offer11')}</li>
            </ul>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-8">
              {t('ask_free')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BackendDevelopmentOfferSection;
