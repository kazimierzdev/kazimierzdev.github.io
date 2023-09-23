import Image from "next/image";
import DevelopmentCodeImage from "@/images/development/Code.jpg";
import {useTranslation} from "next-i18next";

const DevelopmentAdvantageSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DevelopmentCodeImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">{t('development.advantages')}</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('development.advantages1')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('development.advantages2')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('development.advantages3')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('development.advantages4')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('development.advantages5')}</li>
            </ul>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              {t('ask_free')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentAdvantageSection;
