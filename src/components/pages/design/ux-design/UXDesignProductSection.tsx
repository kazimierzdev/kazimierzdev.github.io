import Image from "next/image";
import IonicAppImage from "@/images/design/ionic_program.png";
import {useTranslation} from "next-i18next";

const UXDesignProductSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">{t('ux_design.advantage_products')}</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('ux_design.advantage_products1')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('ux_design.advantage_products2')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('ux_design.advantage_products3')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('ux_design.advantage_products4')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('ux_design.advantage_products5')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('ux_design.advantage_products6')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('ux_design.advantage_products7')}</li>
            </ul>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              {t('inquire_now')}
            </button>
          </div>
          <div className="flex-1">
            <Image src={IonicAppImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UXDesignProductSection;
