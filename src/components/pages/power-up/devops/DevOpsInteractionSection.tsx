import Image from "next/image";
import GrowTikaImage from "@/images/devops/growtika.jpg";
import {useTranslation} from "next-i18next";

const DevOpsInteractionSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={GrowTikaImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-5xl font-semibold mb-8">{t('devOps.interaction')}</h4>
            <p className="text-lg mt-4 mb-12">{t('devOps.interaction_description')}</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              {t('inquire_now')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevOpsInteractionSection;
