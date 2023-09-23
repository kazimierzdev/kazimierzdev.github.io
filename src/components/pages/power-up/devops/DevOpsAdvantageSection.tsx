import Image from "next/image";
import ArchitectureImage from "@/images/devops/Architecture_design.jpg";
import {useTranslation} from "next-i18next";

const DevOpsAdvantageSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={ArchitectureImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8 text-white">{t('devOps.advantage')}</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('devOps.advantage1')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('devOps.advantage2')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('devOps.advantage3')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('devOps.advantage4')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('devOps.advantage5')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('devOps.advantage6')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('devOps.advantage7')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('devOps.advantage8')}</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">{t('devOps.advantage9')}</li>
            </ul>
            <p className="text-lg mt-4 mb-12 text-white">{t('devOps.advantage_hint')}</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              {t('inquire_for_free')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevOpsAdvantageSection;
