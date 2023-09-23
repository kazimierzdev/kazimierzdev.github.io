import Image from "next/image";
import LogBookImage from "@/images/design/logbook.jpg";
import {useTranslation} from "next-i18next";

const AppStoreAccountSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">{t('apps.account')}</h4>
            <p className="text-lg mt-4 mb-12 text-white">{t('apps.account_description')}</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              {t('inquire_for_free')}
            </button>
          </div>
          <div className="flex-1">
            <Image src={LogBookImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppStoreAccountSection;
