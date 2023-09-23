import Image from "next/image";
import DevelopmentBackendImage from "@/images/development/Backend.jpg";
import {useTranslation} from "next-i18next";

const BackendDevelopmentCornerstonesSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DevelopmentBackendImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">{t('backend.cornerstones')}</h4>
            <ul className="hire-advantages">
              <li className="text-white relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.cornerstones1')}</li>
              <li className="text-white relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.cornerstones2')}</li>
              <li className="text-white relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('backend.cornerstones3')}</li>
            </ul>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-8">
              {t('inquire_for_free')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BackendDevelopmentCornerstonesSection;
