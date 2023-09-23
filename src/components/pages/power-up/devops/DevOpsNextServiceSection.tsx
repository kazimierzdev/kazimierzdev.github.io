import Link from "next/link";
import {useTranslation} from "next-i18next";

const DevOpsNextServiceSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-primary">
      <div className="container mx-auto px-8 md:px-0 flex flex-col items-center">
        <h6 className="text-normal text-center font-bold uppercase text-secondary tracking-widest mb-12">{t('services.next_service')}</h6>
        <Link href="/power-up/infrastructure" className="text-5xl md:text-6xl lg:text-8xl text-center font-bold text-white">{t('header.infrastructure')}</Link>
      </div>
    </section>
  )
}

export default DevOpsNextServiceSection;
