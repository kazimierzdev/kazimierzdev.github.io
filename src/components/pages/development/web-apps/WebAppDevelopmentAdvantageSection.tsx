import Image from "next/image";
import DevelopmentDevOpsImage from "@/images/development/Dev_Ops.jpg";
import {useTranslation} from "next-i18next";

const WebAppDevelopmentAdvantageSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">{t('web_apps.advantages')}</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('web_apps.advantages1')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('web_apps.advantages2')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('web_apps.advantages3')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('web_apps.advantages4')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('web_apps.advantages5')}</li>
            </ul>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-8">
              {t('inquire_for_free')}
            </button>
          </div>
          <div className="flex-1">
            <Image src={DevelopmentDevOpsImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebAppDevelopmentAdvantageSection;
