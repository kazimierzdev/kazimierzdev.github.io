import Image from "next/image";
import DomenicoImage from "@/images/development/domenico.jpg";
import {useTranslation} from "next-i18next";

const AppStoreFinalSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DomenicoImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">{t('apps.testing')}</h4>
            <p className="text-lg mt-4 mb-12">{t('apps.testing_description')}</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              {t('ask_free')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppStoreFinalSection;
