import Link from "next/link";
import {useTranslation} from "next-i18next";

const BackendDevelopmentNextServiceSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-primary">
      <div className="container mx-auto flex flex-col items-center px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase text-secondary tracking-widest mb-12">{t('services.next_service')}</h6>
        <Link href="/development/mobile-apps" className="text-5xl md:text-6xl lg:text-8xl text-center font-bold text-white">{t('header.mobile_apps')}</Link>
      </div>
    </section>
  )
}

export default BackendDevelopmentNextServiceSection;
