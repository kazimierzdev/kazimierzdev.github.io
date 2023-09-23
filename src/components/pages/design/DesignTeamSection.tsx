import Image from "next/image";
import DesignTeamImage from "@/images/design/design-team.jpg";
import {useTranslation} from "next-i18next";

const DesignTeamSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DesignTeamImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">{t('design.following_advantage')}</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('design.following_advantage_description1')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('design.following_advantage_description2')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('design.following_advantage_description3')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">{t('design.following_advantage_description4')}</li>
            </ul>
            <p className="text-lg mt-4 mb-12">{t('design.following_advantage_hint')}</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              {t('inquire_now')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignTeamSection;
